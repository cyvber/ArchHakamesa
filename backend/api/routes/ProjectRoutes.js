const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const auth = require('../middleware/auth');
// Routes
router.post('/', auth, upload.array('images', 20), ProjectController.createProject);
router.get('/', ProjectController.getAllProjects);
router.get('/latest', ProjectController.getLatestProjects);
router.get('/:id', ProjectController.getProjectById);
router.delete('/:id', auth, ProjectController.deleteProject);

module.exports = router;
