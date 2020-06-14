const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

router.post('/', (req, res) => {
    console.log(req.body);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")`

    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            console.log('CREATED!');
            res.sendStatus(201);
        }).catch((err) => {
            console.log('error in POST', err);
            res.sendStatus(500);
        })
});

module.exports = router;
