var express = require('express');
var router = express.Router();
const User = require('../model/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert' , (req , res ,next)=>{
  const user = new User({
    userName :req.body.username,
    userMail :req.body.usermail,
  });
  user.save(result , error )=>{
    
  }
})
module.exports = router;
