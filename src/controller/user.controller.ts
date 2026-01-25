import {UserService} from "../service/user.service";
import {dataSource} from "../data-source";
import User from "../entity/user.model";
import {Request, Response} from "express";

const userService = new UserService(dataSource.getRepository(User));

export async function getUser(request: Request, response: Response) {

}


export async function createUser(request: Request, response: Response) {

}


export async function updateUser(request: Request, response: Response) {

}


export async function deleteUser(request: Request, response: Response) {

}