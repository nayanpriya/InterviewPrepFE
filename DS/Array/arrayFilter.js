const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Get 21 and older


// let canDrink = []
// ages.forEach(age => {
//     if (age >= 21) {
//         canDrink.push(age)
//     }
// })

// console.log(canDrink)

// Get 21 and older withfilter

const canDrink = ages.filter((age) => age >= 21)
console.log(canDrink)

// filter thje retail company

const retailCompannies = companies.filter(company => company.category === "Retail")
// console.log(retailCompannies)


// get 80s company

const company80s = companies.filter(company => 1980 <= company.start && company.start <= 1990)
// console.log(company80s)

// companies that lasted 10 years

const tenYearsCompanies = companies.filter(company => company.end - company.start >= 10)
console.log(tenYearsCompanies)