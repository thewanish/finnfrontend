import React, { useState } from "react";
import Print from '@mui/icons-material/Print';
import { Done } from '@mui/icons-material';
import { Default } from '@mui/icons-material';
import { Input } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';




import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const initial = { profile: "", exp: 0, techs: [], desc:"" };

const Create = () => {
  //hva de kan velge i kvalifikasjoner
    const skillSet = [
        {
          name: "Javascript"
        },
        {
          name: "Java"
        },
        {
          name: "Python"
        },
        {
          name: "Django"
        },
        {
          name: "Rust"
        }
      ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
// på selve submit utløsning så lagres det med POST til collections
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://prosjekt-rekruttere.onrender.com/post", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      navigate('/employee/feed');
  };

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({...form , techs : [...form.techs, e.target.value]});
  }

  return (
    <Paper sx={{ padding:"2%"}} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Rekrutter 
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Profil:"
            variant="outlined"
            value={profile}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Erfaring:"
            variant="outlined"
            value={exp}
          />
           <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Beskrivelse:"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin:"1% auto"}}>
          <h3>Ønskelige kvalifikasjoner</h3>
         <ul>
        {skillSet.map(({ name }, index) => {
          return (
            <li key={index}>
              <div >
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}  
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
       
      </ul>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Sett inn
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;