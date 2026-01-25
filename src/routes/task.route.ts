import {RouterSkeleton} from "./router_utils.route";


export const taskRoutes: Array<RouterSkeleton> = [
    {
        method: "GET",
        path: "/tasks/:page", // get all task with pagination system, for example page=1
        handler: getAllTasks
    },
    {
        method: "GET",          // get task by id
        path: "/tasks/:taskId",
        handler: getTask
    },
    {
        method: "POST",     // create new task
        path: "/createTask",
        handler: createTask
    },
    {
        method: "PUT",      // update task
        path: "/updateTask",
        handler: updateTask
    },
    {
        method: "DELETE",       // delete task
        path: "/deleteTask/:taskId",
        handler: deleteTask
    }
];