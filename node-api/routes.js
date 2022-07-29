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




module.exports = routes