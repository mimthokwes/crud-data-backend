import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});