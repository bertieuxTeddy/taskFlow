import {Server} from "./server.serv";
import {servConf} from "../conf/server.conf";

export class HttpsServer implements Server{

    constructor(private serverConf: servConf) {
    }

    start() {
    }
}