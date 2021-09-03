// Day_9 Tasks

// Solving problems using array functions on rest countries data.

// 1. Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    var asianCountries = data.filter((ele) => ele.region === "Asia").map((detail) => detail.name);   
    console.log(asianCountries);
};
/* 
OUTPUT:
Array(50) [ "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei Darussalam", "Cambodia", "China", "Georgia", … ]
*/



// 2. Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    var popRestriction = data.filter((country) => country.population < 200000).map((val) => val.name);
    console.log(popRestriction);
};
/*
OUTPUT:
Array(63) [ "Åland Islands", "American Samoa", "Andorra", "Anguilla", "Antarctica", "Antigua and Barbuda", 
"Aruba", "Bermuda", "Bonaire, Sint Eustatius and Saba", "Bouvet Island", … ]
*/



// 3. Print the following details name, capital, flag using forEach function
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    data.forEach((element) => console.log(`${element.name}, ${element.capital}, ${element.flag}`));
};
/*
OUTPUT:
Afghanistan, Kabul, https://restcountries.eu/data/afg.svg
Åland Islands, Mariehamn, https://restcountries.eu/data/ala.svg
...
...
Zimbabwe, Harare, https://restcountries.eu/data/zwe.svg
*/


// 4. Print the total population of countries using reduce function
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    var res = data.reduce((acc, ele) => acc + ele.population, 0);    
    console.log(res);
}
/*
OUTPUT:
7349137231
*/

// 5. Print the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.eu/rest/v2/all", true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    var dollarCountries = data.filter((ele) => {
        for(let i in ele.currencies) {
            if(ele.currencies[i].code === "USD") {
                return true;
            }
        }
    });
    console.log(dollarCountries);
};
/*
OUTPUT:
Array(20) 
0: Object { name: "American Samoa", alpha2Code: "AS", alpha3Code: "ASM", … }
1: Object { name: "Bonaire, Sint Eustatius and Saba", alpha2Code: "BQ", alpha3Code: "BES", … }
​...
...
19: Object { name: "Zimbabwe", alpha2Code: "ZW", alpha3Code: "ZWE", … }
*/



