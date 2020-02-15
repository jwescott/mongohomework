var express = require("express")

var mongoose = require("mongoose")

var app = express()

var handlebars = require("express-handlebars")

app.use(express.static("public"))

app.engine("handlebars", handlebars({defaultLayout:"main"}))
app.set("view engine", "handlebars")

app.use(express.urlencoded({extended:true}))

app.use(express.json())

var PORT = process.env.PORT || 8080

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

var apiRoutes = require("./routes/api-routes")
apiRoutes(app)

var HTMLroutes = require("./routes/html-routes")
HTMLroutes(app)

app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT);
    
})


