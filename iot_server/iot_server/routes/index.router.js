const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // post 해석 편하게 해줌
router.use(bodyParser.urlencoded({ extended: false }));

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register); //회원가입
router.get('/authenticate', ctrlUser.Login); //로그인
router.post('/savegps',ctrlUser.savegps); // 데이터 저장
router.get('/getdata',ctrlUser.getdata); // 앱에서 요청하는 경로

module.exports = router;



