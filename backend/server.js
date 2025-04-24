import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ws from 'ws';
import connectDB from './config/databaseConfig';
import serverConfig from './config/serverConfig';

dotenv.config({path: `.env.${serverConfig.env}`});

const app = express();

await connectDB();

app.use(cors({origin: serverConfig.corsOrigin}));
app.use(express.json());

const PORT = serverConfig.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

