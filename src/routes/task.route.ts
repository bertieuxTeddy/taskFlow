

export const TaskRoutes = [
    {
        method: "GET",
        path: "/tasks/:page", // get all task with pagination system, for example page=1
    },
    {
        method: "GET",          // get task by id
        path: "/tasks/:taskId"
    },
    {
        method: "POST",     // create new task
        path: "/createTask"
    },
    {
        method: "PUT",      // update task
        path: "/updateTask"
    },
    {
        method: "DELETE",       // delete task
        path: "/deleteTask/:taskId"
    }
];