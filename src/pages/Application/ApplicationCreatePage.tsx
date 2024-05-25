import { Alert, Backdrop, Box, Button, CircularProgress, Snackbar, Stack, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { ApplicationForm } from "../../components/ApplicationForm"
import { FamilyForm } from "../../components/FamilyForm"
import { Layout } from "../../components/Layout"
import { ApplicantForm, SpouseForm, ChildForm } from "../../components/ParticipantForm"
import { Participant, ParticipantFormData, ParticipantType } from "../../types/Participant"
import { ApplicationIntention } from "../../types/Application"
import { Family } from "../../types/Family"
import { useHttp } from "../../providers/http"
import { HousingProgram } from "../../types/HousingProgram"

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

const ApplicationCreatePage: FC = () => {
  const { getApi } = useHttp()
  const [isResult, setIsResult] = useState<boolean>(false)
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false)
  const [housingProgram, setHousingProgram] = useState<Array<HousingProgram>>([])
  const [children, setChildren] = useState<Array<number> | undefined>(
    undefined
  );
  const { register, unregister, handleSubmit, watch, control, reset } = useForm<any>({
    defaultValues: {
      family: {
        isMarried: false,
        isLarge: false,
        isComplete: false
      },
      application: {
        housing_program: 1
      },
      children: []
    }
  });
  const isMarried: boolean = watch("family.isMarried");
  const isLarge: boolean = watch("family.isLarge")

  useEffect(() => {
  }, [])

  useEffect(() => {
    if (isMarried === false) unregister("spouse");
  }, [isMarried]);

  const onSubmit: SubmitHandler<any> = async (values) => {
    let queueName = isLarge === true ? "large_queue" : "base_queue"

    const data: ParticipantFormData = {
      surname: values.applicant.surname,
      name: values.applicant.name,
      patronymic: values.applicant.patronymic,
      phone: values.applicant.phone,
      email: values.applicant.email,

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
      },

      children: [],

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
      data.spouse = {
        ...spouseData,
        identification_document: [{ ...identification_document }],
        snils: [{ ...snils }],
      };
    }

    if (Array.isArray(values.child) && children != null) {
      values?.child.forEach((child: any) => {
        if (typeof child === "object") {
          const { snils, identification_document, ...child_data } = child
          if (data.children) {
            data.children.push({
              ...child_data,
              snils: [{ ...snils }],
              identification_document: [{ ...identification_document }],
            });
          }
        }
      })
    }

    setIsDataLoading(true)
    await getApi('/items/participant', {
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res);
        setIsResult(true)
        reset()
      })
      .catch((e) => {
        console.error(e)
        throw e
      })
      .finally(() => {
        setIsDataLoading(false)
      });
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={"row"}
          gap={4}
          my={1}
          width={"100%"}
        >
          <Box
            position={"relative"}
            width={"100%"}
          >
            <Stack
              direction={"column"}
              gap={2}
            >
              <ApplicantForm
                register={register}
                prefix={ParticipantType.APPLICANT}
                control={control}
              />

              {isMarried && (
                <SpouseForm
                  register={register}
                  prefix={ParticipantType.SPOUSE}
                  control={control}
                />
              )}
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
            </Stack>
          </Box>

          <Box
            position={"relative"}
            width={"100%"}>
            <Stack
              direction={"column"}
              gap={2}
              position={"sticky"}
              top={30}
              left={0}
              right={0}
            >
              <ApplicationForm
                register={register}
                prefix={"application"}
                control={control}
                isLoading={false}
                programs={housingProgram}
                isLarge={isLarge}
              />

              <Box>
                <Typography>Данные семьи</Typography>
                <FamilyForm
                  register={register}
                  prefix={"family"}
                  control={control}
                />
              </Box>
              <Stack direction={"row"} gap={6}>
                <Button
                  variant="outlined"
                  onClick={addChild}
                >
                  Добавить ребенка
                </Button>

                <Button
                  variant="contained"
                  type="submit">
                  Отправить
                </Button>
              </Stack>

            </Stack>
          </Box>
        </Stack>
      </form>

      <Snackbar
        open={isResult}
        autoHideDuration={2000}
        onClose={() => setIsResult(false)}
      >
        <Alert
          onClose={() => setIsResult(false)}
          severity="success"
          variant="filled"
        >
          Данные успешно отправлены
        </Alert>
      </Snackbar>

      <Backdrop open={isDataLoading} sx={{
        zIndex: 1900
      }}>
        <CircularProgress sx={{
          zIndex: 2000
        }} />
      </Backdrop>
    </Layout>
  );
}

export { ApplicationCreatePage }