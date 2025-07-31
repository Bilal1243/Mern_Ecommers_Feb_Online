import express from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.route('/').post(registerUser)

userRoute.route('/auth').post(loginUser)

userRoute.route('/logout').get(logoutUser)


export default userRoute