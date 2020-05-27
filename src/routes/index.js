import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    console.log(testEnvironmentVariable);
    res.status(200).json({ message: 'hey' })
    }
);

export default indexRouter;