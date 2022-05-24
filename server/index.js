const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"user_schama",
})

app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
    const nameUser = req.body.nameUser
    const email = req.body.email
    const password = req.body.password
  
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.send(err)
      }

      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query("INSERT INTO user (name_user, email, password_user) VALUE (?,?,?)", [nameUser, email, hash], (error, response) => {
              if (err) {
                res.send(err)
              }
  
              res.send({ 
                  msg: "Usuário cadastrado com sucesso" 
                })
            }
          )
        })
      } else {
        res.send({ 
            msg: "Email já cadastrado" 
        })
      }
    })
  })

app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
  
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.send(err)
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (error) {
            res.send(error)
          }
          if (response) {
            res.send({ 
                msg: "Usuário logado" 
            })
          } else {
            res.send({ 
                msg: "Senha incorreta" 
            })
          }
        })
      } else {
        res.send({ msg: 
            "Usuário não registrado!" 
        })
      }
    })
  })
  

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001")
})