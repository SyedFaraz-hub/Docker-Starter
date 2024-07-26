const express = require('express');

const app = express(); 



// Make a GET api 

app.get('/', (req, res) => {
    res.send('Hello World');
}
)

app.get('/check', (req, res) => {
    res.send('Checking');
}
)


app.listen(5000, () => {
    console.log('Server is running on port 5000');
}
)
