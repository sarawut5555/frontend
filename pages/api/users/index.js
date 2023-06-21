// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_users'
});

export default function handler(req, res) {

connection.query(
  'SELECT * FROM  tbl_users',
  function(err, results) {
    console.log(results); // results contains rows returned by server
    res.status(200).json({users: results}); // fields contains extra meta data about results, if available
    }
  );
}

// export default function handler(req, res) {
//   res.status(200).json([
//     { id: '1' , firstname: 'sarawut' , lastname: 'kaikaew' , username: 'toey' , password: '2547' , status: 'admin'},
//     { id: '2' , firstname: 'ศราวุฒิ' , lastname: 'ข่ายแก้ว' , username: 'sarawut' , password: '2547' , status: 'user'}



//   ])
// }
