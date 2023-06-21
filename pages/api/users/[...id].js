// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_users'
});

export default function handler(req, res) {
  const { id } = req.query
  connection.query(
    'SELECT * FROM  tbl_users WHERE id = ?', [id],
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results}); // fields contains extra meta data about results, if available
    }
  );
}