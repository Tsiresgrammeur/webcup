const managerDAO = require('../dao/managerDAO');

class ManagerService 
{
  getManager(idManager)
  {
    const {numMat} = idManager;
    return managerDAO.getManager(numMat);
  }
  createManager(ManagerDto)
  {
    const { numMat,email,firstName,lastName,status, password } = ManagerDto;
    return managerDAO.createManager(numMat, email, firstName, lastName,status, password);
  }

  deleteManager(idManager)
  {
    const numMat = idManager;
    return managerDAO.deleteManager(numMat);
  }

  updateManager(ManagerDto)
  {
    const {numMat,email,firstName,lastName,status, password} = ManagerDto;
    return managerDAO.updateManager(numMat,email,firstName,lastName,password,status);
  }
}

module.exports = new ManagerService();
