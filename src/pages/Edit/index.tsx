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
import { useState } from "react";
import axios from "axios";

export default function EditPage() {
  const [children, setChildren] = useState<Array<number> | undefined>(
    undefined
  );
  const [isSpouse, setIsSpouse] = useState<false>(false)
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = async (values) => {

    console.log(values)
    const data = {
      surname: values.applicant.surname,
      name: values.applicant.name,
      patronymic: values.applicant.patronymic,
      family: {
        family: [{...values.spouse}, ...values.child]
      }
    }

    await axios.post('https://cbr17.rtyva.ru/cms/items/participant', data, {
      headers: {
        Authorization: 'Bearer S05SaNBtAYK1xgzj8PKvEVtchmfQCCFx'
      }
    })
  };

  const addChild = () =>
    setChildren((prev) => {
      let max = 0;

      console.log(prev)

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

  const deleteChild = (index: number) =>
    setChildren((prev) => {
      return prev?.filter((child_index) => child_index != index);
    });

  return (
    <div style={{ width: "1095px" }}>
      <LayoutSidebar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ApplicantForm type={ParticipantType.APPLICANT} register={register} />
        <Switch value={isSpouse} onChange={() => setIsSpouse(prev => !prev)} />
        {isSpouse && <SpouseForm type={ParticipantType.SPOUSE} register={register} />}
        <Button onClick={addChild}>Добавить ребенка</Button>
        {(children != undefined && children.length > 0) &&
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
