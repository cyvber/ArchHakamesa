const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Routes
router.post('/', upload.array('images', 20), ProjectController.createProject);
router.get('/', ProjectController.getAllProjects);
router.get('/latest', ProjectController.getLatestProjects);
router.get('/:id', ProjectController.getProjectById);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
