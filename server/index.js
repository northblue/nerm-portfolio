const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    console.log('hit server /api')
    res.json({ message: 'Hello from server!' })
})

app.listen(5000, () => console.log('Server started on port 5000'))