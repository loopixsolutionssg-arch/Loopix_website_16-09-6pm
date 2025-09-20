import * as React from "react";
"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const projects = [
  {
    id: "restaurant",
    title: "Restaurant Online Ordering & Automation",
    subtitle: "Power Automate, Power Apps",
    description:
      "Implemented an end-to-end ordering workflow for a local restaurant: online ordering form, order routing to kitchen via Power Automate, and a lightweight Power App for staff to update order status.",
    highlights: [
      "Online ordering form integrated with Google Sheets",
      "Power Automate flow to notify kitchen and SMS updates to customers",
      "Power App for order management on tablets",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F7b18c1feddeb436aa76de4c77570234e?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F4f6f3b04130f46e6b0da66405fc2eb67?format=webp&width=1200",
    ],
  },
  {
    id: "clinic",
    title: "Clinic Patient Intake Automation",
    subtitle: "Power Platform, RPA",
    description:
      "Automated patient intake and appointment confirmations, reducing manual data entry and missed appointments.",
    highlights: [
      "Power Automate flows for appointment reminders",
      "RPA to sync records between legacy clinic systems and cloud database",
      "Secure handling of patient contact details",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F9beccbded273416ab853c14021eb5f59?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F46b137c5e83748008a0cf5d3a9a95247?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F5c15347365f1402bbcf48a19344df4e9?format=webp&width=1200",
    ],
  },
  {
    id: "tuition",
    title: "Tuition Centre Website & Branding",
    subtitle: "Web Design, UX/UI, Dashboards",
    description:
      "Designed a modern, responsive website for a tuition centre including class schedules, signup forms, and integrated dashboards for enrolment analytics.",
    highlights: [
      "Responsive website with booking and payments",
      "Custom dashboards for student performance",
      "Branded assets and promotional graphics",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F57aaa145cfc14b58a83087940cb93560?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F9b19483106164207ba327f341e21ca6b%2F3e718162ec674b6b972ef9e301ef4bb5?format=webp&width=1200",
    ],
  },
  {
    id: "startup",
    title: "Startup Growth Metrics Dashboard",
    subtitle: "Power BI, Custom Dashboards",
    description:
      "Designed an executive dashboard for a SaaS startup tracking MRR, churn, acquisition channels, and campaign ROI.",
    highlights: [
      "Real-time KPI cards",
      "Cohort analysis and funnel visualizations",
      "Automated alerts for KPI thresholds via Power Automate",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2Fd09c85bd144749a783fd06cdf0ff7718?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F25232c2453ff460cbb153ff94c280e5c?format=webp&width=1200",
    ],
  },
];


export default function Portfolio() {
  const [selectedId, setSelectedId] = React.useState(projects[0].id);
  const selected = projects.find((p) => p.id === selectedId) || projects[0];
  const router = useRouter();

  return (
    <Box component="section" id="portfolio" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Portfolio & Case Studies
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="glass-card" sx={{ p: 2, height: { md: 560 }, overflow: { xs: 'visible', md: 'hidden' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Projects
              </Typography>
              <Box sx={{ overflowY: { md: 'auto' }, maxHeight: { md: 480 } }}>
                <Grid container spacing={1}>
                  {projects.map((p) => (
                    <Grid item xs={12} sm={6} key={p.id}>
                      <ListItemButton
                        onClick={() => {
                          if (p.id === 'startup') { router.push('/portfolio/startup'); return; }
                          if (p.id === 'tuition') { router.push('/portfolio/tuition'); return; }
                          if (p.id === 'restaurant') { router.push('/portfolio/restaurant'); return; }
                          if (p.id === 'clinic') { router.push('/portfolio/clinic'); return; }
                          setSelectedId(p.id);
                        }}
                        selected={p.id === selectedId}
                        sx={{ alignItems: 'flex-start', gap: 2, borderRadius: 1 }}
                      >
                        <Avatar variant="rounded" src={p.images[0]} alt={p.title} sx={{ width: 64, height: 64 }} imgProps={{ onError:(e:any)=>{ e.currentTarget.src='data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2764%27 height=%2764%27%3E%3Crect width=%2764%27 height=%2764%27 fill=%27%23e6f7fb%27 rx=%279%27/%3E%3Ctext x=%2732%27 y=%2738%27 text-anchor=%27middle%27 font-size=%2710%27 fill=%27%23008aa0%27 font-family=%27Inter,Arial,sans-serif%27%3EImg%3C/text%3E%3C/svg%3E' } , crossOrigin: 'anonymous'}} />
                        <ListItemText
                          primary={<Typography sx={{ fontWeight: 700 }}>{p.title}</Typography>}
                          secondary={<Typography variant="caption" color="text.secondary">{p.subtitle}</Typography>}
                        />
                      </ListItemButton>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>{selected.title}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{selected.subtitle}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small" onClick={() => setSelectedId(projects[0].id)} aria-label="back">
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr' }, gap: 2 }}>
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <img src={selected.images[0]} alt={selected.title} style={{ width: '100%', borderRadius: 12, objectFit: 'cover', maxHeight: 420 }} onError={(e:any)=>{ e.currentTarget.src='data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27800%27 height=%27420%27%3E%3Crect width=%27800%27 height=%27420%27 fill=%27%23f3f4f6%27/%3E%3Ctext x=%27400%27 y=%27210%27 text-anchor=%27middle%27 font-size=%2724%27 fill=%27%23888%27 font-family=%27Inter,Arial,sans-serif%27%3EImage+not+available%3C/text%3E%3C/svg%3E' }} />
                  </Box>
                  <Typography sx={{ mb: 2 }}>{selected.description}</Typography>

                  <Divider sx={{ my: 2 }} />
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>Highlights</Typography>
                  <List dense>
                    {selected.highlights.map((h) => (
                      <ListItem key={h} sx={{ py: 0.5 }}>
                        <ListItemText primary={h} />
                      </ListItem>
                    ))}
                  </List>

                  {(selected.id === 'startup' || selected.id === 'tuition' || selected.id === 'restaurant' || selected.id === 'clinic') && (
                    <Box sx={{ mt: 2 }}>
                      <Button variant="contained" onClick={() => router.push(selected.id === 'startup' ? '/portfolio/startup' : selected.id === 'tuition' ? '/portfolio/tuition' : selected.id === 'restaurant' ? '/portfolio/restaurant' : '/portfolio/clinic')}>Open case study</Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
