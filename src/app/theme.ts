import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#FC9A44",
    },
    success: {
      main: "#16a34a",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Inter",
    h3: {
      fontWeight: "700",
    },
    h4: {
      fontWeight: "700",
    },
    h5: {
      fontWeight: "500",
    },
    body1: {
      lineHeight: "1.8",
    },
    body2: {
      lineHeight: "1.8",
    },
  },
  mixins: {
    toolbar: {
      minHeight: "64px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 1.4px 2.2px rgba(0, 0, 0, 0.006), 0px 3.4px 5.3px rgba(0, 0, 0, 0.008), 0px 6.4px 10px rgba(0, 0, 0, 0.01),0px 11.4px 17.9px rgba(0, 0, 0, 0.012), 0px 21.3px 33.4px rgba(0, 0, 0, 0.014), 0px 51px 80px rgba(0, 0, 0, 0.02)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          borderRadius: "20px",
          boxShadow:
            "0px 1.4px 2.2px rgba(0, 0, 0, 0.006), 0px 3.4px 5.3px rgba(0, 0, 0, 0.008), 0px 6.4px 10px rgba(0, 0, 0, 0.01),0px 11.4px 17.9px rgba(0, 0, 0, 0.012), 0px 21.3px 33.4px rgba(0, 0, 0, 0.014), 0px 51px 80px rgba(0, 0, 0, 0.02)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
