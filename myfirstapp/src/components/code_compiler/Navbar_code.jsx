import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Slider from '@mui/material/Slider';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { getToken , removeToken } from '../../utils/token';
const Navbar_code = ({userLang,setUserLang,userTheme,setUserTheme,onClick}) => {
   
    const downloadCode = ()=>{
        onClick();
    }

    const languages = [ 
		{ value: "c", label: "C" }, 
		{ value: "javascript", label: "JavaScript" }, 
		{ value: "python", label: "Python" }, 
		{ value: "java", label: "Java" }, 
	]; 
	const themes = [ 
		{ value: "vs-dark", label: "Dark" }, 
		{ value: "light", label: "Light" }, 
	] 

    const logoutHandle = ()=>{
        removeToken();
        // navigate('/login');
        window.location.reload();
    }

    
    
    return(
        <>
            <nav class="bg-gray-50 border-gray-200 dark:bg-gray-900 fixed z-50 w-full mb-2">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Strategy Learning</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <button onClick={logoutHandle}  class="text-sm  text-blue-600 dark:text-blue-500 hover:underline ">Logout</button>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700 fixed w-full z-50" style={{top:'3rem'}}>
                <div class="max-w-screen-xl px-2 py-2 mx-auto">
                    <div class="flex items-center justify-center">
                        <div class="flex flex-row  font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            onChange={(e)=>{setUserLang(e.target.value)}}>
                                <option selected>Choose a Language</option>
                                {languages.map((item) => {
                                    if(item.value===userLang){
                                        return(
                                            <option key={item.value} value={item.value} selected>  {item.label} </option>
                                        )
                                    }else{
                                        return(
                                            <option key={item.value} value={item.value} >  {item.label} </option>
                                        )
                                    }
                                    
                                })}
                            </select>

                            <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e)=>setUserTheme(e.target.value)}>
                                <option selected>Choose a Theme</option>
                                {themes.map((item) => {
                                    if(item.value===userTheme){
                                        return(
                                            <option key={item.value} value={item.value} selected>{item.label}</option>

                                        )
                                    }else{
                                        return (
                                            <option key={item.value} value={item.value}>{item.label}</option>

                                        )
                                    }
                                })}
                            </select>

                           

                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex flex-row ">Share <ShareSharpIcon className='ml-2'/> </button>

                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex flex-row" onClick={downloadCode}>Downloads < CloudDownloadIcon className='ml-2' /> </button>

                        
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar_code;
