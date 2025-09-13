import React from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabList = () => {

const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

     <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 680 },
        bgcolor: 'background.paper',
      }}

    >
      <Tabs 
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Groceries" />
        <Tab label="Wellness" />
        <Tab label="Footwear" />
        <Tab label="Beauty" />
        <Tab label="Jewellery" />
        <Tab label="Bags" />
      </Tabs>
    </Box>
    
    </>
  )
}

export default TabList