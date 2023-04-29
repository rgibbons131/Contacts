const { ObjectId } = require('mongodb/lib/bson');
const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('user').collection('contacts').find();
  result.toArray().then((lists) => {
    console.log(lists);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
};

const getUser = async (req, res, next) => {
  const result = await mongodb.getDb().db('user').collection('contacts').findOne({"_id" :new ObjectId(req.params.userId)}).then( (account) => {
    if (account == null){
      console.log("Account not found");
    res.status(500).json({ message: "An error ocured" });
    }
    else{
    res.setHeader('Content-Type', 'application/json');
        res.status(200).json(account); // we just need the first one (the only one)
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ message: "An error ocured" });
  }
  );

};

module.exports = { getData, getUser };
