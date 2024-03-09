const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        password:"",
        database:"blood"
    })



    app.get('/',(req,res)=>{
        const sql="SELECT *FROM signup";
        db.query(sql, (err,result)=>{
            if(err) return res.json({Message:"error in server"});
            return res.json(result);
    
        })
    })
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



//login

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

//admin
app.post('/Adminlogin',(req,res)=>{
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

app.get('/admindashboard',(req,res)=>{
    const sql="SELECT *FROM donation";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

    })
})


app.post('/donation',(req,res)=>{
    const sql="INSERT INTO donation (`user_name`,`user_gender`,`user_age`,`user_group`,`user_address`,`user_phone`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.bloodgroup,
        req.body.address,
        req.body.phone,
    ]
      db.query(sql, [values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
      })
})

app.get('/read/:id', (req,res)=>{
    const sql = "SELECT * FROM donation WHERE user_id = ?";
    const id=req.params.id;
    
    db.query(sql,[id], (err,result)=>{
    if(err) return res.json({Message: "error in server"});
    return res.json(result);
})
})



app.put('/edit/:id', (req , res)=>{
    const sql='UPDATE donation SET `user_name`=?,`user_gender`=?,`user_age`=?,`user_group`=?,`user_address`=?,`user_phone`=? WHERE user_id=?';
    const id=req.params.id;
    db.query(sql,[req.body.name, req.body.gender, req.body.age, req.body.bloodgroup, req.body.address, req.body.phone, id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })
})


app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM donation WHERE user_id=? ";
    const id=req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })



})

app.listen(8000,()=>{
    console.log("listening");
})