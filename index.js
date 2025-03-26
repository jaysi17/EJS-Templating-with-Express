let express = require('express');
let app = express(); //variable to manage express

app.set('view engine', 'ejs'); // express will know we are using EJS as VIEW ENGINE

//create route
//home page
app.get('/', (req, res) => {
    res.render('pages/home'); //RENDER ANY PAGES
})
//about page
app.get('/about', (req, res) => {
    res.render('pages/about'); //RENDER ANY PAGES
})

app.get('/contact', (req, res) => {
    res.render('pages/contacts')
})

const server = 4000;

app.listen(server);
console.log(`Server listening to localhost:${server}`);