import express from 'express';
import cors from "cors";
import { routes } from './routes/index.ts';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port);