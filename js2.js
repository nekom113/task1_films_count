const personalMovieDB = {
  count: 0,
  movies: {},
  genres: [],
  private: false,
};

// let numberOfFilms;

// function letStart() {
//   numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');

//   while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
//   }
// }
// console.log(numberOfFilms);

// function addFilms() {
//   alert('назовите 2 последних фильма');
//   for (let i = 0; i < 2; i++) {
//     const filmName = prompt(`Фильм ${i + 1}`, '');
//     const filmRate = +prompt('Какую оценку дадите ему?', '');
//     if (
//       filmName !== ''
//           && filmRate !== ''
//           && filmName !== null
//           && filmRate !== null
//           && filmName.length < 50
//     ) {
//       personalMovieDB.movies[filmName] = filmRate;
//       console.log('done');
//     } else {
//       alert('Пожалуйста, повнимательней!');
//       console.log('error');
//       i--;
//     }
//   }
// }

// function checkLeveluser() {
//   if (personalMovieDB.count < 10) {
//     alert('Маловато как-то');
//   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
//   } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман');
//   } else {
//     personalMovieDB.count = 0;
//     alert('Какая-то ошибка!');
//   }
//   console.log(personalMovieDB);
// }

// letStart();
// addFilms();
// checkLeveluser();

// function getGeneresList() {
//   const genQuestion = [];
//   for (let i = 0; i < 3; i++) {
//     genQuestion.push(prompt(`Ваш любимый жанр под номером ${i + 1}`, ''));
//   }
//   return personalMovieDB.genres = genQuestion;
// }

function showMyDB() {
  personalMovieDB.private === false ? console.log('Can`t open file') : console.log(personalMovieDB);
}
showMyDB();
