// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

export default function handler(req, res) {

  const { firstname, lastname, username, password, status } = req.body

  if(req.method === 'GET'){
    try{
      connection.query(
        'SELECT * FROM  tbl_users',
        function(err, results) {
          res.status(200).json({users: results}); // fields contains extra meta data about results, if available
        })
    } 
    catch (error) {
      return res.status(500).json({ message: error.message});
    }
  } 
  else if (req.method === 'POST'){
    try{
      const result = connection.query("INSERT INTO tbl_users SET ?", {
        firstname, lastname, username, password, status,
      })
      return res.status(200).json({...req.body, id: result.insertId});
    } 
    catch (error) {
      return res.status(500).json({ message: error.message});
    }
  } 
  else if (req.method === 'PUT'){
    try{
      const result = connection.query("UPDATE tbl_users SET ? WHERE id = ?", [
        req.body,
        req.body.id,
      ]);
      return res.status(200).json({...req.body, id: result.insertId});
    } 
    catch (error) {
      return res.status(500).json({ message: error.message});
    }
  } 
  else {
    try{
      const result = connection.query("DELETE FROM tbl_users WHERE id = ?", [req.query.id]);
      return res.status(200).json({...req.body, id: result.insertId});
    } 
    catch (error) {
      return res.status(500).json({ message: error.message});
    }
  }
}

// export default function handler(req, res) {
//   res.status(200).json([
//     { id: '1' , firstname: 'sarawut' , lastname: 'kaikaew' , username: 'toey' , password: '2547' , status: 'admin'},
//     { id: '2' , firstname: 'ศราวุฒิ' , lastname: 'ข่ายแก้ว' , username: 'sarawut' , password: '2547' , status: 'user'}
//   ])
// }


// const { id } = req.query
// connection.query(
//   'SELECT * FROM  tbl_users',
//   function(err, results) {
//     console.log(results); // results contains rows returned by server
//     res.status(200).json({users: results}); // fields contains extra meta data about results, if available
//   }
// );