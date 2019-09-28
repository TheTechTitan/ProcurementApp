const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    //res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Headers','X-Requested-With,contenttype');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})
app.use('/', routes);

const PORT=5000;
app.listen(PORT, err => {
    if (err) {
        console.log('Error: ' + err);
        process.exit(-1);
    }
    console.log(`Server running on port ${PORT}`);
});