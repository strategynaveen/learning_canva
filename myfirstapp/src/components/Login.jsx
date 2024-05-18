import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink ,BrowserRouter , Router, Routes ,Route , useNavigate , Link} from "react-router-dom";
// import Createaccount from "./Createaccount";

// material ui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid  } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import Singup from './Signup';

// login form creation
function Login(){

    // navigate function in onclick method
    // const navigate = useNavigate();
    // const navigate_fun = (arg) =>{
        
    //     console.log("argument is :\t"+arg);
    //     if (arg==="create_account") {
    //         navigate('/signup');
    //     }else if(arg==="forgot_account"){
    //         navigate('/forgot_account');
    //     }
    // }

    // password use state
    const [showPassword, setShowPassword] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (

        <Grid  container  direction="row"  justifyContent="center"  alignItems="center" height={'100vh'}>
            <Box sx={{color:'white',border:'1px solid #C0C0C0',padding:4,borderRadius:2,boxShadow:'1px 2px 2px 3px 	#DCDCDC',width:{xs:'80%',sm:'50%',md:'40%',lg:'30%',xl:'38%'}}}   direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" gutterBottom color={'#616161'} marginBottom={'1rem'} textAlign={'center'}>Strategy Learning </Typography>
            <Typography variant="body2" gutterBottom color={'#616161'} direction="row" sx={{width:'100%'}} justifyContent={'center'} alignItems={'center'} marginBottom={'1.5rem'} textAlign={'center'}>Sign into strategy Learning </Typography>
            <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <TextField id="outlined-basic " label="Email" variant="outlined" width={'100%'}   fullWidth style={{marginBottom:'1rem'}}/>
                {/* <TextField  id="outlined-password-input"  label="Password"    type="password" width={'100%'} style={{margin:'1rem'}} fullWidth /> */}
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
                <Box direction="row" sx={{width:'100%',justifyContent:'space-between',display:'flex',margin:'0.5rem'}} >
                    <Link style={{textDecoration: "none",color: "#2196f3",fontSize:'1.2rem'}} to="/signup">{'Create Account'}</Link>
                    <Link style={{textDecoration: "none" , color: "#2196f3",fontSize:'1.2rem'}} to="/forgot_password">{'Forgot Password?'}</Link>
                </Box>
                <Button variant="outlined" color="primary" sx={{width:'50%',margin:'1rem',padding:'0.6rem'}}>Login</Button>
            </Box>
            
            </Box>
        </Grid>
    );
}

export default Login;