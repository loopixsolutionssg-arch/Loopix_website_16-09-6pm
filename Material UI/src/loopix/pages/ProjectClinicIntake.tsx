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
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F9beccbded273416ab853c14021eb5f59?format=webp&width=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F46b137c5e83748008a0cf5d3a9a95247?format=webp&width=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F5c15347365f1402bbcf48a19344df4e9?format=webp&width=1200",
];

export default function ProjectClinicIntake(){
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
              Clinic Patient Intake Automation
            </Typography>
            <Typography color="text.secondary">
              Digitized patient onboarding with automated reminders, ID capture, and EHR sync to reduce front‑desk workload and no‑shows while improving patient experience.
            </Typography>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1 }}>
                <img src={images[0]} alt="Dental clinic landing and onboarding" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1, height: "100%" }}>
                <img src={images[1]} alt="Automation flow for invoices and approvals" style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: "100%" }} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Overview</Typography>
                <Typography sx={{ mb: 2 }}>
                  Patients complete mobile‑friendly forms pre‑visit. Data is validated and pushed to the clinic system; reminders and confirmations are sent automatically. Staff receive a clear queue with status and missing items.
                </Typography>

                <Typography sx={{ fontWeight: 700, mb: 1 }}>Automation</Typography>
                <List dense>
                  <ListItem><ListItemText primary="SMS/email reminders with reschedule links" /></ListItem>
                  <ListItem><ListItemText primary="OCR/ID upload and insurance capture" /></ListItem>
                  <ListItem><ListItemText primary="RPA bridge to legacy EHR where APIs are limited" /></ListItem>
                </List>

                <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Security & Compliance</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Encrypted transport and at‑rest storage" /></ListItem>
                  <ListItem><ListItemText primary="Role‑based access; audit trails for edits" /></ListItem>
                  <ListItem><ListItemText primary="PII minimization and retention policies" /></ListItem>
                </List>

                <Box sx={{ mt: 2 }}>
                  <Paper elevation={0} className="glass-card" sx={{ p: 1 }}>
                    <img src={images[2]} alt="AI assisted triage and telehealth" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
                  </Paper>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Tech Stack</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Chip label="Power Automate" />
                  <Chip label="Power Apps" />
                  <Chip label="RPA" />
                  <Chip label="Secure Cloud" />
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Outcomes</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Lower no‑show rate with smart reminders" /></ListItem>
                  <ListItem><ListItemText primary="Faster check‑in and reduced data entry" /></ListItem>
                  <ListItem><ListItemText primary="Cleaner records synced to EHR" /></ListItem>
                </List>
                <Box sx={{ mt: 2 }}>
                  <Button component={RouterLink} to="/" variant="contained">Improve patient intake</Button>
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
