const exp = require("constants");
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use('/', express.static('public'));

/* const budget = {
myBudget: [
    {
        title: 'Eat out',
        budget: 50
    },
    {
        title: 'Rent',
        budget:200
    },
    {
        title: 'Grocery',
        budget: 90
    }
    ]

};
*/
const budgetData = JSON.parse(fs.readFileSync('budget-data.json', 'utf8'));



 

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.listen(port, () =>
{
    console.log(`Example app listening at http://localhost:${port}`);
});