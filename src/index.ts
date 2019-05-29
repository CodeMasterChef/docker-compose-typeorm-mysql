import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { createExpressServer, Action } from 'routing-controllers';
import { Request, Response } from 'express';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = Math.random() * 100;
    await connection.manager.save(user);
    
    const users = await connection.manager.find(User);

    const app = createExpressServer({})

    app.get('/', (req: Request, res: Response) => {
        res.send(users);
    });

    const server = app.listen(3000, '0.0.0.0', () => {
        console.log('Application is running at: ' + server.address().address + ':' + server.address().port);
    });

}).catch(error => console.log(error));
