const jwtHelper = require('../config/jwtHelper');
const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
// const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const ctrlStudent = require('../controllers/student.controller');
const ctrlProfessional = require('../controllers/professional(student).controller');
const ctrlCorporate = require('../controllers/corporate.controller');
const ctrlInstructor = require('../controllers/instructor.controller');
const ctrlUniversity = require('../controllers/university.controller');
const ctrlAdmin = require('../controllers/admin.controller');


//Register
router.post('/student-register', ctrlStudent.register);
router.post('/professional-register', ctrlProfessional.register);
router.post('/corporate-register', ctrlCorporate.register);
router.post('/instructor-register', ctrlInstructor.register);
router.post('/university-register', ctrlUniversity.register);
router.post('/admin-register', ctrlAdmin.register);

//Login
router.post('/student-authenticate', ctrlStudent.authenticate);
router.get('/studentProfile', jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);

router.post('/professional-authenticate', ctrlProfessional.authenticate);
router.get('/professionalProfile', jwtHelper.verifyJwtToken, ctrlProfessional.professionalProfile);

router.post('/instructor-authenticate', ctrlInstructor.authenticate);
router.get('/instructorProfile', jwtHelper.verifyJwtToken, ctrlInstructor.instructorProfile);

router.post('/corporate-authenticate', ctrlCorporate.authenticate);
router.get('/corporateProfile', jwtHelper.verifyJwtToken, ctrlCorporate.corporateProfile);

router.post('/university-authenticate', ctrlUniversity.authenticate);
router.get('/universityProfile', jwtHelper.verifyJwtToken, ctrlUniversity.universityProfile);

router.post('/admin-authenticate', ctrlAdmin.authenticate);
router.get('/adminProfile', jwtHelper.verifyJwtToken, ctrlAdmin.adminProfile);

//Reset Student password
router.post('/student-req-reset-password', ctrlStudent.ResetPassword);
router.post('/student-new-password', ctrlStudent.NewPassword);
router.post('/student-valid-password-token', ctrlStudent.ValidPasswordToken);

//Reset Professional password
router.post('/professional-req-reset-password', ctrlProfessional.ResetPassword);
router.post('/professional-new-password', ctrlProfessional.NewPassword);
router.post('/professional-valid-password-token', ctrlProfessional.ValidPasswordToken);

//Reset Instructor password
router.post('/instructor-req-reset-password', ctrlInstructor.ResetPassword);
router.post('/instructor-new-password', ctrlInstructor.NewPassword);
router.post('/instructor-valid-password-token', ctrlInstructor.ValidPasswordToken);

//Reset Corporate password
router.post('/corporate-req-reset-password', ctrlCorporate.ResetPassword);
router.post('/corporate-new-password', ctrlCorporate.NewPassword);
router.post('/corporate-valid-password-token', ctrlCorporate.ValidPasswordToken);

//Reset University password
router.post('/university-req-reset-password', ctrlUniversity.ResetPassword);
router.post('/university-new-password', ctrlUniversity.NewPassword);
router.post('/university-valid-password-token', ctrlUniversity.ValidPasswordToken);

//Reset Admin password
router.post('/admin-req-reset-password', ctrlAdmin.ResetPassword);
router.post('/admin-new-password', ctrlAdmin.NewPassword);
router.post('/admin-valid-password-token', ctrlAdmin.ValidPasswordToken);



module.exports = router;