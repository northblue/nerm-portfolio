const express = require('express')
var cors = require('cors');
const app = express()
app.use(cors());

app.get('/api', (req, res) => {
    console.log('hit server /api')
    res.json({ message: `Hello from server! (Server Url: ${req.get('host')})`})
})

app.listen(5000, () => console.log('Server started on port 5000'))