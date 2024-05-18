const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const config = require('../Config/config');
const token_obj = require('../Middlewares/authMiddleware');
const db_res = require('../Models/userModel');

const { exec } = require('child_process');
const fs = require('fs-extra');
const { runInNewContext } = require('vm');


// live compiler complex package
var compiler = require('compilex');
var options = {stats : true}; //prints stats on console 
compiler.init(options);

async function run_code (req,res){

  // res.json("controller is wokring fine");
  let code = req.body.code;
  console.log("live server body parse code");
  console.log(req.body);
  // res.send(req.body);
  compiler.flush(function(){
    console.log("file deleted");
  })

  if (req.body.user_language==="python") {
    
    var envData = { OS : "linux" }; 
    compiler.compilePython( envData , code , function(data){
      if (data) {
        console.log("Output");
        console.log(data);
        res.send(data);
      }else{
        console.log("Error");
        console.log(data);
        res.send(data);
      }
    });     
  }
  else if(req.body.user_language==="c"){
    var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
    compiler.compileCPP(envData , code , function (data) {
        if (data) {
          res.send(data);
          console.log("c language code output");
          console.log(data);
          
        }
    });
  }
  else if(req.body.user_language==="java"){
    // res.send(req.body.code);
    fs.writeFile('code_run/Mainclass.java', code, (err) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error writing Java file');
          console.log("compiler_error");
      }
      
    //   // Compile and run Java code
      exec('javac code_run/Mainclass.java && java -cp code_run Mainclass', (error, stdout, stderr) => {
        if (error) {
          console.error(`Execution error: ${error.message}`);
          res.status(500).send('Error executing Java code');
          console.log("execution_error");
        }
        if (stderr) {
          console.error(`Execution stderr: ${stderr}`);
          res.status(500).send('Error executing Java code');
          console.log("execution error 2");
        }
        console.log(`Java program output:\n${stdout}`);
        res.send(stdout);
      });
    });
  }
  else if(req.body.user_language==="javascript"){
    
 
    try {
    
      // Execute JavaScript code in a new context
      const output = runInNewContext(code, {});

      // Send the output back to the client
      res.send({ output });
    } catch (error) {
        console.error('Execution error:', error);
        res.status(500).send({ error: 'Execution error' });
    }
    
  }
  
}

async function test(req,res){
  console.log("this outes is wokring fine");
  res.send('get method is this routes');
}


module.exports = { run_code , test};