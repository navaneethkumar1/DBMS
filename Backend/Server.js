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



//login
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

app.get('/signup',(req,res)=>{
    const sql="SELECT *FROM signup";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

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


//requesting

app.get('/requestblood',(req,res)=>{
    const sql="SELECT *FROM req_blood";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

    })
})

app.post('/requestblood',(req,res)=>{
    const sql="INSERT INTO req_blood (`patient_name`,`patient_age`,`patient_gender`,`patient_phone`,`patient_address`,`patient_group`,`patient_unit`,`patient_hospital`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.phone,
        req.body.address,
        req.body.group,
        req.body.unit,
        req.body.hospital,
    
    ]
      db.query(sql, [values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
      })
})


// donate blood

app.post('/donateblood',(req,res)=>{
    const sql = "INSERT INTO donate_blood (`donor_name`, `donor_age`, `donor_group`,`donor_gender`,`donor_phone`,`donor_address`) VALUES (?)";

    const values=[req.body.donor_name,req.body.donor_age,req.body.donor_group,req.body.donor_gender,req.body.donor_phone,req.body.donor_address]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})

app.get('/donateblood',(req,res)=>{
    const sql="SELECT *FROM donate_blood";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

    })
})

// rbc donation
app.post('/Rbc',(req,res)=>{
    const sql = "INSERT INTO donate_rbc (`rbc_name`, `rbc_age`, `rbc_group`,`rbc_gender`,`rbc_phone`,`rbc_city`,`rbc_weight`) VALUES (?)";

    const values=[req.body.rbc_name,req.body.rbc_age,req.body.rbc_group,req.body.rbc_gender,req.body.rbc_phone,req.body.rbc_city,req.body.rbc_weight]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})

// stemcell donation
app.post('/Stemcell',(req,res)=>{
    const sql = "INSERT INTO donate_stemcell (`stemcell_name`, `stemcell_age`, `stemcell_group`,`stemcell_gender`,`stemcell_phone`,`stemcell_city`,`stemcell_weight`,`stemcell_diagnosis`) VALUES (?)";

    const values=[req.body.stemcell_name,req.body.stemcell_age,req.body.stemcell_group,req.body.stemcell_gender,req.body.stemcell_phone,req.body.stemcell_city,req.body.stemcell_weight,req.body.stemcell_diagnosis]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})


app.listen(8080,()=>{
    console.log("listening");
})




  

  