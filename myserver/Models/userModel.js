const Pool = require('pg').Pool;
const config = require('../Config/config');

const dbcon = new Pool(config.pgsql);

const getuseData = (id) => {
  // const query = `;`;
  
  return new Promise((resolve, reject) => {
    dbcon.query('SELECT * FROM public."user"', (err, user_data) => {
      if (err) {
        reject(err); // Reject the promise with the error
        return;
      }
      resolve(user_data); // Resolve the promise with the user data
    });
  });
};

module.exports = { getuseData };
