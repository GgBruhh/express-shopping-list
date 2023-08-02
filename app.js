const express = require('express');
const items = require('./fakeDb');
const Item = require('./item')

const app = express();

app.use(express.json());

//Routes
app.get('/items', (req, res) => {
    return res.json({items})
})

app.post('/items', (req, res) => {
    let newItem = new Item(req.body.name, req.body.price);
    items.push(newItem);
    return res.json({item: newItem});
})

app.get('/items/:name', (req, res) => {
    let search = req.params.name;
    let foundItem = Item.find(search)
    return res.json({item: foundItem})
})

app.patch('/items/:name', (req, res) => {
    let updatedItem = Item.update(req.params.name, req.body)
    console.log(req.body);
    return res.json({updated: updatedItem});
})

//Starting the server
app.listen(3000, function(){
    console.log('Starting server on port 3000')
})