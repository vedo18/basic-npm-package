const express = require('express');

const app = express();
app.use(express.json());

app.get('/health-check', (req, res) => {
    res.send('Server running ');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
