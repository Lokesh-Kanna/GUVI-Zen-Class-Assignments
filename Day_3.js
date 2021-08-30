// Day 3 tasks:

// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

var obj = [
    { person: "Lokesh", age: "26", company: "GUVI" },
    { person: "Shankar", age: "29", company: "GUVI geek" },
    { person: "Boopathi", age: "28", company: "GUVI geek network" },
  ];

for(let i = 0; i <obj.length; i++) {
    console.log(obj[i]);
}
// OUTPUT:-
// Object { person: "Lokesh", age: "26", company: "GUVI" }
// Object { person: "Shankar", age: "29", company: "GUVI geek" }
// Object { person: "Boopathi", age: "28", company: "GUVI geek network" }

for(var info in obj) {
    console.log(obj[info]);
}
// OUTPUT:-
// Object { person: "Lokesh", age: "26", company: "GUVI" }
// Object { person: "Shankar", age: "29", company: "GUVI geek" }
// Object { person: "Boopathi", age: "28", company: "GUVI geek network" }

for(const elem of obj) {
    console.log(elem);
}
// OUTPUT:-
// Object { person: "Lokesh", age: "26", company: "GUVI" }
// Object { person: "Shankar", age: "29", company: "GUVI geek" }
// Object { person: "Boopathi", age: "28", company: "GUVI geek network" }

Object.values(obj).forEach(value => {
    console.log(value);
})
// OUTPUT:-
// Object { person: "Lokesh", age: "26", company: "GUVI" }
// Object { person: "Shankar", age: "29", company: "GUVI geek" }
// Object { person: "Boopathi", age: "28", company: "GUVI geek network" }

// -----------------------------------------------------------------------------------------

// 2. Create your own resume data in JSON format
var resumeData = { 
    "Bio": {
        "Name": "Lokesh Kanna",
        "email Id": "lokeshkanna.work@gmail.com",
        "Ph.number": "1234567891",
        "Address": "Tamil Nadu, India"
    },


    "Work Experience": [{
        "Company name": "Tereos",
        "Location": "Paris, France",
        "Position": "Contract Manager",
    },
    {
        "Company name": "Safeline Logistics",
        "Location": "Delhi, India",
        "position": "Imports Manager",
    }],


    "Education": [{
        "University name": "TBS",
        "Location": "Toulouse, France",
        "Degree": "MSc Supply Chain and Lean Management",
    },
    {
        "Company name": "Safeline Logistics",
        "Location": "Delhi, India",
        "Degree": "B-Tech Aerospace Engineering",
    }],
    
};