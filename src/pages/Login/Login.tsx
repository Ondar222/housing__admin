import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, } from '../../store/hooks/useAppDispatch';
import { ApiResponse } from '../../types/Api';
import { setCredentials } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm<{ email: string; password: string }>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<{ email: string; password: string }> = async (values) => {
        await axios.post<ApiResponse<{ email: string; password: string }>>(`${import.meta.env.VITE_API}/auth/login`, {
            ...values
        })
            .then((res) => {
                console.log(res.data)
                dispatch(setCredentials(res.data.data))
                navigate('/edit')
                return res
            })
    }

    return (
        <Container>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    height: "100vh"
                }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction={"column"} gap={2}>
                        <Typography>ИС жилищных программ Мэрии города Кызыла</Typography>
                        <TextField type='text' label="Адрес электронной почты" placeholder='example@mail.ru' {...register("email")} />
                        <TextField type="password" label="Пароль" placeholder='******' {...register("password")} />
                        <Button type="submit" variant="contained">Войти</Button>
                    </Stack>
                </form>
            </Stack>

        </Container>
    )
}

export default AuthPage