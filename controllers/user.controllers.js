const UserService = require('../src/services/user.service');
const { catchAsync } = require('../../../utils/helpers');

const userService = new UserService();

exports.createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body)

  if (req.originalUrl.startsWith('/api')) {
    res.status(200).json({
      success: true,
      data: { user }
    })
  }

  res.redirect("/admin/dashboard")
})

exports.getProfile = catchAsync(async (req, res) => {

  const user = await userService.getUserById(req.user.id);

  res.status(200).json({
    success: true,
    data: { user }
  });

});

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers()

  res.status(200).json({
    success: true,
    data: { users }
  })
})

exports.getUserById = catchAsync(async (req, res) => {

  const user = await userService.getUserById(req.user.id);

  res.status(200).json({
    success: true,
    data: { user }
  });

})

exports.updateUserByID = catchAsync(async (req, res) => {
  const user = await userService.updateUserByID(id, data)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, user });
  }

  res.redirect("/profile")
})

exports.deleteUserById = catchAsync(async (req, res) => {
  const deleteUser = await userService.deleteUser(id)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, deleteUser });
  }

  res.redirect("/admin/dashboard")
})

exports.softDeleteUser = catchAsync(async (req, res) => {
  const user = await userService.softDeleteUser(id)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, user });
  }

  res.redirect("/")
})

exports.activeUser = catchAsync(async (req, res) => {
  const user = await userService.activeUser(id)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, user });
  }

  res.redirect("/profile")
})

exports.deActiveUser = catchAsync(async (req, res) => {
  const user = await userService.deActiveUser(id)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, user });
  }

  res.redirect("/admin/dashboard")
})

exports.changeRoleUser = catchAsync(async (req, res) => {
  const user = await userService.changeRoleUser(user, role)

  if (req.originalUrl.startsWith('/api')) {
    return res.status(200).json({ success: true, user });
  }

  res.redirect("/admin/dashboard")
})