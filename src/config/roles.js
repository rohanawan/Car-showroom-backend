const allRoles = {
  user: ['getCategories', 'getCars', 'getUsers', 'manageUsers', 'getCars', 'manageCars', 'manageCategories'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
