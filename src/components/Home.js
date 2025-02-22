import "../App.css"
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  
  const [post, setPost] = useState([
    {
      id: 999,
      profile: "Freelance Utvikler",
      desc: "Jobbet lenge med Javascript",
      exp: 7,
      techs: ["JavaScript", "Python", "Django"],
    },
    {
      id: 991,
      profile: " Utvikler",
      desc: "Javascript guru",
      exp: 11,
      techs: ["JavaScript", "Java", "Django"],
    },
    {
      id: 993,
      profile: "SQL Utvikler",
      desc: "2 års erfaring i SQL",
      exp: 2,
      techs: ["SQL", "Python", "Django"],
    },
    {
      id: 992,
      profile: "Database Utvikler",
      desc: "4.5 års erfaring i SQL",
      exp: 4,
      techs: ["Oracle", "SQL", "Django"],
    },
    {
      id: 1000,
      profile: "Cloud Arkitekt",
      desc: "3 års erfaring i AWS",
      exp: 3,
      techs: ["AWS", "SQL", "Java"],
    },
  ]);
  
  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(
          `https://prosjekt-rekruttere.onrender.com/allPosts`
        );
  
        // Update state with API data when available
        setPost((prevPosts) => [...response.data, ...prevPosts]); // Combining API data with existing data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchInitialPosts();
  }, []);

      // **Calculate Dashboard Statistics**
      const totalJobs = post.length;
      const avgExperience = totalJobs > 0 ? (post.reduce((sum, p) => sum + p.exp, 0) / totalJobs).toFixed(1) : 0;
    
      const allSkills = post.flatMap((p) => p.techs);
      const uniqueSkills = [...new Set(allSkills)];
      const topSkills = uniqueSkills.slice(0, 5).join(", "); // Topp 5 skillsett
    
      return (
        <Box sx={{ margin: "2%" }}>
          {/* Dashboard Widgets */}
          <Grid container spacing={2} sx={{ marginBottom: "3%" }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ padding: "2%", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                <Typography variant="h6">Aktive annonser</Typography>
                <Typography variant="h4">{totalJobs}</Typography>
              </Card>
            </Grid>
    
            <Grid item xs={12} md={4}>
              <Card sx={{ padding: "2%", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                <Typography variant="h6">Gjennomsnittlig erfaring</Typography>
                <Typography variant="h4">{avgExperience} år</Typography>
              </Card>
            </Grid>
    
            <Grid item xs={12} md={4}>
              <Card sx={{ padding: "3%", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                <Typography variant="h6">Topp teknologi</Typography>
                <Typography variant="body1">{topSkills}</Typography>
              </Card>
            </Grid>
          </Grid>
    
          {/* Section Title */}
          <Typography sx={{ margin: "5%" }} variant="h3" align="center">
            Anbefalinger til deg
          </Typography>
    
          {/* Job Listings */}
          <Grid container spacing={2} sx={{ margin: "2%" }}>
            {post.map((p) => (
              <Grid key={p.id} item xs={12} md={6} lg={4}>
                <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                  <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: "600" }}>
                    {p.profile}
                  </Typography>
                  <Typography sx={{ color: "#585858", marginTop: "2%" }}>
                    Beskrivelse: {p.desc}
                  </Typography>
                  <Typography variant="h6">Erfaring: {p.exp} år</Typography>
                  <Typography gutterBottom>Skills: {p.techs.join(", ")}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    };
    
    export default Home;
    