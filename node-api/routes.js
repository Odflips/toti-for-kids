const express = require('express')
const bcrypt = require ("bcrypt");
const saltRounds = 10;
const routes = express.Router()

routes.get('/detalhes_course', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM detalhes_courses', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

routes.post('/detalhes_course', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO detalhes_courses set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('curso added')

        })
    })
})


routes.delete('/detalhes_course/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM detalhes_courses WHERE idCourse= ?', [req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('curso delete')

        })
    })
})

routes.put('/detalhes_course/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE detalhes_courses set ? WHERE idCourse= ?', [req.body,req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('curso update')

        })
    })
})

//estudantes

routes.get('/estudantes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM estudantes', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

routes.post('/estudantes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO estudantes set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('estudantes added')

        })
    })
})


routes.delete('/estudantes/:idEstudantes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM estudantes WHERE idEstudantes=?', [req.params.idEstudantes], (err, rows) => {
            if (err) return res.send(err)

            res.send('estudantes delete')

        })
    })
})

routes.put('/estudantes/:idEstudantes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE estudantes set ? WHERE idEstudantes= ?', [req.body, req.params.idEstudantes], (err, rows) => {
            if (err) return res.send(err)

            res.send('estudantes update')

        })
    })
})


//profesores

routes.get('/professores', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM professores', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

routes.post('/professores', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO professores set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('professor added')

        })
    })
})


routes.delete('/professores/:idProfessor', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM professores WHERE idProfessor= ?', [req.params.idProfessor], (err, rows) => {
            if (err) return res.send(err)

            res.send('professor delete')

        })
    })
})

routes.put('/professores/:idProfessor', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE professores set ? WHERE idProfessor= ?', [req.body, req.params.idProfessor], (err, rows) => {
            if (err) return res.send(err)

            res.send('professores update')

        })
    })
})

//inscripcao




///VALIDACAO------

 
module.exports = routes


