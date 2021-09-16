const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// GET
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM categories',
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
            'INSERT INTO categories (name) VALUES (?)',
            [req.body.name],
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
            'SELECT * FROM categories WHERE id = ?;',
            [req.params.id],
            (error, result, fields) => {
                conn.release();
                if (error) { res.status(500).send({ error: error, response: null }); }
                res.status(200).send(result);
            }
        );
    });
});

// PATCH
router.patch('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE categories SET name = ? WHERE id = ?',
            [req.body.name, req.params.id],
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
            'DELETE FROM categories WHERE id = ?',
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