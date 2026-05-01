import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Container, OutlinedInput, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TextColor } from "../themeConf/Theme";

export default function Contact() {

    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [statusMessage, setStatusMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email.trim() || !message.trim()) {
            setStatusMessage("Please enter your email and a message before sending.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("Sending your message...");

        try {
            const response = await fetch("https://formsubmit.co/ajax/amitkumarbehera987@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`.trim() || "Visitor",
                    email,
                    message,
                    _subject: `Portfolio contact from ${firstName || "Visitor"} ${lastName}`.trim(),
                    _template: "table",
                    _captcha: "false"
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to send message.");
            }

            setStatusMessage("Message sent successfully! I’ll get back to you soon.");
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setStatusMessage("Sorry, something went wrong while sending your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const statusColor = statusMessage.startsWith("Sorry") || statusMessage.startsWith("Please")
        ? "error.main"
        : "success.main";

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
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack direction='row' spacing={1} width="100%" marginBottom='10px'>
                                <TextField
                                    id="first-name"
                                    label="First Name"
                                    variant="filled"
                                    fullWidth
                                    value={firstName}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                                />
                                <TextField
                                    id="last-name"
                                    label="Last Name"
                                    variant="filled"
                                    fullWidth
                                    value={lastName}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                                />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <TextField
                                    id="email"
                                    label="Mail Id"
                                    type="email"
                                    variant="filled"
                                    fullWidth
                                    value={email}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                />
                                <OutlinedInput
                                    id="message"
                                    placeholder="Please leave a message.."
                                    multiline
                                    rows={6}
                                    fullWidth
                                    value={message}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                                />
                                <Button type="submit" variant="contained" size="small" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send"}
                                </Button>
                                {statusMessage && (
                                    <Typography variant="body2" sx={{ marginTop: 1, color: statusColor }}>
                                        {statusMessage}
                                    </Typography>
                                )}
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    )
}