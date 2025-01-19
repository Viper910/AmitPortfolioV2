import { Box, Button, Container, OutlinedInput, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TextColor } from "../themeConf/Theme";

export default function Contact() {

    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "1.1rem", height: '100%' }} >
            <Stack direction='row'
                sx={{
                    height: { xs: "90%", md: "30em", lg: "45em" },
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: 'space-between'
                }}>
                <Stack
                    justifyContent="center"
                    alignContent='center'>
                    <Typography variant={isSmallerScreen ? 'h6' : 'h4'} maxWidth="sm" textAlign='center'>Thank you for exploring my portfolio.<TextColor text="Feel free to leave a message, and I'll get back to you shortly." /></Typography>
                </Stack>
                <Stack direction='column'
                    spacing={1}
                    justifyContent="center"
                    alignContent='flex-end'
                >
                    <Box maxWidth="sm" boxShadow={4} padding={4}>
                        <Typography variant="h5" textAlign='center' marginBottom='2em' fontWeight={600}><TextColor text="Contact Me" /></Typography>
                        <Stack direction='row' spacing={1} width="100%" marginBottom='10px'>
                            <TextField id="filled-basic" label="FirstName" variant="filled" fullWidth />
                            <TextField id="filled-basic" label="LastName" variant="filled" fullWidth />
                        </Stack>
                        <Stack direction='column' spacing={1}>
                            <TextField id="filled-basic" label="Mail Id" variant="filled" />
                            <OutlinedInput
                                placeholder="Please leave a message.."
                                multiline
                                rows={6}
                                defaultValue=""
                            />
                            <Button variant="contained" size="small">Send</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    )
}