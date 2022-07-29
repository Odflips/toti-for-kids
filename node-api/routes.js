const express = require('express')
const routes = express.Router()

//rutas de la tabla  detalles de cursos
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM detalhes_courses', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO detalhes_courses set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('courses added')

        })
    })
})


routes.delete('/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM detalhes_courses WHERE idCourse= ?', [req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('courses delete')

        })
    })
})

routes.put('/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE detalhes_courses set ? WHERE idCourse= ?', [req.body, req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('courses update')

        })
    })
})

//Routes tabla estudantes

routes.get('/', (req, res) => {
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

        conn.query('DELETE FROM estudantes WHERE idEstudantes= ?', [req.params.idEstudantes], (err, rows) => {
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





module.exports = routes