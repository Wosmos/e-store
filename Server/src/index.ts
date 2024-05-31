import dotenv from 'dotenv';
import connectDB from './db/index';
import { app } from './app';

dotenv.config({
    path: './env',
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `Server is 🏃🏃🏃 on port: ${process.env.PORT || 3000}`
            );
        });
    })
    .catch((err) => console.log(`MongoDB connection failed: ${err}`));



app.get('/', (req, res) => {
    res.send('Hello, you are on home page!');
});
