const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
// initialisation de 2 array
Entre_70 = [];
Entre_70_noyear = [];

// filtre par année de naissances dans les années 1970
  entrepreneurs.forEach(Object => {
   if (Object.year >= 1970 && Object.year < 1980){
         Entre_70.push(Object);
         Entre_70_noyear.push( Object.first + " " + Object.last);}    
  } )
  console.log("Les entrepreneurs nés dans les année 70 sont :")
  console.log(Entre_70_noyear);

// l'âge des entrepreneurs
entrepreneurs.forEach(Object => {
     age = new Date().getFullYear() - Object.year
     console.log(`Aujourd'hui ${Object.first} ${Object.last} aurait ${age} ans`)
}
)

//tri par ordre alphabétiques
entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)) //super fonction 
console.log("Voici les entrepreneurs triés par ordre alphabétique suivant leurs noms")
console.log(entrepreneurs)





