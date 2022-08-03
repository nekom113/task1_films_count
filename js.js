// const personalMovieDB = {
//   count: 0,
//   movies: {},
// };

// function addFilms() {
//   const numberOfFilms = prompt('Сколько фильмов посмотрел?', '');

//   if (numberOfFilms !== '' || numberOfFilms * 1 !== NaN || numberOfFilms !== null) {
//     personalMovieDB.count = numberOfFilms;
//     alert('назовите 2 последних фильма');
//     for (let i = 0; i < 2; i++) {
//       const filmName = prompt(`Фильм ${i + 1}`, '');
//       const filmRate = +prompt('Какую оценку дадите ему?', '');
//       if (
//         filmName !== ''
//           && filmRate !== ''
//           && filmName !== null
//           && filmRate !== null
//           && filmName.length < 50
//       ) {
//         personalMovieDB.movies[filmName] = filmRate;
//         console.log('done');
//       } else {
//         alert('Пожалуйста, повнимательней!');
//         console.log('error');
//         i--;
//       }
//     }
//     if (personalMovieDB.count < 10) {
//       alert('Маловато как-то');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//       alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//       alert('Вы киноман');
//     } else {
//       personalMovieDB.count = 0;
//       alert('Какая-то ошибка!');
//     }
//     console.log(personalMovieDB);
//   } else {
//     addFilms();
//   }
// }

// addFilms();

const btn = document.querySelector('.addFilm');
const filmName = document.getElementById('nameFilm');
const filmsList = document.querySelector('.filmsList')

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const oneFilm = document.createElement('li')
  filmsList.innerHTML = filmName.value 

  console.log(filmName.value);
  filmName.value = '';
  
});
