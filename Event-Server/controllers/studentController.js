import mongoose from 'mongoose';
import studentModel from '../models/studentModel.js';

export const getStudents = async (req, res) => {
    try {
        const db = mongoose.connection.useDb(req.uniId);
        const Student = studentModel(db);

        const students = await Student.find().populate('clubs');
        return res.status(200).json({
            status: true,
            data: students
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Error -> getStudents",
            error: error.message
        });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const db = req.db;
        const Student = studentModel(db);
        if (req.studentId !== req.params.id) {
            return res.status(403).json({
                status: false,
                message: "Forbidden: You can only access your own data"
            });
        }
        const student = await Student.findById(req.params.id).populate('clubs');
        if (!student) {
            return res.status(404).json({
                status: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            status: true,
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Error -> getStudentById",
            error: error.message
        });
    }
};


export const updateStudent = async (req, res) => {
    try {
        const db = mongoose.connection.useDb(req.uniId);
        const Student = studentModel(db);
        if (req.studentId !== req.params.id) {
            return res.status(403).json({
                status: false,
                message: "Forbidden: You can only access your own data"
            });
        }
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('clubs');

        if (!updatedStudent) {
            return res.status(404).json({
                status: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: "Error updating student",
            error: error.message
        });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const db = mongoose.connection.useDb(req.uniId);
        const Student = studentModel(db);
        if (req.studentId !== req.params.id) {
            return res.status(403).json({
                status: false,
                message: "Forbidden: You can only access your own data"
            });
        }
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({
                status: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Student deleted successfully",
            data: deletedStudent
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Error -> deleteStudent",
            error: error.message
        });
    }
};
