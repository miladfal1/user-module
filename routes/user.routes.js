const express = require("express")
const router = express.Router()
const userController =require("../controllers/user.controllers")
const {verifyToken} = require("../../middlewares/auth.middleware.js")

router.route("/user").get(verifyToken , userController.getProfile)
router.route("/user/:id").get(verifyToken , userController.updateUserByID)
router.route("/users/softdelete/:id").delete(verifyToken ,userController.softDeleteUser)


//admin routers
router.route("/users").get(userController.getAllUsers)
router.route("/users/:id").get(userController.getUserById)
router.route("/create-user").post(userController.createUser)
router.route("/users/delete/:id").delete(userController.deleteUserById)
router.route("/users/active/:id").post(userController.deActiveUser)
router.route("/users/deactive/:id").post(userController.activeUser)
router.route("/users/change-role/:id").post(userController.changeRoleUser)

module.exports = router