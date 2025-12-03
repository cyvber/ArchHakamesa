const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage before Cloudinary

// Routes
router.post('/', upload.array('images', 20), ProjectController.createProject); // max 5 images
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
