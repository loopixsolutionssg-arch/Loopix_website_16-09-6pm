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
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F77bd0f391ab143ed8ba1bfff99de07d4?format=webp&width=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F977115bce5654c81b22fe1fe51d4c10d?format=webp&width=1200",
];

export default function ProjectStartupDashboard(){
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
              Startup Growth Metrics Dashboard
            </Typography>
            <Typography color="text.secondary">
              Power BI and custom dashboarding to give founders and marketing teams real‑time visibility into growth and retention KPIs.
            </Typography>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1 }}>
                <img src={images[0]} alt="Revenue and team dashboard" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1, height: "100%" }}>
                <img src={images[1]} alt="Advertising statistics dashboard" style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: "100%" }} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Overview</Typography>
                <Typography sx={{ mb: 2 }}>
                  A seed‑stage SaaS needed a single source of truth for weekly leadership checks. We designed an executive dashboard that unifies product, marketing, and finance data to track MRR, churn, CAC, channel ROI, and activation funnels.
                </Typography>

                <Typography sx={{ fontWeight: 700, mb: 1 }}>Objectives</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Replace spreadsheet reporting with an always‑on live view" /></ListItem>
                  <ListItem><ListItemText primary="Standardize KPI definitions across teams" /></ListItem>
                  <ListItem><ListItemText primary="Alert stakeholders when KPIs breach thresholds" /></ListItem>
                </List>

                <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Solution</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Data model in a warehouse with scheduled ELT from Stripe, GA4, Meta/Google Ads, and app events" /></ListItem>
                  <ListItem><ListItemText primary="Power BI semantic model with measures for MRR growth, Net Revenue Retention, and cohort retention" /></ListItem>
                  <ListItem><ListItemText primary="Custom visuals: KPI tiles, cohort charts, and funnel analysis; mobile‑first layouts for execs" /></ListItem>
                  <ListItem><ListItemText primary="Automated alerts via Power Automate when churn/CAC exceeds limits" /></ListItem>
                </List>

                <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Impact</Typography>
                <List dense>
                  <ListItem><ListItemText primary="60% reduction in reporting effort; weekly metrics ready every morning" /></ListItem>
                  <ListItem><ListItemText primary="Faster decision cycles for ad spend and lifecycle experiments" /></ListItem>
                  <ListItem><ListItemText primary="Shared language of growth metrics across leadership" /></ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Tech Stack</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Chip label="Power BI" />
                  <Chip label="Power Automate" />
                  <Chip label="GA4" />
                  <Chip label="Stripe" />
                  <Chip label="Meta/Google Ads" />
                  <Chip label="SQL Warehouse" />
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Data Sources</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Billing and subscriptions (MRR, churn)" /></ListItem>
                  <ListItem><ListItemText primary="Product analytics (activation, cohorts)" /></ListItem>
                  <ListItem><ListItemText primary="Acquisition channels and campaigns (CAC, ROAS)" /></ListItem>
                </List>
                <Box sx={{ mt: 2 }}>
                  <Button component={RouterLink} to="/" variant="contained">Start a dashboard project</Button>
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
