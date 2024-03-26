import { SubmitHandler, useForm } from "react-hook-form";
import {
  ApplicantForm,
  ChildForm,
  SpouseForm,
} from "../../components/ParticipantForm";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FamilyForm } from "../../components/FamilyForm";
import { Participant, ParticipantFormData, ParticipantType } from "../../types/Participant";
import { ApplicationForm } from "../../components/ApplicationForm";
import { Layout } from "../../components/Layout";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useAppDispatch";
import { getHousingProgramList } from "../../store/slices/housing_program/thunks";
import { ApplicationIntention } from "../../types/Application";
import { Family } from "../../types/Family";

export interface EditPageForm {
  application: {
    housing_program: number
    intention: ApplicationIntention
    queue: number
  }
  applicant: Participant
  family: Family
  child?: Array<Participant>
  spouse?: Participant
}

export default function EditPage() {
  const dispatch = useAppDispatch()
  const { housing_programs, isLoading } = useAppSelector((state) => state.housing_program)
  const [children, setChildren] = useState<Array<number> | undefined>(
    undefined
  );
  const { register, unregister, handleSubmit, watch, control } = useForm<any>({
    defaultValues: {
      application: {
        housing_program: 1
      }
    }
  });
  const isMarried: boolean = watch("family.isMarried");
  const isLarge: boolean = watch("application.queue")

  useEffect(() => {
    dispatch(getHousingProgramList())
  }, [])

  useEffect(() => {
    if (isMarried === false) unregister("spouse");
  }, [isMarried]);

  const onSubmit: SubmitHandler<EditPageForm> = async (values) => {
    const queueName = isLarge ? "large_queue": "base_queue"

    const data: ParticipantFormData = {
      surname: values.applicant.surname,
      name: values.applicant.name,
      patronymic: values.applicant.patronymic,
      identification_document: [{
        ...values.applicant.identification_document
      }],
      snils: [{
        number: values.applicant.snils.number
      }],

      family: {
        is_marries: values.family.isMarried,
        is_complete: values.family.isComplete,
        is_large: values.family.isLarge,
        family: [],
      },
      application: [{
        housing_program: values.application.housing_program,
        intention: values.application.intention,
        [queueName]: {
          queue: values.application.queue
        }
      }],
    };


    if (values.spouse) {
      const { identification_document, snils, ...spouseData } = values.spouse
      console.log(spouseData)
      data.family.family.push({
        ...spouseData,
        identification_document: [{ ...identification_document }],
        snils: [{ ...snils }],
      });
    }

    if (Array.isArray(values.child) && children != null) {

      values?.child.forEach((child) => {
        if (typeof child === "object") {
          const { snils, identification_document, ...child_data } = child
          data.family.family.push({
            ...child_data,
            snils: [{ ...snils }],
            identification_document: [{ ...identification_document }]
          });
        }

      })
    }



    console.log(values)
    console.log(data);

    await axios
      .post(`${import.meta.env.VITE_API}/items/participant`, data, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.error(e));
  };

  const addChild = () =>
    setChildren((prev) => {
      let max = 0;

      console.log(prev);

      if (prev === undefined || prev.length === 0) {
        return [0];
      }

      if (prev.length > 0) {
        prev.forEach((childIndex) => {
          if (max < childIndex) {
            max = childIndex;
          }
        });

        return [...prev, max + 1];
      }
      return prev;
    });

  const deleteChild = (index: number) => {
    unregister("child"); //`child[${index}]`
    setChildren((prev) => {
      return prev?.filter((child_index) => child_index != index);
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <ApplicationForm
          register={register}
          prefix={"application"}
          control={control}
          isLoading={isLoading}
          programs={housing_programs.data}

        />
        <ApplicantForm
          register={register}
          prefix={ParticipantType.APPLICANT}
          control={control}
        />
        <FamilyForm
          register={register}
          prefix={"family"}
        />

        {isMarried && (
          <SpouseForm
            register={register}
            prefix={ParticipantType.SPOUSE}
            control={control}
          />
        )}

        <Button
          onClick={addChild}
          sx={{
            display: "flex",
            background: '#007AFF',
            color: "#FFF",
            width: "160px"
          }}
        >
          Добавить ребенка
        </Button>
        {
          children != undefined &&
          children.length > 0 &&
          children.map((item) => {
            return (
              <ChildForm
                key={`child_#${item}`}
                prefix={ParticipantType.CHILD}
                register={register}
                childIndex={item}
                onDelete={deleteChild}
                control={control}
              />
            );
          })
        }

        <Button sx={{
          display: "flex",
          background: '#007AFF',
          color: "#FFF",
          width: "160px"
        }} type="submit">
          Отправить
        </Button>
      </form>
    </Layout>
  );
}
