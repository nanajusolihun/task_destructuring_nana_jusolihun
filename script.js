// 1. Destrucuring Array
const superhero = ["Iron Man", "Captain America", "Thor", "Black Widow" ,"Spiderman", "Hulk", "Scarlet witch"];

const superhero1 = superhero[0];
const superhero4 = superhero[3];
const superhero6 = superhero[5];
console.log(superhero1, superhero4, superhero6);


const [satu, dua, tiga, ...lainnya] = superhero;
console.log(satu, dua, tiga, lainnya);



// 2. Destructuring Object
const movie = {
    title : "Guardians of Galaxy Vol. 3",
    year : 2023,
    duration : "2h 30m",
    directed : "James Gunn",
    writed : "James Gunn",
    cast : {
        starLord : "Chris Pratt",
        highEvolutionary : "Chukwudi Iwuji",
        rocket : "Bradley Cooper",
        groot : "Vin Diesel",
        drax : "Dave Bautista",
        nebula : "Karen Gillan",
        mantis : "Pom Klementieff"
    }
};

const titleMovie = movie.title;
const directedMoive = movie.directed;
const castRocket = movie.cast.rocket;
console.log(titleMovie, directedMoive, castRocket);

const {
    title,
    year,
    cast: {starLord},
    ...other
} = movie;
console.log(title, year, starLord, other);



// Destructuring di Function Parameter
function detailMovie1 (title, year, castGroot) {
    console.log(title, year, castGroot);
}
detailMovie1(movie.title, movie.year, movie.cast.groot);


function detailMovie2 ({title, year, writed}) {
    console.log(title, year, writed);
}
detailMovie2(movie);



// Default Value dan Alias
// Default value
function detailMovie3 ({title, year, writed, produced = "Marvel Studios"}) {
    console.log(title, year, writed, produced);
}
detailMovie3(movie);

// Alias
function detailMovie4 ({title, duration, writed:penulis, produced = "Marvel Studios"}) {
    console.log(title, duration, penulis, produced);
}
detailMovie4(movie);