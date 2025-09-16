import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const theme = createTheme({
  typography: { fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(", ") },
  colorSchemes: {
    light: {
      palette: {
        primary: { light: "#444444", main: "#000000", dark: "#000000", contrastText: "#ffffff" },
        secondary: { light: "#666666", main: "#333333", dark: "#111111", contrastText: "#ffffff" },
        text: { primary: "#000000", secondary: "#444444" },
        background: { default: "#ffffff", paper: "#ffffff" },
      },
    },
  },
});

export default function PortfolioPage(){
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
