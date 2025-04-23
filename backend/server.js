const express = require('express');

const app = express();
const PORT = 8000;

app.use(express)


app.listen(PORT,() => {
    console.log(`server is listen on :: http://localhost:${PORT}`);
})


