var express = require('express');
var router = express.Router();

var storesModel = require('../../models/storesModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {

    var stores = await storesModel.getStores();

    res.render('admin/sucursales', {
        layout: 'admin/layout',
        user: req.session.user,
        stores
    });
});

router.get('/agregar', async function (req, res, next) {
    res.render('admin/agregar', {
        layout: 'admin/layout',
    });
});

router.post('/agregar', async (req, res, next) => {
    const { name, address, phone } = req.body
    try {
        if (name && address && phone) {
            await storesModel.insertStores(req.body);
            res.redirect('/admin/sucursales');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: "Todos los campos son requeridos"
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: "No se cargo la sucursal"
        })
    }
})

module.exports = router;