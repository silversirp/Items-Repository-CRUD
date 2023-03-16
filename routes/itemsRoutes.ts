import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {User} from '@prisma/client';
import {handleErrors} from './handleErrors';
import {Item} from "@cucumber/gherkin/src/IToken";

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', handleErrors(async (req: Request, res: Response) => {
    const users: User[] = await prisma.user.findMany();
    res.json(users);
}));

router.get('/items', handleErrors(async (req: Request, res: Response) => {
    const items: Item[] = await prisma.item.findMany();
    res.json(items);
}));


export default router;