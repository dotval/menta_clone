const db = require('../models/index.js');
const user = require('../models/user.js');
const users = db.user;
const skill = db.skill
const career = db.career

exports.index = (req, res) => {
    const id = req.params.id;
    users.findAll({where: { id: id },include:[{model: skill,required:false},{model:career,required:false}]}).then((users) => {
        data = {
            name: users.name,
            icon: users.icon,
            twitter_id: users.twitter_id,
            profile: users.profile,
            skills: users.skills,
            careers: users.careers,
        }
        res.json(users);
    }).catch(err => {
        res.send(err)
    });
}