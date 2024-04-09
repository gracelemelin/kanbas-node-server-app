import * as dao from "./dao.js";
let currentUser = null;
export default function UserRoutes(app) {
  const createUser = async (req, res) => { };

  const deleteUser = async (req, res) => { };

  // const findAllUsers = async (req, res) => { 
  //   const {role} = req.query;
  //   if (role) {
  //     const users = await dao.findUsersByRole(role);
  //     res.json(users);
  //     return;
  //   }
  //   const users = await dao.findAllUsers();
  //   res.json(users);
  //   return;
    
  //  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };


  //  const profile = async (req, res) => {
  //   const currentUser = req.session["currentUser"];
  //   if (currentUser) {
  //     res.json(req.session["currentUser"]);
  //   } else {
  //     res.sendStatus(401);
  //   }
  // };

  const profile = async (req, res) => {
    res.json(currentUser);
  };


  const findUserById = async (req, res) => { };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    currentUser = await dao.findUserById(userId);
    res.json(status);
   };

  const signup = async (req, res) => { };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
   };

  const signout = (req, res) => { };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
