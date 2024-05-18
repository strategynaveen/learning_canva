
import { useState } from 'react'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';




import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'



function  Forgot_pass(){
    return(
        <>
        <Grid  container  direction="row"  justifyContent="center"  alignItems="center" height={'100vh'}>
            <Box sx={{color:'white',border:'1px solid #C0C0C0',padding:4,borderRadius:2,boxShadow:'1px 2px 2px 3px 	#DCDCDC',width:{xs:'80%',sm:'50%',md:'40%',lg:'30%',xl:'38%'}}}   direction="column" alignItems="center" justifyContent="center">
                <Typography variant="h5" gutterBottom color={'#616161'} marginBottom={'1rem'} textAlign={'center'}>Strategy Learning </Typography>
                <Typography variant="body2" gutterBottom color={'#616161'} direction="row" sx={{width:'100%'}} justifyContent={'center'} alignItems={'center'} marginBottom={'1.5rem'} textAlign={'center'}>Reset Your Password </Typography>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <TextField id="outlined-basic " label="Email" variant="outlined" width={'100%'}   fullWidth style={{marginBottom:'1rem'}}/>
                    {/* <TextField  id="outlined-password-input"  label="Password"    type="password" width={'100%'} style={{margin:'1rem'}} fullWidth /> */}
                    
                    <Button variant="contained" color="warning" sx={{width:'50%',margin:'1rem',padding:'0.6rem'}} endIcon={<SendIcon />} >SEND</Button>
                </Box>    
            </Box>
        </Grid>
        </>
    );
} 

export default Forgot_pass;