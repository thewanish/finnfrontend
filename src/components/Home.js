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
  
    const [post, setPost] = useState();
  
    // bruker hook itilfelle dataene fra API endrer seg før den rendrer siden
    useEffect(() => {
     
      const fetchInitialPosts = async () => {
        try {
          const response = await axios.get(`https://prosjekt-rekruttere.onrender.com/allPosts`);
          
          const newData = [
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
          ];
      
          setPost([...response.data, ...newData]); // Merge API data with static JSON data
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
       fetchInitialPosts();
      
    }, );
  console.log(post);
  return (
    <div>
      
      <Typography sx={{ margin:"5%" }} variant="h3" align="center">
        Ledige stillinger
      </Typography>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        
        {post &&
        //viser alle postene i grid henter dem fra stillinger i colelctions
          post.map((p) => {
            return (
              <Grid key={p.id} item xs={12} md={6} lg={4}>
                <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "2rem", fontWeight: "600" }}
                  >
               {p.profile}
                  </Typography>
                  <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                    Beskrivelse: {p.desc}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">
                    Erfaring: {p.exp} år
                  </Typography>
  
                  <Typography gutterBottom  variant="body">Skills : </Typography>
                  {p.techs.map((s, i) => {
                    return (
                      <Typography variant="body" gutterBottom key={i}>
                        {s} .
                        {` `}
                      </Typography>
                    );
                  })}
    
                </Card>
              </Grid>
            );
          })}
      </Grid>
      
    </div>
  );
};

export default Home;