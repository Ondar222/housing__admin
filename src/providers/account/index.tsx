import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth";
import { useHttp } from "../http";
import { ApiResponse } from "../../types/Api";

const AccountContext = createContext<{
    surname: string
    name: string
    avatar: string
}>({
    surname: '',
    name: '',
    avatar: '/img/avatar.png'
})

const AccountProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>({
        name: "",
        surname: ""
    })
    const { getApi } = useHttp()
    const { access_token } = useAuth()

    const getUser = async () => {
        await getApi<ApiResponse<any>>('/users/me', {
            method: "GET"
        }).then((res) => {
            const { first_name, last_name, avatar } = res.data.data
            setUser({
                name: first_name,
                surname: last_name,
                avatar: avatar
            })
            return res
        })
    }

    useEffect(() => {
        getUser()
    }, [access_token])

    return (
        <AccountContext.Provider value={{ ...user }}>
            {children}
        </AccountContext.Provider>
    )
}

const useAccount = () => {
    return useContext(AccountContext)
}

export { AccountProvider, useAccount }