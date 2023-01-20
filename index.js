const express = require('express');
const path = require('path'); //used to deal with file paths
const members = require('./Members');
const uuid = require('uuid');

const app = express(); //creates an instance of the Express.js

//Create middleware:
/*
1. Create a function that will perform the middleware logic.
This function should take in three arguments:
req (request), res (response), and next (a function to call the next middleware in the stack).
2. In this function, you can perform any logic you want, such as modifying the request, validating input, or adding data to the response.
3. Once the middleware logic is complete, call the next() function to pass control to the next middleware in the stack.
4. Init/Register the middleware function with the Express application by calling the app.use() method and passing in the middleware function.
*/
const logger = (req, res, next) => { //1.
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`); //2.
    next(); //3.
};
//app.use(logger); //4.

//Get an API of members
app.get('/api/members', (req, res) => res.json(members)); //http://localhost:5000/api/members

//Get single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){ //if the member found
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        //If the member with requested id not found, we change status to 400
        res.status(400).json({ msg: `404: Member with the id of ${req.params.id} not found` });
    }
});

//Create member
app.post('/api/members', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: 'Please fill a name and email'});
    }

    members.push(newMember);
    res.json(members);
})

//Set a static folder: http://localhost:5000
app.use(express.static(path.join(__dirname, 'Portfolio'))); //we use use() method when we want to include middleware

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is runnong on PORT: ${PORT}`));