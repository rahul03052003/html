const mysql=require('mysql');
const db=mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_db'
});
db.connect(()=>console.log('Mysql Connected'));

db.query('INSERT INTO users (name,email) VALUES (?,?)',
    ['John Doe','john@example.com'],
    (err,result)=>{
        if (err) throw err;
        console.log("Inserted ID:",result.insertID);
    }
);
db.query('SELECT *FROM users',(err,rows)=>{
    if(err)throw err;
    console.log('User Data:',rows);
});
