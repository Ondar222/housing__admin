import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { ApplicantForm, ChildForm, SpouseForm } from "../../components/ParticipantForm";
import axios from "axios";
import { ParticipantFormFields, ParticipantType } from "../../types/Participant";
import { ApplicationForm } from "../../components/ApplicationForm";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useParams } from "react-router-dom";
import { getHousingProgramList } from "../../store/slices/housing_program/thunks";

const ApplicationDetailsPage: FC = () => {
    const { id } = useParams()
    const [state, setState] = useState<any>(null)
    const { housing_programs, isLoading } = useAppSelector((state) => state.housing_program)
    const dispatch = useAppDispatch()

    const { register, handleSubmit, control, setValue } = useForm<ParticipantFormFields>({
        defaultValues: {
            id: 0,
            status: "",
            intention: "",
            large_queue: {},
            base_queue: {},
            housing_program: {},
            applicant: {
                surname: "",
                name: "",
                patronymic: "",

                email: "",
                phone: "",

                identification_document: [{}],
                snils: [{}],

                family: {
                    is_complete: true,
                    is_large: true,
                    is_married: true,
                    family: []
                },
            },
            related_documents: []
        }
    })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}/items/application/${id}?fields=*.*.*`)
            .then((res) => {
                setState(res.data.data)
                return res.data.data
            })
            .then((res) => {
                setValue("applicant", {
                    ...res.applicant,
                    ...res?.applicant?.identification_document[0]
                })

                setValue('id', {
                    ...res
                })

                return
            })
    }, [])

    useEffect(() => {
        dispatch(getHousingProgramList())
    }, [])

    const onSubmit: SubmitHandler<EditPageForm>  = () => {

    }

    if (state === null) {
        return <div>loading</div>
    }

    return (
        <Layout>
            <form>
                {JSON.stringify(state)}
                <Stack >
                    <ApplicationForm
                        prefix={"application"}
                        register={register}
                        control={control}
                        isLoading={isLoading}
                        programs={housing_programs.data}
                        isLarge={false}
                    />
                    <ApplicantForm
                        prefix={ParticipantType.APPLICANT}
                        register={register}
                        control={control}
                    />

                    <SpouseForm
                        prefix={ParticipantType.SPOUSE}
                        register={register}
                        control={control}
                    />

                    <ChildForm
                        childIndex={0}
                        onDelete={function (index: number): void {
                            throw new Error("Function not implemented.");
                        }}
                        prefix={ParticipantType.CHILD}
                        register={register}
                        control={control}
                    />
                </Stack>
            </form>
        </Layout>
    )
}

export { ApplicationDetailsPage }