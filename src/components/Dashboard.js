import * as React from 'react';
import {Box ,Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import  Create from './Create.js';


// setter opp forksjellege boxer som endrer seg når du trykker
export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    
    
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Post" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1"><Create /></TabPanel>
      </TabContext>
    </Box>
    </>
  );
}