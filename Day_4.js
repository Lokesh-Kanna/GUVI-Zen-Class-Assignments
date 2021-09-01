// Day_4 tasks:

// 1. How to compare two JSON have the same properties without order?
//      a. var obj1 = { name: "Person 1", age:5 };
//      b. var obj2 = { age:5, name: "Person 1" };

const isEqual = (obj1, obj2) => {
    var flag = true;
    if(Object.keys(obj1).length === Object.keys(obj2).length){
        for(key in obj1) {
            if(obj1[key] == obj2[key]) {
                continue;
            }
            else {
                flag = false;
            }
        }
    }
    else {
        flag = false;
    }
    console.log(flag);
}

var obj1 = {'name': 'lokesh', 'age': 5};
var obj2 = {'age': 5, 'name': 'lokesh'}

isEqual(obj1, obj2);
// OUTPUT
// true

// ------------------------------------------------------------------------------------------------

// 2. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display 
// all the country flags in console
var xhr = new XMLHttpRequest();
xhr.open('GET',"https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response)
    for(var i = 0; i < data.length; i++) {
        console.log(`${i}. The flag of the country ${data[i].name} is ${data[i].flag}`);
    }
}
// OUTPUT
// 0. The flag of the country Afghanistan is https://restcountries.eu/data/afg.svg 
// 1. The flag of the country Åland Islands is https://restcountries.eu/data/ala.svg
// ...
// ...
// 249. The flag of the country Zimbabwe is https://restcountries.eu/data/zwe.svg

// ------------------------------------------------------------------------------------------------

// 3. Use the same rest countries and print all countries name, region, sub region and population
var xhr = new XMLHttpRequest();
xhr.open('GET',"https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response)
    for(var i = 0; i < data.length; i++) {
        console.log(`Country Name: ${data[i].name},\nRegion: ${data[i].region},\nSubregion: ${data[i].subregion},\nPopulation: ${data[i].population}`);
    }
};
// OUTPUT
// Country Name: Afghanistan,
// Region: Asia,
// Subregion: Southern Asia,
// Population: 27657145

// ................

//Country Name: Zimbabwe,
// Region: Africa,
// Subregion: Eastern Africa,
// Population: 14240168