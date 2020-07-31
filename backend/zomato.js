const x=require('express');
const y=require('mongodb');
const c=require('cors');


const a=x();
const MongoClient=y.MongoClient;
const mongourl="mongodb://localhost:27017"
let db;
const p=5600;

a.use(c());



a.get('/restuarant/:id',(req,res)=>
{

    console.log(req.params.id);

    var q={_id:req.params.id}

    db.collection('restuarant').find(q).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})



a.get('/restuarantdetails/:cityname',(req,res)=>
{

    console.log(req.params.cityname);

    var q={city_name:req.params.cityname}

    db.collection('restuarant').find(q).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})


a.get("/restuarant",(req,res)=>
{
    var city=req.query.city;
    var q={city:req.query.city}
    db.collection('restuarant').find(q).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result)
    })
})






a.get('/restuarants',(req,res)=>
{
    db.collection('restuarant').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result)
    })
})
a.get('/cusine',(req,res)=>
{
    db.collection('cusine').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result)
    })
})
a.get('/meals',(req,res)=>
{
    db.collection('meals').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result)
    })
})
a.get('/location',(req,res)=>
{
    db.collection('city').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result)
    })
})




MongoClient.connect(mongourl,(err,client)=>
{
    if(err) throw err;
    db=client.db('edurekainternship');
    a.listen(p,(err,result)=>
    {
        if(err) throw err;
        console.log(`Server running on ${p}`);
    })
})