import  React,{ useEffect, useState } from 'react';
import Navbar_code from './Navbar_code';
import Box from '@mui/material/Box';
import axios from 'axios';
import Editor from "@monaco-editor/react"; 

import {Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';

import {API_URL} from '../../Global';
import PropTypes from 'prop-types'; // For prop type validation


const Home_code = () => {
    
    const [usertheme, setuserTheme] = useState("light");
    const [userlang, setUserLang] = useState("python");
    const [fontSize, setFontSize] = useState(20);

    const [code_opt , setCode] = useState('#Enter the code');
    const options = { 
        fontSize: fontSize,
        lineNumbers: true
    } 

    const [output_code,setOutput] = useState('');


    const codeSubmission = async(e) => {
        e.preventDefault();
        
        try{
            console.log(userlang);

            const response = await axios.post(`http://localhost:8000/live/run`,{
                code:code_opt,
                user_language:userlang
            });
            console.log("axios response is.....");
            console.log(response);
            console.log(response.data);
            if (userlang==="java") {
                let res = {};
                res.output = response.data;
                setOutput(res);
            }else{
                setOutput(response.data);
            }
            
        }catch(error){
            console.log("axios code run ajax error");
            console.log(error)
        }

        
    }
    function handleEditorChange(newValue,e) {
        setCode(newValue);
    }
    useEffect (() =>{
        console.log("user selection language is:\t"+userlang+"\n its working on useeffect")
        if (userlang==="java") {
            let defaultCode = `
            public class Mainclass{
                public static void main(String[] args){
                    System.out.println("Hello Strategy");
                }
            }
        `;
        setCode(defaultCode);
        } else {
            setCode('#Enter the code');
        }
    },[userlang]);


    const download_code = () =>{
        // alert('hi');
        var extension = "";
        console.log("before download language is:\t"+userlang);
        if(userlang==="java"){
            extension = "java";
        }else if(userlang==="javascript"){
            extension = "js";
        }else if(userlang==="python"){
            extension = "py";
        }else if(userlang==="c"){
            extension = "c";
        }
        const element  = document.createElement('a');
        const file  = new Blob([code_opt],{type: 'text/plain'});
        element.href=URL.createObjectURL(file);
        element.download = "output_code"+"."+extension;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

    }

    {console.log("live compiler value is...")}
    {console.log(output_code.output)}

    return (
        <>
            <Navbar_code 
             userLang={userlang} setUserLang={setUserLang}
             userTheme={usertheme} setUserTheme={setuserTheme}
            onClick={download_code}
            />
           
            <Box sx={{display:'flex',direction:'row',justifyContent:'center',alignItems:'stretch',width:'100%',position:'relative',top:'7rem'}}>
                <Box sx={{width:'50%',height:'82.5vh'}}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
                        <Typography  variant="span">Codeing ...</Typography>
                        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded flex flex-row" onClick={codeSubmission}>Run <SendIcon className='ml-2' /> </button>

                    </Box>
                    <Editor 
						options={options} 
						height="71.5vh"
						width="100%"
						theme={usertheme} 
						language={userlang} 
						defaultLanguage="python"
						value={code_opt}
                        onChange={handleEditorChange}
					/> 
                </Box>
                <Box sx={{width:'50%',height:'82vh'}}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
                        <Typography  variant="span">Output</Typography>

                    </Box>
                    <pre>{output_code.output}</pre>
                </Box>
            </Box>            
        </>
    );
}

export default Home_code;