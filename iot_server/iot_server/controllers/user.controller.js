const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');
const Data = mongoose.model('Data');

//회원가입
module.exports.register = (req, res, next) => { 
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        console.log("save success");
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000) //중복 키 오류
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
//로그인
module.exports.Login = (req,res,next) =>{
    User.find((err,user)=>{
        res.json({user:user});
    });
}
//gps 데이터 저장
module.exports.savegps = (req, res, next) => {
    var data = new Data();
     data.x = req.body.x;
    data.y = req.body.y;

    data.save((err, doc) => {
        console.log("gps data save success");
        if (!err)
            res.send(doc);
        else {
               return next(err);
        }

    })};
//앱에서 데이터 요청
module.exports.getdata = (req,res,next) =>{

Data.find((err,docs) => {
   if(!err) {res.send(docs); }
   else { console.log("error")}
});
};

