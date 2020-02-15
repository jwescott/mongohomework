function HTMLroutes(app) {
    app.get("/", function(req, res) {
        res.render("index",{})
    })
}

module.exports = HTMLroutes