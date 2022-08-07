import React from 'react'
import "./Home.css";
import './App.css';
import { styled } from '@mui/material/styles';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import TextRotationAngleupOutlinedIcon from '@mui/icons-material/TextRotationAngleupOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import Postbox from './Postbox';
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, InputBase, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
const Home = () => {
  const [open,setOpen]=React.useState(0);

  const posttxt = ()=>{
    setOpen(1)
  }
  const postpic = ()=>{
    setOpen(2)
  }
  return (
    <div className='homepage'>
        <div className='postwaybox'>
        
        <Accordion elevation={0}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

            <Box sx={{display:"flex",justifyContent:"space-around",width:"inherit"}}>
            <Tooltip title="Post your thought">
            <IconButton >
            <TextRotationAngleupOutlinedIcon onClick={posttxt} sx={{color:"purple"}} />
            </IconButton>
            </Tooltip>


            <Tooltip title="Post your pic">
            <IconButton>
            <BrokenImageOutlinedIcon onClick={postpic} sx={{color:"lightgreen"}}/>
            </IconButton>
            </Tooltip>

            <Tooltip title="Post your reel">
            <IconButton>
            <MusicVideoOutlinedIcon  sx={{color:"orange"}}/>
            </IconButton>
            </Tooltip>
            </Box>

        </AccordionSummary>

        <AccordionDetails>
       {open ===1 && <Box>
       <InputBase
                sx={{ ml: 1, flex: 1}}
                placeholder="Write your thought here.."
                inputProps={{ 'aria-label': 'Write your thought' }}
            />
            <SendOutlinedIcon  sx={{marginTop:"35px",cursor:"pointer"}}/>
       </Box>}

       {open ===2 &&  <div className="App">
      <Button sx={{backgroundColor:"purple"}} variant="contained" component="label" color="primary">
        {" "}
        <AddAPhotoOutlinedIcon sx={{width:"20px",margin:"0px 15px"}}/>  Upload a file
        <input type="file" hidden />
      </Button>
    </div>}
        </AccordionDetails> 
        
        </Accordion >
            



            
        </div>
       
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />
        <Postbox />

    </div>
  )
}

export default Home