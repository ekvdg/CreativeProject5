const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");
const User = users.model;

const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  id: Number,
  name: String,
  price: Number,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

router.post("/", auth.verifyToken, User.verify, async (req, res) => {
  const item = await Item.findOne({id: req.body.id});
  if(item != null) {
    item.quantity = item.quantity + 1;
    await item.save();
    res.send(item);
  } else {
    const item = new Item({
      user: req.user,
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    try {
      await item.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
});

router.put('/', auth.verifyToken, User.verify, async(req, res) =>{
  try{
    const item = await Item.findOne({id: req.body.id});
    item.quantity = item.quantity + req.body.quantity;
    if(item.quantity <= 0) {
      item.quantity = 0;
      res.send(false);
    } else {
      await item.save();
      res.send(true);
    }
  } catch{
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', auth.verifyToken, User.verify, async(req, res) =>{
  try{
    const item = await Item.deleteOne({id: req.params.id});
    return res.sendStatus(200);
  } catch(error){
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  try {
    let items = await Item.find({
      user: req.user
    }).populate('user');
    return res.send(items);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/:id", auth.verifyToken, User.verify, async (req, res) => {
  try {
    let item = await Item.findOne({
      user: req.user,
      id: req.params.id
    }).populate('user');
    return res.send(item);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Item,
  routes: router,
}
