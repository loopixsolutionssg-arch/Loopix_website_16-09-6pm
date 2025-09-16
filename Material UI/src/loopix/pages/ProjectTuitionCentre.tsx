import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link as RouterLink } from "react-router-dom";

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

const images = [
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F57aaa145cfc14b58a83087940cb93560?format=webp&width=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F3e718162ec674b6b972ef9e301ef4bb5?format=webp&width=1200",
];

export default function ProjectTuitionCentre(){
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
            <Button component={RouterLink} to="/portfolio" startIcon={<ArrowBackIcon />} variant="outlined">
              Back to Portfolio
            </Button>
          </Box>

          <Paper elevation={0} className="glass-card" sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Tuition Centre Website & Branding
            </Typography>
            <Typography color="text.secondary">
              A modern, mobile‑first site for a tuition centre with class schedules, enrolment flows, and brand refresh. Dashboards offer parents and staff clear views of performance and attendance.
            </Typography>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1 }}>
                <img src={images[0]} alt="Hero section and features" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1, height: "100%" }}>
                <img src={images[1]} alt="Course cards and categories" style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: "100%" }} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Overview</Typography>
                <Typography sx={{ mb: 2 }}>
                  Designed a friendly and credible presence to attract parents while supporting staff with simple operations. Information architecture emphasizes classes, teachers, and outcomes, with clear calls to action.
                </Typography>

                <Typography sx={{ fontWeight: 700, mb: 1 }}>Key Features</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Responsive website with class schedules and booking" /></ListItem>
                  <ListItem><ListItemText primary="Parent portal for announcements and resources" /></ListItem>
                  <ListItem><ListItemText primary="Lightweight dashboards for enrolment and attendance" /></ListItem>
                </List>

                <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Branding</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Logo refinements and color system for accessibility" /></ListItem>
                  <ListItem><ListItemText primary="Illustrations and imagery guidelines" /></ListItem>
                  <ListItem><ListItemText primary="Reusable UI components for marketing pages" /></ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Tech Stack</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Chip label="React" />
                  <Chip label="MUI" />
                  <Chip label="Power BI (dashboards)" />
                  <Chip label="Automation" />
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Outcomes</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Improved lead capture and conversion" /></ListItem>
                  <ListItem><ListItemText primary="Consistent branding across pages and ads" /></ListItem>
                  <ListItem><ListItemText primary="Better visibility into enrolment trends" /></ListItem>
                </List>
                <Box sx={{ mt: 2 }}>
                  <Button component={RouterLink} to="/" variant="contained">Discuss your education site</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
