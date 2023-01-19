const express = require('express');
const path = require('path'); //used to deal with file paths


const app = express(); //creates an instance of the Express.js

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is runnong on PORT: ${PORT}`));