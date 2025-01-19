import { Box, Button, Container, List, ListItem, Paper, Step, StepContent, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TextColor } from "../themeConf/Theme";
import { useState } from "react";
import { skillsData } from "../biodata/BioData";

export default function Skills() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps = skillsData;

    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "1.1rem", height: '100%', marginTop: isSmallerScreen ? '' : '4em' }}>
            <Typography variant={isSmallerScreen ? 'h5' : 'h3'} fontWeight={600} marginBottom={4}>What I'm <TextColor text="Good" /> at...</Typography>
            <Box sx={{ maxWidth: 600 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>
                                <Typography variant={isSmallerScreen ? 'h6' : "h5"} fontWeight={600}>{step.title}</Typography>
                            </StepLabel>
                            <StepContent>
                                <List sx={{ listStyleType: 'disc', padding: '1em' }}>
                                    {step.skillSet.map((val, key) => <ListItem key={key} sx={{ display: 'list-item' }}>
                                        <Typography fontWeight={600} variant={isSmallerScreen ? 'body1' : "h6"}><TextColor text={val.skill} /> - {val.level}</Typography>
                                        <Typography variant={isSmallerScreen ? 'subtitle2' : "h6"}>{val.description}</Typography>
                                    </ListItem>)}
                                </List>
                                <Box sx={{ mb: 2 }}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Thank you for taking the time to explore my skills. Let's learn something amazing together!</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            View Again
                        </Button>
                    </Paper>
                )}
            </Box>
        </Container>
    )
}