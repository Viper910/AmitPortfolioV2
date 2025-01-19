import { createTheme, useTheme } from '@mui/material/styles';


export const primary = {
  50: "#e8f6fd",
  100: "#d1eefa",
  200: "#a3ddf5",
  300: "#75cbf0",
  400: "#46baec",
  500: "#18a9e7",
  600: "#1387b9",
  700: "#0f658a",
  800: "#0a445c",
  900: "#05222e",
};

export const secondary = {
  50: "#f0e8fc",
  100: "#e0d1fa",
  200: "#c1a3f5",
  300: "#a275f0",
  400: "#8347eb",
  500: "#6419e6",
  600: "#5014b8",
  700: "#3c0f8a",
  800: "#280a5c",
  900: "#14052e",
};

export const accent = {
  50: "#f8e8fc",
  100: "#f0d1fa",
  200: "#e2a3f5",
  300: "#d375f0",
  400: "#c547eb",
  500: "#b619e6",
  600: "#9214b8",
  700: "#6d0f8a",
  800: "#490a5c",
  900: "#24052e",
};

export const background = {
  50: "#e9f7fc",
  100: "#d3eef8",
  200: "#a7ddf1",
  300: "#7bcdea",
  400: "#4fbce3",
  500: "#22abdd",
  600: "#1c89b0",
  700: "#156784",
  800: "#0e4458",
  900: "#07222c",
};

export type TypeTheme = {
  primary: string,
  secondary: string,
  accent: string,
  background: string
  text: string
}

export const THEME_LIGHT: TypeTheme = {
  text: "#05252e",
  background: "#f2fafd",
  primary: "#0e6286",
  secondary: "#a275f0",
  accent: "#a016ca"
}

export const THEME_DARK: TypeTheme = {
  text: "#d1f1fa",
  primary: primary[900],
  secondary: secondary[900],
  accent: accent[900],
  background: background[900]
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a016ca', // Primary color
      contrastText: '#f2fafd', // Ensures good contrast on primary buttons
    },
    secondary: {
      main: '#a275f0', // Secondary color
      contrastText: '#f2fafd',
    },
    background: {
      default: '#f2fafd', // Main background
      paper: '#ffffff', // Paper (card, modal) background
    },
    text: {
      primary: '#05252e', // Main text color
      secondary: '#0e6286', // Secondary text for subtitles or less prominent content
      disabled: '#a9a9a9', // Disabled text
    },
    divider: '#e0e0e0', // Divider color (for subtle separation)
    action: {
      active: '#a016ca', // Active icons/buttons
      hover: '#e3f4f9', // Hover effect
      selected: '#cce7f0', // Selected items
      disabled: '#a9a9a9', // Disabled items
      disabledBackground: '#f0f0f0', // Background for disabled buttons
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`, // Default font family
    h1: { color: '#05252e' },
    h2: { color: '#05252e' },
    h3: { color: '#05252e' },
    body1: { color: '#05252e' },
    body2: { color: '#0e6286' },
    button: { textTransform: 'none', color: '#f2fafd' },
  },
  shape: {
    borderRadius: 8, // Soft rounded corners
  },
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a016ca', // Primary color
      contrastText: '#f2fafd', // Ensures good contrast on primary buttons
    },
    secondary: {
      main: '#a275f0', // Secondary color
      contrastText: '#ffffff',
    },
    background: {
      default: '#020a0d', // Main dark background
      paper: '#020a0d', // Slightly lighter background for cards/modals
    },
    text: {
      primary: '#f2fafd', // Light text for better readability
      secondary: '#a275f0', // Secondary text for accents
      disabled: '#6f7b83', // Disabled text
    },
    divider: '#1c3a45', // Divider color, subtle but visible
    action: {
      active: '#a275f0', // Active icons/buttons
      hover: '#164759', // Hover effect
      selected: '#285d71', // Selected items
      disabled: '#4d5960', // Disabled items
      disabledBackground: '#1f2d35', // Background for disabled buttons
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`, // Default font family
    h1: { color: '#f2fafd' },
    h2: { color: '#f2fafd' },
    h3: { color: '#f2fafd' },
    body1: { color: '#f2fafd' },
    body2: { color: '#a275f0' },
    button: { textTransform: 'none', color: '#f2fafd' },
  },
  shape: {
    borderRadius: 8, // Rounded corners for a cohesive style
  },
});

type TextColor = {
  text: string
}
export function TextColor({ text }: TextColor) {
  const theme = useTheme();
  return (
    <span style={{ color: theme.palette.primary.main }}>{text}</span>
  )
}


export { lightTheme, darkTheme };
