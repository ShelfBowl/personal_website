const courseList = [
    {
    code: "ACIT 1630",
    name: "Database Systems"
    },
    {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
    },
    {
    code: "ACIT 1420",
    name: "Introduction to Systems Administration"
    }
];


function matchCode(userInput) {

    for (let i in courseList) {
        if (courseList[i].code.slice(-4) == userInput) {
            console.log("Yes I am taking the course: " + courseList[i].code + " - " + courseList[i].name);
            return;
        }
    }
    
    courseList.push({code: userInput, name: null});
    console.log("Successfully added new object to array!")

        
    
    return
}

function verifyInput(userInput) {
    
    if (userInput.length != 4) {
        console.log('1');
        return false;
    }else if (isNaN(userInput) == true){
        console.log('2');
        return false;
    }else{
        return true;
    }

}

function searchCourses(event) {

    let userInput = document.querySelector("#courseNum").value;
    console.log(userInput);

    if (verifyInput(userInput) == false) {

        console.log("ERROR: Please make sure your input is a 4 digit number");
        return;

    }else{

        matchCode(userInput);

    }

}