const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
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
          db.query("INSERT INTO user (name_user, email, password_user) VALUE (?,?,?)", [nameUser, email, password], (error, response) => {
              if (err) {
                res.send(err)
              }
  
              res.send({ 
                  msg: "Usuário cadastrado com sucesso" 
                })
            }
          )
        
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
  
    db.query("SELECT * FROM user WHERE email = ? AND password_user = ?", [email, password], (err, result) => {
      if (err) {
        res.send(err)
      }
      if (result.length > 0) {
          res.send({
               
            nameUser: result[0].name_user,
            email: email
              
          })
      } else {
        res.send({ msg: 
          "E-mail ou Senha incorreta" 
        })
      }
    })
  })
  

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001")
})