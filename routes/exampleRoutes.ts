import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {User} from '@prisma/client';
import {handleErrors} from './handleErrors';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', handleErrors(async (req: Request, res: Response) => {
    const users: User[] = await prisma.user.findMany();
    res.json(users);
}));

export default router;