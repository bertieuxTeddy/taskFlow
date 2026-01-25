import express, {Express} from 'express';
import {taskRoutes} from "../routes/task.route";
import {userRoutes} from "../routes/user.route";
import {RouterSkeleton} from "../routes/router_utils.route";

export type servConf = {
    app: Express,
    router : Array<
        {
            routePrefix: string,        // ex. if routerPrefix = "user" so the path for createUser function in user.controller module is like "user/createUser"
            routes: Array<RouterSkeleton>     // an array of Route list like taskRoutes or userRoutes
        }
    >,
    port: number;
    key?: string;               // key and crt if necessary in https server
    crt?: string;
}

export const serverConf: servConf = {
    app: express(),
    router: [
        {routePrefix: "user", routes: userRoutes},
        {routePrefix: "task", routes: taskRoutes}
    ],   // list of Route in the "routes/" directory

    port: 8080
}