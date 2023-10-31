const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;

const static_path = path.join(__dirname, "../public")
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")





app.set('view engine', 'hbs');
app.set('views', templates_path)
hbs.registerPartials(partials_path)
app.use(express.static(static_path))

app.get('/', (req, res) => {
     res.render("index")
})

app.get('/about', (req, res) => {
     res.render("about")
})

app.get('/weather', (req, res) => {
     res.render("weather")
})

app.get('*', (req, res) => {
     res.render("404error", {
          errorMsg: "Opps! page not found"
     })
})


app.listen(port, () => {
     console.log(`listning to the port ${port}`)
})