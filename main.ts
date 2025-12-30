function generateResume() : void {
    const name : string = (document.getElementById("name")as HTMLInputElement).value.trim();
    const email : string = (document.getElementById("email")as HTMLInputElement).value.trim();
    const phone : string = (document.getElementById("phone")as HTMLInputElement).value.trim();
    const nationality : string = (document.getElementById("nationality")as HTMLInputElement).value.trim();
    const dob : string = (document.getElementById("dob")as HTMLInputElement).value.trim();
    const address : string = (document.getElementById("address")as HTMLInputElement).value.trim();
    const objective : string = (document.getElementById("objective")as HTMLInputElement).value.trim();
    const degree : string = (document.getElementById("degree")as HTMLInputElement).value.trim();
    const institution : string = (document.getElementById("institution")as HTMLInputElement).value.trim();
    const year : string = (document.getElementById("year")as HTMLInputElement).value.trim();
    const skills : string = (document.getElementById("skills")as HTMLInputElement).value.trim();
    const experience : string = (document.getElementById("experience")as HTMLInputElement).value.trim();

    const resumeOutput : HTMLElement = document.getElementById("resume-output") as HTMLElement;


    const skillsList : string = skills
    ?skills.split(",").map((skill : string)=> `<li>${skill.trim()}</li>`).join(""): "<li>No skill provided</li>";

    resumeOutput.innerHTML = `
     ${name ?`<p><strong>Name:</strong>${name}</p>` : ""}
    ${email ?`<p><strong>Email:</strong>${email}</p>` : ""}
    ${phone ?`<p><strong>Phone Number:</strong>${phone}</p>` : ""}
    ${nationality ?`<p><strong>Nationality:</strong>${nationality}</p>` : ""}
    ${dob ?`<p><strong>Date of birth:</strong>${dob}</p>` : ""}
    ${address ?`<p><strong>Address:</strong>${address}</p>` : ""}

    <h3>Objective</h3>
    <p>${objective || "No objective provides"}</p>

    <h3>Education</h3>
    ${degree && institution && year ?`<p><strong>${degree}</strong>, ${institution} (${year})</p>` : "<p>No education detail provided</p>"}
     
    <h3>Skills</h3>
    <ul>${skillsList}</ul>

     <h3>Work Experience</h3>
     ${experience}
   
    `
}
export {generateResume};