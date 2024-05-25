import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiResponse } from "../../types/Api"
import { ApplicationT } from "../../types/Application"
import { ApplicantForm, ChildForm, SpouseForm } from "../../components/ParticipantForm"
import { useForm } from "react-hook-form"
import { ParticipantType } from "../../types/Participant"
import { useHttp } from "../../providers/http"
import { Layout } from "../../components/Layout"
import { ApplicationForm } from "../../components/ApplicationForm"
import { HousingProgram } from "../../types/HousingProgram"

const ApplicationDetailsPage: FC = () => {
    const { id } = useParams()
    const { getApi } = useHttp()
    const [application, setApplication] = useState<ApplicationT | undefined>(undefined)
    const [housingProgram, setHousingProgram] = useState<Array<HousingProgram>>([])
    const [children, setChildren] = useState<Array<number> | undefined>(
        undefined
    );
    const { register, unregister, control, setValue, watch } = useForm<any>({
        defaultValues: {
            applicant: application?.applicant
        }
    })
    const fields = watch()

    const getHousingPrograms = async () => {
        await getApi<ApiResponse<Array<HousingProgram>>>('/items/housing_program', {
            method: "GET"
        }).then((res) => {
            setHousingProgram(res.data.data)
        })
    }

    const getApplicationDetails = async () => {
        await getApi<ApiResponse<ApplicationT>>(`/items/application/${id}?fields=*.*.*.*.*`, {})
            .then((res) => {
                setApplication(res.data.data)
                return res
            })
    }

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

    useEffect(() => {
        getApplicationDetails()
    }, [id])


    useEffect(() => {

    }, [application])

    if (!application) {
        return <div>loading</div>
    }

    return (
        <Layout>
            <form>
                <ApplicationForm
                    programs={housingProgram}
                    application={application}
                    isLoading={false}
                    isLarge={false}
                    prefix={"application"}
                    register={register}
                    control={control}
                />
                <ApplicantForm
                    applicant={application.applicant}
                    prefix={ParticipantType.APPLICANT}
                    register={register}
                    control={control}
                />
                <SpouseForm
                    applicant={application.applicant.spouse}
                    prefix={`${ParticipantType.APPLICANT}.${ParticipantType.SPOUSE}`}
                    register={register}
                    control={control}
                />
                {
                    application?.applicant?.children?.map((item: any) => {
                        return (
                            <ChildForm
                                applicant={item.participant_id}
                                key={`child_#${item}`}
                                prefix={`${ParticipantType.APPLICANT}.children.${item.id}`}
                                register={register}
                                childIndex={item}
                                onDelete={deleteChild}
                                control={control}
                            />
                        );
                    })
                }
            </form>
        </Layout>
    )
}

export { ApplicationDetailsPage }