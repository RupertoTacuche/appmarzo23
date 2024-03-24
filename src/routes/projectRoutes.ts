import {Router } from 'express'
import { ProjectController } from '../controllers/ProjectControlller'


const router = Router()

router.get('/', ProjectController.getAllProjects) // Get all projects

export default router