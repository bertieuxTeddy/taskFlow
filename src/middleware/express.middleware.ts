import express, {Express} from "express";


export function addMiddleware(app: Express) {
    // add here every middleware you need
    app.use(express.json());
}