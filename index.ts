import express, {Express, NextFunction, Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import {Error} from './types';
import * as dotenv from 'dotenv';
import itemsRoutes from "./routes/itemsRoutes";

dotenv.config();
const port: Number = Number(process.env.PORT) || 3000;
const app: Express = express();
const swaggerDocument: Object = YAML.load('./swagger.yaml');

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    return res.status(err.statusCode || 500).send(err.message || 'Internal Server Error');
});

// Routes
app.use('/items', itemsRoutes);

// Populate db
const newItem = await prisma.item.create({
    data: {
        name: 'New Item',
        image_url: 'https://example.com/image.jpg',
        description: 'This is a new item',
    },
});

console.log('Created item:', newItem);

// Start the server
app.listen(port, () => console.log(`Running at http://localhost:${port} and docs at http://localhost:${port}/docs`));
