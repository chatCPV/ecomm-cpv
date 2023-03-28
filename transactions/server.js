const app = require('./src/app.js');
require('dotenv/config');

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
