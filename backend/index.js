import dotenv from 'dotenv';
import { ConnectDB } from './db/dbConnect';
import { app } from './app';


// ENV CONFIG
dotenv.config({
    path: './env'
})

// DATABASE CONNECTION
ConnectDB().then(() => {
    app.listen(process.env.PORT || 8001, () => {
        console.log(`Server is running at Port : ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
})