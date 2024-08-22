// const express = require('express');
const DATA = require('../Modal/dataModal')

exports.showForm= async(req,res)=>{
    res.render('form')
}

exports.saveData=async(req,res)=>{
    try{
        const{name,email}=req.body
        const photo=req.file.filename
        console.log(name,email,photo)
        if(!name || !email || !photo){

        }else{
            const newData = DATA({name,email,photo})
            await newData.save()
            console.log(req.file.filename)
            res.render('image',{image:req.file.filename})
        }

    }catch(err){
        console.log(err)
        res.status(500).json(err)

    }
}

exports.getImage=async(req,res)=>{
    console.log('get image instide')
    const{id}=req.params
    console.log(id)
    if(id){
      const image=  await DATA.findOne({photo:id})
      console.log(image)
      res.render('image',{image:image.photo})
    } 
}