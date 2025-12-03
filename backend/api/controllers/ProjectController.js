const Project = require('../models/Project');
const cloudinary = require('../../config/cloudinary');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      video,
      land_size,
      house_size,
      build_duration,
      floors,
    } = req.body;

    let images = [];

    // If files are uploaded, upload them to Cloudinary
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: 'projects',
        });
        images.push(result.secure_url);
      }
    }

    const project = new Project({
      title,
      description,
      date,
      images,
      video,
      land_size,
      house_size,
      build_duration,
      floors,
    });

    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    // Delete images from Cloudinary
    if (project.images && project.images.length > 0) {
      for (const imageUrl of project.images) {
        // Extract public_id from the URL
        const segments = imageUrl.split('/');
        const filename = segments[segments.length - 1];
        const publicId = filename.split('.')[0]; // remove file extension

        await cloudinary.uploader.destroy(`projects/${publicId}`);
      }
    }
    // Delete project from database
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Project and its images deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Get 3 latest projects
exports.getLatestProjects = async (req, res) => {
  try {
    // Find projects, sort by createdAt descending, limit to 3
    const projects = await Project.find()
      .sort({ createdAt: -1 }) // newest first
      .limit(3);

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};