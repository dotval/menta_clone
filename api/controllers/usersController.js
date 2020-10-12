const db = require('../models/index.js');
const user = require('../models/user.js');
const users = db.user;
const skill = db.skill

exports.index= (req, res) => {
    const id = req.params.id;
    users.findOne({where:{id:id},include:[{model:skill}]}).then((users) => {
        data = { 
            name: users.name, 
            icon: users.icon, 
            twitter_id: users.twitter_id, 
            profile: users.profile,
            skills : users.skills
        }

        res.json( data );
    }).catch(err=>{
        console.log(err);
        res.send("err")
    });
}