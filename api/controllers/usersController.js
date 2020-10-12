const db = require('../models/index.js');
const user = require('../models/user.js');
const users = db.user;

exports.index= (req, res) => {
    const id = req.params.id;
  users.findOne({where:{id:id}}).then(users =>{
    res.json(users);
  });
}