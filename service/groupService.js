const groupDAO = require('../dao/groupDAO');

class GroupService 
{
  getGroup(idGroup)
  {
    const {id} = idGroup;
    return groupDAO.getGroup(id);
  }
  createGroup(GroupDto)
  {
    const {groupName} = GroupDto;
    return groupDAO.createGroup(groupName);
  }

  deleteGroup(idGroup)
  {
    const id = idGroup;
    return groupDAO.deleteGroup(id);
  }

  updateGroup(id,GroupDto)
  {
    const {groupName} = GroupDto;
    return groupDAO.updateGroup(id, groupName);
  }
}

module.exports = new GroupService();
