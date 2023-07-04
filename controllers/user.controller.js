const fs = require("fs");
const url = require('url');
let customer = require('../data.json');
// console.log(customer);

// get all json data from data.json file
module.exports.allUser = (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            res.write('failed to read data');
            res.end()
        } else {
            res.write(data);
            res.end();
        }
    })
}

module.exports.postData = (req, res) => {
    // const newData = {
    //     "Id": 11,
    //     "gender": "Male",
    //     "name": "hablu",
    //     "contact": "1234567899",
    //     "address": "123 Main St, City",
    //     "photoUrl": "https://i.ibb.co/j6QQqZZ/Male23.jpg"
    // }
    customer.push(req.body);
    res.send(customer);
}

module.exports.updateData = (req, res) => {
    const { id } = req.params;
    // const filter = { _id: id }
    let newData = customer.find(user => user.id === Number(id));
    newData.id = id;
    newData.contact = '0000';
    res.send(newData);
}

module.exports.multipleUpdate = (req, res) => {
    const filter = req.body;
    const newData = filter.map(b => b.id)
    const update = customer.forEach(u => u.id === newData.map(b => b));
    console.log(update);
    res.send(update)
}

module.exports.deleteData = (req, res) => {
    const { id } = req.params;
    // const filter = { _id: id }
    customer = customer.filter(user => user.id !== Number(id));
    res.send(customer);
}