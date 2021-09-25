import { ThemeProvider, createTheme } from "@mui/material";

const Providers: React.FC = ({ children }) => {
  const theme = createTheme(
    {
      palette: {
        primary: {
          light: "#91CF7E",
          main: "#62bb47",
          dark: "#5AB540",
        },
        secondary: {
          light: "#609CD4",
          main: "#448acc",
          dark: "#3E82C7",
        },
      },
      typography: {
        fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
      },
    },
    []
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
