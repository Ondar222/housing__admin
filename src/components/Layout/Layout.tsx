import { Container, IconButton, InputAdornment, Stack, TextField, useTheme } from "@mui/material"
import { FC, ReactNode, useState } from "react"
import { Header, Sidebar } from "."
import { Content } from "./Content";
import { Menu, Search } from "@mui/icons-material";

interface LayoutI {
    children?: ReactNode
}

const Layout: FC<LayoutI> = ({ children }) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Sidebar
                isOpen={isOpen}
                toggleDrawer={(status) => {
                    setIsOpen(!status)
                }}
            />

            {/* <Header
                position="sticky"
                theme={theme}
                open={isOpen}

                sx={{
                    background: "transparent",
                    padding: "20px"
                }}
            >


                <Stack direction={"row"}>
                    {!isOpen && <IconButton onClick={() => setIsOpen(true)}>
                        <Menu />
                    </IconButton>}
                    {/* <TextField
                        placeholder="Введите запрос"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <Search />
                            </InputAdornment>,
                            endAdornment: <InputAdornment position="end">

                            </InputAdornment>
                        }} /> 
                </Stack>
            </Header> */}

            <Content
                theme={theme}
                open={isOpen}
            >
                {children}
            </Content>
        </Container>



    )
}

export { Layout }