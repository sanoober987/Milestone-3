"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResume = void 0;
function generateResume() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var nationality = document.getElementById("nationality").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var address = document.getElementById("address").value.trim();
    var objective = document.getElementById("objective").value.trim();
    var degree = document.getElementById("degree").value.trim();
    var institution = document.getElementById("institution").value.trim();
    var year = document.getElementById("year").value.trim();
    var skills = document.getElementById("skills").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var resumeOutput = document.getElementById("resume-output");
    var skillsList = skills
        ? skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("") : "<li>No skill provided</li>";
    resumeOutput.innerHTML = "\n     ".concat(name ? "<p><strong>Name:</strong>".concat(name, "</p>") : "", "\n    ").concat(email ? "<p><strong>Email:</strong>".concat(email, "</p>") : "", "\n    ").concat(phone ? "<p><strong>Phone Number:</strong>".concat(phone, "</p>") : "", "\n    ").concat(nationality ? "<p><strong>Nationality:</strong>".concat(nationality, "</p>") : "", "\n    ").concat(dob ? "<p><strong>Date of birth:</strong>".concat(dob, "</p>") : "", "\n    ").concat(address ? "<p><strong>Address:</strong>".concat(address, "</p>") : "", "\n\n    <h3>Objective</h3>\n    <p>").concat(objective || "No objective provides", "</p>\n\n    <h3>Education</h3>\n    ").concat(degree && institution && year ? "<p><strong>".concat(degree, "</strong>, ").concat(institution, " (").concat(year, ")</p>") : "<p>No education detail provided</p>", "\n     \n    <h3>Skills</h3>\n    <ul>").concat(skillsList, "</ul>\n\n     <h3>Work Experience</h3>\n     ").concat(experience, "\n   \n    ");
}
exports.generateResume = generateResume;
