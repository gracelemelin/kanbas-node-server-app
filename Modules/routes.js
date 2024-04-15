import * as dao from "./dao.js";

function ModuleRoutes(app) {

  const createModule = async (req, res) => {
    const {cid} = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    }
    const module = await dao.createModule(newModule);
    res.json(module);
  };
  
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.id.mid);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };

  const findModuleByCid = async (req, res) => { 
    const { cid } = req.params;
    const module = await dao.findModuleByCid(cid);
    res.json(module);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
  app.get("/api/modules", findAllModules);
  app.get("/api/courses/:cid/modules", findModuleByCid);
  
}
export default ModuleRoutes;