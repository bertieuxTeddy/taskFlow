

export const userRoutes = [
    {
        method: "GET",
        path: "/users/:userId", // get User by id
        handler: getUser
    },
    {
        method: "POST",
        path: "/create",    // create new User
        handler: createUser
    },
    {
        method: "PUT",      // update User information like password or name
        path: "/updateUser",
        handler: updateUser
    },
    {
        method: "DELETE",   // delete User
        path: "/deleteUser/:userId",
        handler: deleteUser
    }
];