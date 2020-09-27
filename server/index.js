const express = require('express');
// const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();

// middleware

// You need not to use body-parser
// Express already has a built in parsing function
app.use(express.json());
app.use(cors());

const tasks = require('./routes/api/tasks')
app.use('/api/tasks', tasks);


// handle production 

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(__dirname + '/public/'));

    // Try not to skip syntax
    // Don't trade less lines for readability
    app.get(/.*/,(
        (req,res)=> res.sendFile(__dirname + '/public/index.html')
        ));
}

const port = process.env.PORT || "5000;";


app.listen(port, () => console.log(`server started on port ${port}`));
app.set("port", PORT);