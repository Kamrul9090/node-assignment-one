const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();
const userRoute = require('./routers/v1/user.router');


app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRoute);



app.get('/', (req, res) => {
    res.send('this is server')
})


app.all('*', (req, res) => {
    res.send('no route found.')
})

app.listen(port, () => {
    console.log(`server is open on port ${port}`);
})
