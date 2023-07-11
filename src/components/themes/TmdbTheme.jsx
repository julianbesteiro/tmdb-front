import { createTheme } from "@mui/material";

const TmdbTheme = createTheme({
  palette: {
    mode: "light",
    typography: {
      fontFamily: "Heebo, sans-serif",
    },
    primary: {
      main: "#002D62", // Color primario
      light: "#00308F", // Tono claro del color primario
      dark: "#002244", // Tono oscuro del color primario
    },
    // Otros colores
    error: {
      main: "#9E005D", // Color para indicar errores
    },
    pending: {
      main: "#666666", // Color para indicar advertencias
    },
    success: {
      main: "#00A99D", // Color para indicar éxito
    },
  },
});

export default TmdbTheme;
