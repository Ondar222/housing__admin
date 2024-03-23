import { Stack, Avatar, Box, Typography } from "@mui/material"
import { FC } from "react"

type AccountInfoI = {
    name: string
    role: string
    avatar: string
}

const AccountInfo: FC<AccountInfoI> = ({ name, role, avatar }) => {
    return (
        <Stack direction="row" spacing={3} sx={{ margin: "20px"}}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <Box sx={{ width: '100%', maxWidth: 100, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h1" gutterBottom sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "11px", fontWeight: "normal" }}>
                    {role}
                </Typography>
            </Box>
        </Stack>
    )
}

export { AccountInfo }