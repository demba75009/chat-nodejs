var express = require('express')

var app = express() // the main app


  
  app.get('', function (req, res) {
    res.render('chambre.ejs');

  })

  
  
  app.post('/profile', function (req, res, next) {
    

    
  })

  app.delete('/', function (req, res) {
    res.send('DELETE request to homepage')
  })

app.listen(8080);