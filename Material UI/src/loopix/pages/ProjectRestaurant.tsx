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
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F7b18c1feddeb436aa76de4c77570234e?format=webp&width=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F4f6f3b04130f46e6b0da66405fc2eb67?format=webp&width=1200",
];

export default function ProjectRestaurant(){
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
            <Button component="a" href="/portfolio" startIcon={<ArrowBackIcon />} variant="outlined">
              Back to Portfolio
            </Button>
          </Box>

          <Paper elevation={0} className="glass-card" sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Restaurant Online Ordering & Automation
            </Typography>
            <Typography color="text.secondary">
              A streamlined ordering experience: web menu, automated kitchen routing, SMS updates, and tablet order management. Built to reduce wait times and errors during peak hours.
            </Typography>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1 }}>
                <img src={images[0]} alt="Restaurant landing with menu actions" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 1, height: "100%" }}>
                <img src={images[1]} alt="Category showcase and menu" style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: "100%" }} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Overview</Typography>
                <Typography sx={{ mb: 2 }}>
                  We digitized dine‑in and takeaway orders. Guests browse the menu, place orders, and receive real‑time updates. Orders are routed to the kitchen automatically; staff tablets provide status changes and payments.
                </Typography>

                <Typography sx={{ fontWeight: 700, mb: 1 }}>Key Flows</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Web ordering with modifiers and table/collection options" /></ListItem>
                  <ListItem><ListItemText primary="Power Automate sends tickets to kitchen printer and Slack" /></ListItem>
                  <ListItem><ListItemText primary="SMS notifications for ready/collection using Twilio" /></ListItem>
                  <ListItem><ListItemText primary="Tablet app for status updates and refund handling" /></ListItem>
                </List>

                <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Results</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Faster service at peak; fewer missed orders" /></ListItem>
                  <ListItem><ListItemText primary="Clear visibility of order backlog and prep times" /></ListItem>
                  <ListItem><ListItemText primary="Repeat customers via saved preferences" /></ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Tech Stack</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Chip label="React" />
                  <Chip label="Power Automate" />
                  <Chip label="Twilio" />
                  <Chip label="Stripe" />
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Integrations</Typography>
                <List dense>
                  <ListItem><ListItemText primary="Google Sheets for orders archive" /></ListItem>
                  <ListItem><ListItemText primary="Kitchen printer bridge" /></ListItem>
                  <ListItem><ListItemText primary="Slack / SMS notifications" /></ListItem>
                </List>
                <Box sx={{ mt: 2 }}>
                  <Button component="a" href="/" variant="contained">Start a restaurant project</Button>
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
