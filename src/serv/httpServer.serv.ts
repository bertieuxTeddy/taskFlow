import {Server} from "./server.serv";
import {servConf, serverConf} from "../conf/server.conf";
import {Router, Request, Response} from "express";
import {addMiddleware} from "../middleware/express.middleware";

export class HttpServer implements Server{

    constructor(private serverConf: servConf) {
    }

    start() {
        // add middleware
        addMiddleware(this.serverConf.app);

        // add every Route in the express sever

        this.serverConf.router.forEach(value => {
            const router = Router();
            value.routes.forEach(route => {
                router[route.method](route.path, (request: Request, response: Response, next: Function) =>{
                    route.handler(request, response)
                        .then( ()=>next )
                        .catch( err => next(err) );
                });
            })

            this.serverConf.app.use(value.routePrefix, router); // add Route in our Express instance

        })

        this.serverConf.app.listen(serverConf.port, () => {
            console.log(`Server listening on port ${serverConf.port}`);
        });
    }

}