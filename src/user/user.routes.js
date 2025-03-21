import { Router } from "express";
import { getUserById, getUsers, deleteUser, updatePassword, updateUser, actualizarFotoPerfil } from "./user.controller.js";
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator, actualizarFotoPerfilValidator, getUsersValidator } from "../middlewares/user-validators.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = Router();


router.get("/findUser/:uid", getUserByIdValidator, getUserById);


router.get("/", getUsersValidator, getUsers);


router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser);


router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword);


router.put("/updateUser/:uid", updateUserValidator, updateUser);


router.patch("/actualizarFotoPerfil/:uid", uploadProfilePicture.single("profilePicture"), actualizarFotoPerfilValidator, actualizarFotoPerfil);

export default router;