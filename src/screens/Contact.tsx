import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
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
            const formData = new FormData();
            formData.append("name", `${firstName} ${lastName}`.trim() || "Visitor");
            formData.append("email", email);
            formData.append("message", message);
            formData.append("_subject", `Portfolio contact from ${firstName || "Visitor"} ${lastName}`.trim());
            formData.append("_replyto", email);
            formData.append("_autoresponse", "Thanks for reaching out! I received your message and will get back to you soon.");
            formData.append("_template", "table");
            formData.append("_captcha", "false");

            const response = await fetch("https://formsubmit.co/ajax/amitkumarbehera987@gmail.com", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: formData,
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
                    <Box
                        maxWidth="sm"
                        boxShadow={4}
                        padding={4}
                        sx={{
                            borderRadius: 3,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider'
                        }}
                    >
                        <Typography variant="h5" textAlign='center' marginBottom='1rem' fontWeight={700}>
                            <TextColor text="Contact Me" />
                        </Typography>
                        <Typography variant="body2" textAlign='center' color="text.secondary" marginBottom={3}>
                            Have a question or want to collaborate? Share your details below and I’ll reply to your email.
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" marginBottom={2}>
                                <TextField
                                    id="first-name"
                                    name="firstName"
                                    label="First Name"
                                    variant="filled"
                                    fullWidth
                                    value={firstName}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                                />
                                <TextField
                                    id="last-name"
                                    name="lastName"
                                    label="Last Name"
                                    variant="filled"
                                    fullWidth
                                    value={lastName}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                                />
                            </Stack>
                            <Stack direction='column' spacing={2}>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    variant="filled"
                                    fullWidth
                                    required
                                    helperText="A confirmation email will be sent to this address."
                                    value={email}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                />
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    placeholder="Type your message here..."
                                    multiline
                                    rows={6}
                                    variant="filled"
                                    fullWidth
                                    required
                                    value={message}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={isSubmitting}
                                    sx={{ alignSelf: 'flex-start', px: 4 }}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
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