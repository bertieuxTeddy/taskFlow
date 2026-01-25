import {Repository} from "typeorm";
import {Task} from "../entity/task.model";

export class TaskService {
    constructor(private taskRepository: Repository<Task>) {
    }

    async getAllTasks(page: number, limit: number) {

    }

    async getTaskById(id: number) {

    }

    async createTask(request: Request, response: Response) {

    }

    async updateTask(request: Request, response: Response) {

    }

    async deleteTask(request: Request, response: Response) {

    }
}