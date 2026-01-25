import {dataSource} from "../data-source";
import User from "../entity/user.model";
import {Repository} from "typeorm";

export class UserService {

    constructor(private userRepository: Repository<User>) {
    }

    async getUser(id: number) {

    }

    async createUser(request: Request, response: Response) {

    }

    async updateUser(request: Request, response: Response) {

    }

    async deleteUserById(id: number) {

    }

}