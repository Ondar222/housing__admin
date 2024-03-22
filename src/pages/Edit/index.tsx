import { SubmitHandler, useForm } from "react-hook-form";
import ChildrensDataComponent from "../../components/ChildrensData/ChildrensData";
import LayoutSidebar from "../../components/LayoutSidebar/LayoutSidebar";
import PersonalComponent from "../../components/PersonalData/Personal";
import SpousesDetalisComponent from "../../components/SpousesDetails/SpousesDetalis";
import {
  ApplicantForm,
  ChildForm,
  ParticipantForm,
  SpouseForm,
} from "../../components/ParticipantForm";
import { ParticipantType } from "../../components/ParticipantForm/ParticipantForm";
import { Button, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { FamilyForm } from "../../components/FamilyForm";

interface ParticipantFormData {
  surname: string;
  name: string;
  patronymic: string;
  family: {
    is_marries: boolean;
    is_complete: boolean;
    is_large: boolean;
    family: Array<any>;
  };
}

export default function EditPage() {
  const [children, setChildren] = useState<Array<number> | undefined>(
    undefined
  );
  const { register, unregister, handleSubmit, watch } = useForm();
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
    unregister(`child[${index}]`);
    setChildren((prev) => {
      return prev?.filter((child_index) => child_index != index);
    });
  };

  return (
    <div>
      <LayoutSidebar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ApplicantForm type={ParticipantType.APPLICANT} register={register} />
        <FamilyForm register={register} />
        {isMarried && (
          <SpouseForm type={ParticipantType.SPOUSE} register={register} />
        )}
        <Button onClick={addChild}>Добавить ребенка</Button>
        {children != undefined &&
          children.length > 0 &&
          children.map((item) => {
            return (
              <ChildForm
                key={`child_#${item}`}
                type={ParticipantType.CHILD}
                register={register}
                childIndex={item}
                onDelete={() => deleteChild(item)}
              />
            );
          })}
        <Button type="submit">Отправить</Button>
        {/* <PersonalComponent />
        <SpousesDetalisComponent />
        <ChildrensDataComponent /> */}
      </form>
    </div>
  );
}
