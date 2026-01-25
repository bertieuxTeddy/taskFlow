import {Response, Request} from "express";

export type RouterSkeleton = {
    method: string;
    path: string;
    handler: (request: Request, response: Response) => Promise<any>;       // handler represent the controller function

}