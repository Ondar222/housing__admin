import { SubmitHandler, useForm } from "react-hook-form";
import { LayoutSidebar } from "../../components/LayoutSidebar";
import {
  ApplicantForm,
  ChildForm,
  SpouseForm,
} from "../../components/ParticipantForm";
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { FamilyForm } from "../../components/FamilyForm";
import { Participant, ParticipantFormData, ParticipantType } from "../../types/Participant";
import { ApplicationForm } from "../../components/ApplicationForm";
import { PassportForm } from "../../components/DocumentForm";
import { SnilsForm } from "../../components/DocumentForm";
import { Layout } from "../../components/Layout";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useAppDispatch";
import { getHousingProgramList } from "../../store/slices/housing_program/thunks";
import { ApplicationIntention, ApplicationT } from "../../types/Application";
import { IdentificationDocument } from "../../types/Document";
import { Family } from "../../types/Family";


export interface EditPageForm {
  application: {
    housing_program: number
    intention: ApplicationIntention
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
  const isMarried = watch("family.isMarried");



  useEffect(() => {
    dispatch(getHousingProgramList())
  }, [])

  useEffect(() => {
    if (isMarried === false) unregister("spouse");
  }, [isMarried]);

  const onSubmit: SubmitHandler<EditPageForm> = async (values) => {

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
        // @ts-ignore
        housing_program: values.application.housing_program,
        intention: "constuction"
      }]
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



    // console.log(values)
    console.log(data);

    await axios
      .post("https://cbr17.rtyva.ru/cms/items/participant", data, {
        headers: {
          Authorization: "Bearer S05SaNBtAYK1xgzj8PKvEVtchmfQCCFx",
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
        <ApplicationForm register={register} programs={housing_programs.data} prefix={"application"} isLoading={isLoading} control={control} />
        <ApplicantForm prefix={ParticipantType.APPLICANT} register={register} control={control} />
        <FamilyForm register={register} prefix={"family"} />
        {isMarried && (
          <SpouseForm prefix={ParticipantType.SPOUSE} register={register} control={control} />
        )}

        <Button sx={{ display: "flex", background: '#007AFF', color: "#FFF", width: "160px" }} onClick={addChild}>Добавить ребенка</Button>
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

        <Button sx={{ display: "flex", background: '#007AFF', color: "#FFF", width: "160px" }} type="submit">Отправить</Button>
      </form>
    </Layout>
  );
}
