import { Typography } from "@mui/material";
import { Container, Stack, useMediaQuery, useTheme } from "@mui/system";
import { TextColor } from "../themeConf/Theme";

export default function Resume() {
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "1.1rem", height: '100%' }} >
            <Stack maxWidth="xl" sx={{ height: '100%' }}
                justifyContent='center'
                alignItems='center'
            >
                <Typography variant={isSmallerScreen ? 'h6' : "h3"} textAlign='center'>Thank you for downloading my resume. <TextColor text="I look forward to the opportunity to connect!" /></Typography>
            </Stack>
        </Container>
    )
}