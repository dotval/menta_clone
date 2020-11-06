const db = require('../models/index.js');
const user = db.user;
const skill = db.skill;
const career = db.career;
const nda = db.nda_contract;
const score = db.score;
const menter = db.menter;
const plan = db.plan;
const follow = db.follow;
const view_menter_count = db.view_menter_count;
const review = db.review;

const relational_skill = {
    model: skill,
    required: false,
    attributes: [
        'tag_id',
        'level',
        'experience_years'
    ]
};
const relational_career ={ 
    model: career, 
    required: false ,
    attributes: ['description','start_year','start_month','end_year','end_month']
};
const relational_menter_review_user = {
    model: menter, 
    required: false, 
    include: [{ 
        model: review, 
        required: false, 
        limit: 5,
        attributes: ['id','body','updated_at'], 
        include: [{ 
            model: user, required: false,attributes: ['name','icon'] 
        }] 
    }] 
};
const relational_menter_plan ={ 
    model: menter, 
    required: false, 
    include: [{ 
        model: plan, 
        required: false, 
        limit: 1 ,
        attributes:['id','title']
    }] 
};
const relational_menter_view_count ={ 
    model: menter, 
    required: false, 
    include: [{ 
        model: view_menter_count, 
        required: false 
    }] 
};


exports.show = (req, res) => {
    const id = req.params.id;
    user.findOne({
        where: { id: id },
        include: [
            relational_skill,
            relational_career,
            relational_menter_review_user,
            relational_menter_plan,
            relational_menter_view_count,
            { model: nda, required: false }, 
            { model: score, required: false,attributes: ['value'] }, 
            { model: follow, required: false}, 
        ]
    }).then((user) => {
        if (user.nda_contract) {
            user.nda_contract = true
        }
        const data = {
            name: user.name,
            icon: user.icon,
            twitter_id: user.twitter_id,
            profile: user.profile,
            skills: user.skills,
            careers: user.careers,
            nda_contract: user.nda_contract,
            identification: user.identification,
            score: user.score,
            recent_login: user.updated_at,
            plan: user.menter.plans,
            follower: user.follows.length,
            view_menter_counts: user.menter.view_menter_counts.length,
            reviews: user.menter.reviews,
        }
        res.json(data);
    }).catch(err => {
        res.send(err)
    });
}