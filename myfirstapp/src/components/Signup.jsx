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


function Signup(){

    // password field
    const [showPassword, setShowPassword] = React.useState(true);
    const [repassword, setShowrepassword] = React.useState(true); 

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowrePassword = () => setShowrepassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseDownrePassword = (event) => {
        event.preventDefault();
    }




    return(
        
        <>
           <Grid container diretion="row" justifyContent='center' alignItems="center" height={'100vh'}>
                <Box sx={{color:'white',border:'1px solid #C0C0C0',padding:4,borderRadius:2,boxShadow:'1px 2px 2px 3px 	#DCDCDC',width:{xs:'80%',sm:'50%',md:'40%',lg:'30%',xl:'38%'}}} direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5" gutterBottom color={'#616161'} marginBottom={'1rem'} textAlign={'center'}>Strategy Learning </Typography>
                    <Typography variant="body2" gutterBottom color={'#616161'} direction="row" sx={{width:'100%'}} justifyContent={'center'} alignItems={'center'} marginBottom={'1.5rem'} textAlign={'center'}>Signup into strategy Learning </Typography>
                    <Box sx={{display:'flex',flexDirection:"column" , height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <TextField id="outlined-basic" label="UserName" variant="outlined" width={'100%'} fullWidth style={{marginBottom:'1rem'}}></TextField>
                        <TextField id="outlined-basic" label="Email" variant="outlined" width={'100%'} fullWidth style={{marginBottom:'1rem'}}></TextField>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'password' : 'text'}  endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}  edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                } label="Password"
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Re-Type Password</InputLabel>
                            <OutlinedInput id="outlined-adornment-password" type={repassword ? 'password' : 'text'}  endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowrePassword} onMouseDown={handleMouseDownrePassword}  edge="end">
                                    {repassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                } label="Password"
                            />
                        </FormControl>

                        <Button variant="contained"  sx={{width:'50%',margin:'1rem',padding:'0.6rem'}} color={'warning'}>Signup</Button>
                    </Box>
                </Box>
           </Grid>
        </>
    );
}
export default Signup;