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
          const response = await axios.get(`https://prosjekt-rekruttere.onrender.com/allPosts`);
          console.log(response);
          setPost(response.data);
      }
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