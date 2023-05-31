var express = require('express');
var router = express.Router();

var usuarioModel = require('./../../models/usersModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/login',{
        layout: 'admin/layout'
    });
});

router.get("/logout", function(req,res,nexts){
    req.session.destroy();
    res.render("admin/login",{
        layout:'admin/layout'
    });
  });



router.post('/', async(req,res,next)=>{
    try{
        var user = req.body.user;
        var password = req.body.password;

        var data = await usuarioModel.getUserByUsernameAndPassword(user,password);

        if(data !=undefined){
            req.session.id_user = data.id;
            req.session.user = data.user;
            res.redirect('/admin/sucursales');
        }else{
            res.render('admin/login',{
                layout:'admin/layout',
                error:true
            });
        }

    }catch(error){
        console.log(error);
    }
});


module.exports = router;