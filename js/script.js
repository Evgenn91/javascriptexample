"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilms1 = prompt("Один из последних просмотренныз фильмов?",""),
    estimation1 = prompt("На сколько оцените его",""),
    lastFilms2 = prompt("Один из последних просмотренныз фильмов?",""),
    estimation2 = prompt("На сколько оцените его","");


personalMovieDB.movies[lastFilms1] = estimation1;
personalMovieDB.movies[lastFilms2] = estimation2;

console.log(personalMovieDB);