import { Box, Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";
import { whatIam } from "../biodata/BioData";

export default function MainScreen() {
    // Define a custom StepIcon component
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "1.1rem", height: '100%' }} >
            <Stack
                sx={{
                    height: { xs: "90%", md: "30em", lg: "45em" },
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" }
                }}
                spacing={4}
            >
                <Stack
                    sx={{
                        height: { xs: "100%", md: "100%" },
                        width: "100%",
                    }}
                    alignItems={isSmallScreen ? "center" : "flex-start"}
                    justifyContent="space-around"
                >
                    <Box textAlign={isSmallScreen ? 'center' : 'start'}>
                        <Typography variant={isSmallScreen ? 'h3' : 'h1'}>Hello, I am <br /><span style={{ color: theme.palette.primary.main }}>Amit Kumar Behera</span></Typography>
                        <Typography variant="h4">I am a
                            {isSmallScreen ? <br /> : ' '}<TypeAnimation
                                sequence={whatIam}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: isSmallScreen ? '1em' : '1.2em', display: 'inline-block', fontWeight: 'bold' }}
                                repeat={Infinity}
                            /></Typography>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        height: { xs: "10%", md: "100%" },
                        width: { xs: "100%", md: "40%" }
                    }}
                    direction="row"
                    justifyContent={isSmallScreen ? "center" : "flex-end"}
                    alignItems="center"
                >
                    <Stack direction={isSmallScreen ? 'row' : 'column'}>
                        <Link to="https://github.com/Viper910/" target="_blank"><IconButton size="large"><GitHubIcon fontSize="inherit" /></IconButton></Link>
                        <Link to="https://www.linkedin.com/in/amit-kumar-behera-1390a521a/" target="_blank"><IconButton size="large"><LinkedInIcon fontSize="inherit" /></IconButton></Link>
                        <Link to="https://www.instagram.com/amitkumar0109?igsh=MWxqYjlrMmt4cjR1Yg==" target="_blank"><IconButton size="large"><InstagramIcon fontSize="inherit" /></IconButton></Link>
                        <Link to="https://x.com/codex_masterNo1?t=tiZ84YeuRjSNoj1HnVbiRw&s=09" target="_blank"><IconButton size="large"><XIcon fontSize="inherit" /></IconButton></Link>
                    </Stack>
                </Stack>
            </Stack>
        </Container >
    )
}