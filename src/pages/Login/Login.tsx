import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppDispatch';
import { getCredentials, logout } from '../../store/slices/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../store/slices/user/thunks';
import { useEffect } from 'react';
import { authLogin } from '../../store/slices/auth/thunks';
import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useAuth } from '../../providers/auth/auth';

function AuthPage() {
    const dispatch = useAppDispatch()
    const { isAuth, access_token } = useAppSelector((state) => state.auth)
const AuthPage: FC = () => {
    const { isAuth, logout, login } = useAuth()
    const { register, handleSubmit } = useForm<{ email: string; password: string }>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<{ email: string; password: string }> = async (values) => {
        await dispatch(authLogin({
            ...values
        })).then(() => {
            navigate('/application/+')
        }).catch((e) => {
            throw new Error(e)
        })
    }

    const onLogoutButtonClick = () => {
        dispatch(logout())
    }

    useEffect(() => {
        try {
            dispatch(getCredentials())
            dispatch(getUserData(access_token))
        }
        catch (e) {
            console.clear()
        }
    }, [])

    if (isAuth) {
        return (
            <Container>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        height: "100vh"
                    }}>
                    <Typography>Уже выполнен вход</Typography>
                    <Link to={"/application/+"}>
                        Войти
                    </Link>
                    <Button onClick={onLogoutButtonClick}>Войти в другой аккаунт</Button>
                </Stack>
            </Container>
        )
        await login(values.email, values.password).then(() => {
            navigate('/application/+')
        })
    }

    const onLogoutButtonClick = () => {
        logout()
    }

    if (isAuth) {
        return (
            <Container>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        height: "100vh"
                    }}>
                    <Typography>Уже выполнен вход</Typography>
                    <Link to={"/application/+"}>
                        Войти
                    </Link>
                    <Button onClick={onLogoutButtonClick}>Войти в другой аккаунт</Button>
                </Stack>
            </Container>
        )
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