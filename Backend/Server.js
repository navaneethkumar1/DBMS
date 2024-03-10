const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(cors());

app.use(express.json());
// database
const db=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        password:"",
        database:"blood"
    })
    app.get('/',(req,res)=>{
        const sql="SELECT *FROM ";
        db.query(sql, (err,result)=>{
            if(err) return res.json({Message:"error in server"});
            return res.json(result);
    
        })
    })
    app.get('/Donate',(req,res)=>{
        const sql="SELECT *FROM blood_donate";
        db.query(sql, (err,result)=>{
            if(err) return res.json({Message:"error in server"});
            return res.json(result);
    
        })
    })
 // user signup   
app.post('/Signup',(req,res)=>{
    const sql = "INSERT INTO signup (`user_name`, `user_email`, `user_password`) VALUES (?)";

    const values=[req.body.user_name,req.body.user_email,req.body.user_password]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})


//user login

app.post('/Login',(req,res)=>{
const sql = "SELECT * FROM signup WHERE `user_email`= ? AND `user_password`= ?";

db.query(sql,[req.body.user_email,req.body.user_password],(err,data)=>{
    if(err){
        console.error("Error executing SQL query:", err);
        return res.json("error");
    }
    if(data.length>0){
        return res.json("success");
    }
    else{
        return res.json("fail");
    }
})
})
//admin login 
app.post('/Admin',(req,res)=>{
const sql = "SELECT * FROM admin_signup WHERE `Admin_email`= ? AND `Admin_password`= ?";

db.query(sql,[req.body.Admin_email,req.body.Admin_password],(err,data)=>{
    if(err){
        console.error("Error executing SQL query:", err);
        return res.json("error");
    }
    if(data.length>0){
        return res.json("success");
    }
    else{
        return res.json("fail");
    }
})
})

app.listen(8081,()=>{
    console.log("listening");
})
// donate blood

app.post('/Donate',(req,res)=>{
    const sql = "INSERT INTO donate_blood (`blood_name`, `blood_age`, `blood_group`,`blood_gender`,`blood_phone`,`blood_city`) VALUES (?)";

    const values=[req.body.blood_name,req.body.blood_age,req.body.blood_group,req.body.blood_gender,req.body.blood_phone,req.body.blood_city]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})
