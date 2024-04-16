import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    return model.create(module);
  }  
  export const findAllModules = () => model.find();
  export const findModuleById = (module) => model.findById(module);
  export const findModuleByCid = (courseId) => model.find({course: courseId});
  export const updateModule = (moduleId, module) =>  model.updateOne({ id: moduleId }, { $set: module });
  export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });