const person = {
  name: "Khaled",
  age: 24,
  city: "jahra",
};

person.emailAddress = "eng.Khaled10@outlook.com";
function hasKey(obj, key) {
  if (obj[key]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
hasKey(person, "name");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

/******************************
	Q4) Create a function that accepts an array of objects called 'movies' 
and iterates through it to print the titles of all the movies.
********************************/

function movieTitle(list) {
  list.forEach((mov) => {
    console.log(mov.title);
  });
}
movieTitle(movies);
