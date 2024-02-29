    // controllers/teacherController.js
    const Teacher = require('../Models/Teacher');

    // Get all teachers
    exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    // Create a new teacher
    exports.createTeacher = async (req, res) => {
    try {
        const { name, about, hobby, dateOfBirth, degree, teachingGoal,position,homeTown } = req.body;
      // If no image uploaded, set empty string
        const newTeacher = new Teacher({
        name,
        about,
        hobby,
        dateOfBirth,
        degree,
        teachingGoal,
        position,
        homeTown,
        imageUrl: req.file.filename,
        });
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };

    // Update a teacher by ID
    exports.updateTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        // Check if required fields are provided
        const { name, about, hobby, dateOfBirth, degree, teachingGoal,position,homeTown } = req.body;
        if (!name || !about || !hobby || !dateOfBirth || !degree || !teachingGoal ||!position||!homeTown) {
        return res.status(400).json({ message: 'All fields are required for updating a teacher' });
        }
        const updatedTeacher = await Teacher.findByIdAndUpdate(
        teacherId,
        {
            name,
            about,
            hobby,
            dateOfBirth,
            degree,
            teachingGoal,
            position,
            homeTown,
            imageUrl: req.file ? req.file.filename : undefined,
        },
        { new: true }
        );
        if (!updatedTeacher) {
        return res.status(404).json({ message: 'Teacher not found' });
        }
        res.json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };

    // Delete a teacher by ID
    exports.deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
        if (!deletedTeacher) {
        return res.status(404).json({ message: 'Teacher not found' });
        }
        res.json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };
