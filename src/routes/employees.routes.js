import { Router } from 'express'
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/emplooyes', getEmployees)
router.get('/emplooyes/:id', getEmployee)


router.post('/emplooyes', createEmployees)

router.patch('/emplooyes/:id', updateEmployees)

router.delete('/emplooyes/:id', deleteEmployees)


export default router