const db = require('../models/index.js');
const nda_contract = require('../models/nda_contract.js');
const user = require('../models/user.js');
const users = db.user;
const skill = db.skill;
const career = db.career;
const nda = db.nda_contract;
const score = db.score;
const menter = db.menter;
const plan = db.plan;
const follow = db.follow;
const view_menter_count = db.view_menter_count;

exports.index = (req, res) => {
    const id = req.params.id;
    users.findOne({ where: { id: id }, include: [{ model: skill, required: false }, { model: career, required: false }, { model: nda, required: false }, { model: score, required: false }, { model: follow, required: false },{ model: menter, required: false, include: [{ model: plan, required: false, limit: 1 }] }, { model: menter, required: false, include: [{ model:view_menter_count,required: false}]}] }).then((users) => {
        // { model: menter, required: false, include: [{ model: plan, required: false, limit: 1 }] }
        // { model: menter, required: false, include: [{ model:view_menter_count,required: false}]}
        // users.findOne({ where: { id: id }, include: [{ model: menter, required: false,include:[{model:view_menter_count,required: false}]}] }).then((users) => {

        if (users.nda_contract) {
            users.nda_contract = true
        }
        data = {
            name: users.name,
            icon: users.icon,
            twitter_id: users.twitter_id,
            profile: users.profile,
            skills: users.skills,
            careers: users.careers,
            nda_contract: users.nda_contract,
            score: users.score,
            recent_login: users.updated_at,
            plan: users.menter.plans,
            follower: users.follows.length,
            view_menter_counts: users.menter.view_menter_counts.length
        }
        res.json(data);
    }).catch(err => {
        res.send(err)
    });
}