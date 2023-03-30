const express = require('express');
const bodyParser = require('body-parser');



const app=express();
// app.use(express.json())
app.use(bodyParser.json());

app.get("/bfhl",(req,res)=>{
  res.send("Hello There");
})
app.post("/bfhl",(req,res)=>{
  const data1=req.body.data;
  // res.send("Hello There");
  // res.json(req.body);
  const l={
    "is_success":true,
    "user_id":"Aman_Jai_Singh_2010993639",
    "email":"aman3639.be20@chitkara.edu.in",
    "roll_number":"2010993639",
  };
  var odd=[];
  var even=[];
  var letter=[];
  data1.forEach(element => {
    
    if(element%2!=0&&element>0){
      odd.push(element);
    }
    else if(element%2==0){
      even.push(element);
    }
    else{
      var temp=element.toUpperCase();
      letter.push(temp);
    }
  });
  // aman
  var res2={...l,"odd_numbers":odd,"even_numbers":even,"alphabets":letter};
  try {
    res.status(200).json(res2);
  } catch (error) {
    res.status(401).json({is_success:false,error});
  }
})





app.listen(8000,err=>{
  console.log("port running on 8000",err);
  
})
