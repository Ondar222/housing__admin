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
import { ParticipantFormData, ParticipantType } from "../../types/Participant";
import { ApplicationForm } from "../../components/ApplicationForm";
import { PassportForm } from "../../components/DocumentForm";
import { Layout } from "../../components/Layout";

export default function EditPage() {
  const [children, setChildren] = useState<Array<number> | undefined>(
    undefined
  );
  const { register, unregister, handleSubmit, watch, control } = useForm();
  const isMarried = watch("family.isMarried");

  useEffect(() => {
    if (isMarried === false) unregister("spouse");
  }, [isMarried]);

  const onSubmit: SubmitHandler<any> = async (values) => {
    let children: Array<unknown> | null | undefined = values.child || undefined;

    let spouse: unknown = values.spouse || null;

    const data: ParticipantFormData = {
      surname: values.applicant.surname,
      name: values.applicant.name,
      patronymic: values.applicant.patronymic,
      family: {
        is_marries: values.family.isMarried,
        is_complete: values.family.isComplete,
        is_large: values.family.isLarge,
        family: [],
      },
    };
    if (spouse) {
      data.family.family.push(spouse);
    }

    if (Array.isArray(children)) {
      children = values.child;
    } else if (children === undefined) {
      children = null;
    } else {
      children = [values.child];
    }
    children?.forEach((child) => {
      data.family.family.push(child);
    });

    console.log(values);

    // await axios
    //   .post("https://cbr17.rtyva.ru/cms/items/participant", data, {
    //     headers: {
    //       Authorization: "Bearer S05SaNBtAYK1xgzj8PKvEVtchmfQCCFx",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => console.error(e));
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
    unregister(`child[${index}]`);
    setChildren((prev) => {
      return prev?.filter((child_index) => child_index != index);
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ApplicationForm register={register} />
        <PassportForm register={register} prefix={ParticipantType.APPLICANT} control={control} />
        <ApplicantForm type={ParticipantType.APPLICANT} register={register} />
        <FamilyForm register={register} />
        {isMarried && (
          <SpouseForm type={ParticipantType.SPOUSE} register={register} />
        )}
        <Button onClick={addChild}>Добавить ребенка</Button>
        {
          children != undefined &&
          children.length > 0 &&
          children.map((item) => {
            return (
              <ChildForm
                key={`child_#${item}`}
                type={ParticipantType.CHILD}
                register={register}
                childIndex={item}
                onDelete={deleteChild}
              />
            );
          })
        }
        <Button type="submit">Отправить</Button>
      </form>
    </Layout>
  );
}
