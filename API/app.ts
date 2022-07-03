//nodemon --watch './**/*.ts' --exec ts-node app.ts <- TODO: Doesn't work in npm script for some reason, figure that out.
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Express listening at http://localhost:${port}`);
});