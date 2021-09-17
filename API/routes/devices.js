const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// GET
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM devices',
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// POST
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO devices (category, color, partNumber) VALUES (?, ?, ?)',

            [req.body.category, req.body.color, req.body.partNumber],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(201).send('ok');
            }
        );
    });
});

// GET BY ID
router.get('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM devices WHERE id = ?;',
            [req.params.id],
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// PUT
router.put('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE devices SET category = ?, color = ?, partNumber = ? WHERE id = ?',
            [req.body.category, req.body.color, req.body.partNumber, req.body.id],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});

// DELETE
router.delete('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'DELETE FROM devices WHERE id = ?',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(202).send('ok');
            }
        );
    });
});


module.exports = router;