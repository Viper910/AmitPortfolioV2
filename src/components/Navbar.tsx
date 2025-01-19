import { Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DragHandleTwoToneIcon from '@mui/icons-material/DragHandleTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { useState } from "react";
import { useThemeToggle } from "../themeConf/ThemeContext";
import { NavLink, useNavigate } from "react-router";

export default function Navbar() {

    const menuOptions = [
        { link: '/', title: 'Home' },
        { link: '/experience', title: 'Experience' },
        { link: '/skills', title: 'Skills' },
        { link: 'https://drive.google.com/file/d/1KcdxdYK9bKmb1dY50TMrrgmSfIUWp_Ot/view?usp=drive_link', title: 'Resume' },
        { link: '/contact', title: 'Contact' }
    ];

    const navigate = useNavigate();
    const resumeClickHandler = () => {
        navigate('/resume');
    }

    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const { toggleTheme, mode } = useThemeToggle();

    return (
        <nav>
            <Container maxWidth="xl" disableGutters fixed>
                <Stack
                    sx={{
                        height: "4.5rem",
                        width: "100%",
                    }}
                    direction="row"
                    paddingLeft={2}
                    paddingRight={2}

                >
                    {/* Logo Section */}
                    <Stack
                        sx={{
                            height: "4.5rem",
                            width: { xs: "70%", md: "60%" }, // Responsive width
                        }}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={4}
                    >
                        <NavLink to="/"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: theme.palette.text.primary,
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                amit<span style={{ color: "#a016ca" }}>K</span>umar
                            </Typography>
                        </NavLink>
                    </Stack>

                    {/* Menu Section */}
                    <Stack
                        sx={{
                            height: "4.5rem",
                            width: { xs: "30%", md: "40%" }, // Responsive width
                        }}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                            {menuOptions.map((option, key) => (
                                <NavLink to={option.link} style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary,
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })}
                                    target={option.title === 'Resume' ? '_blank' : '_self'}
                                    download={option.title === 'Resume' ? true : false}
                                >
                                    <Button size="medium" sx={{ textTransform: "none" }} key={key} onClick={option.title === 'Resume' ? resumeClickHandler : () => { }}>
                                        <Typography variant="body1" align="center" fontWeight={600} >{option.title}</Typography>
                                    </Button>
                                </NavLink>
                            ))}
                            <IconButton aria-label="theme toggle" onClick={toggleTheme}>
                                {mode === 'dark' ? <LightModeTwoToneIcon fontSize="inherit" /> : <DarkModeIcon fontSize="inherit" />}
                            </IconButton>
                        </Box>

                        {/* Mobile Menu Toggle */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }} gap={1}>
                            <IconButton aria-label="theme toggle" onClick={toggleTheme}>
                                {mode === 'dark' ? <LightModeTwoToneIcon fontSize="inherit" /> : <DarkModeIcon fontSize="inherit" />}
                            </IconButton>
                            <IconButton onClick={toggleDrawer(true)} aria-label="menu">
                                <DragHandleTwoToneIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>

                {/* Drawer for Mobile Menu */}
                <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Stack
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <List>
                            {menuOptions.map((option, key) => (
                                <NavLink to={option.link} style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary,
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })}>
                                    <ListItemButton key={key} alignItems="center">
                                        <ListItemText primary={option.title} style={{ textAlign: "center" }} />
                                    </ListItemButton>
                                </NavLink>

                            ))}
                        </List>
                    </Stack>
                </Drawer>
            </Container>
        </nav>
    );
};