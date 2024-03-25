import {Router } from 'express'
import { body } from 'express-validator'
import { ProjectController } from '../controllers/ProjectControlller'
import { handleInputErrors } from '../middleware/validation'


const router = Router()

router.post('/',
    body('projectName')
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El nombre del Cliente es obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripcion es  obligatoria'),
    handleInputErrors,
    ProjectController.createProject
)
router.get('/', ProjectController.getAllProjects) // Get all projects

export default router