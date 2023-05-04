const express=require('express');
const {StylistModel}=require('../models/Stylists.model');
const stylist=express.Router();


stylist.get("/",async(req,res)=>{
    let data= await StylistModel.find()
    res.status(200).send(
        data
    )
})

stylist.get("/male",async(req,res)=>{
    try{
    let data= await StylistModel.aggregate([{ $match: { Styler: "male" } }])
    res.status(200).send(
        data
    )
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

stylist.get("/female",async(req,res)=>{
    try{
    let data= await StylistModel.aggregate([{ $match: { Styler: "female" } }])
    res.status(200).send(
        data
    )
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports ={stylist}