import express, {Request, Response} from 'express';
import userRouter from './routes/users'
import authMiddleware from './middlewares/auth';
import 'dotenv/config' // only with this process.env is getting values from .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()) // necessary middleware to parse JSON requests bodies
app.use(authMiddleware)
app.use('/users', userRouter)


app.get('/health', (req: Request, res: Response) => {
  res.send('Ok');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});