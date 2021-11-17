
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {

    req.getConnection((err, con) => {
        if (err) {
            return res.send(err)
        }
        con.query('SELECT * FROM usuario', (err, rows) => {
            if (err){
                 return res.send(err)
            }
            res.json(rows);
        });
    });
});

module.exports = routes;

