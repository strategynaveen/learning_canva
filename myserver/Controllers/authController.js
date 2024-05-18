const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const config = require('../Config/config');
const token_obj = require('../Middlewares/authMiddleware');
const db_res = require('../Models/userModel');


async function  login(req, res){
  console.log("auth controller calling");
  const userId = 1; // Sample user ID

  const token = await token_obj.generateToken(userId);
  const db_out = await db_res.getuseData(userId);
  console.log("controller modal data");
  // console.log(db_out);
  const final_res ={
    'token':token,
    'user_id':userId,
    'db_res':db_out,
  };
  res.json(final_res);
};

async function getdata(req,res){
  res.json(req.body);
  console.log("controller post method working fine");
}

module.exports = { login , getdata};
