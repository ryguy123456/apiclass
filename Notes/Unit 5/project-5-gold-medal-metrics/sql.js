var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./gold_medals.sqlite');

/*
Returns a SQL query string that will create the Country table with four columns: name (required), code (required), gdp, and population.
*/

const createCountryTable = () => {
  return "CREATE TABLE Country ( name text not null, code integer not null, gdp integer, population integer);";
};

/*
Returns a SQL query string that will create the GoldMedal table with ten columns (all required): id, year, city, season, name, country, gender, sport, discipline, and event.
*/

const createGoldMedalTable = () => {
  return "CREATE TABLE GoldMedal ( id integer, year integer not null, city text not null, season text not null, name text not null, country text not null, gender text not null, sport text not null, discipline text not null, event text not null, primary key (ID) );";
};

/*
Returns a SQL query string that will find the number of gold medals for the given country.
*/

const goldMedalNumber = country => {
    return `select count(country) from GoldMedal where country = '${country}';`
};

/*
Returns a SQL query string that will find the year where the given country
won the most summer medals, along with the number of medals aliased to 'count'.
*/

const mostSummerWins = country => {
  return `select year, count(year) from goldmedal where season = 'Summer' and country = '${country}' group by year order by count(year) desc limit 1;`;

};

/*
Returns a SQL query string that will find the year where the given country
won the most winter medals, along with the number of medals aliased to 'count'.
*/

const mostWinterWins = country => {
  return `select year, count(year) from goldmedal where season = 'Winter' and country = '${country}' group by year order by count(year) desc limit 1;`;
};

/*
Returns a SQL query string that will find the year where the given country
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestYear = country => {
  return `select year, count(year) from goldmedal where country = '${country}' group by year order by count(year) desc limit 1;`;
};

/*
Returns a SQL query string that will find the discipline this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestDiscipline = country => {
return `select discipline, count(discipline) from goldmedal where country = '${country}' group by discipline order by count(discipline) desc limit 1;`;
};

/*
Returns a SQL query string that will find the sport this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestSport = country => {
  return `select sport, count(sport) from goldmedal where country = '${country}' group by sport order by count(sport) desc limit 1;`;
};

/*
Returns a SQL query string that will find the event this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestEvent = country => {
  return `select event, count(event) from goldmedal where country = '${country}' group by event order by count(event) desc limit 1;`;
};

/*
Returns a SQL query string that will find the number of male medalists.
*/

const numberMenMedalists = country => {
  return `select gender, count(distinct name) from goldmedal where gender='Men' and country = '${country}' group by gender;`
};

/*
Returns a SQL query string that will find the number of female medalists.
*/

const numberWomenMedalists = country => {
  return `select gender, count(distinct name) from goldmedal where gender='Women' and country = '${country}' group by gender;`;
};

/*
Returns a SQL query string that will find the athlete with the most medals.
*/

const mostMedaledAthlete = country => {
  return `select name, count(name) from goldmedal where country = '${country}' group by name order by count(name) desc limit 1;`;
};

/*
Returns a SQL query string that will find the medals a country has won
optionally ordered by the given field in the specified direction.
*/

const orderedMedals = (country, field, sortAscending) => {
  console.log(`country: ${country} field: ${field} sort: ${sortAscending}`);
  if(!field && !sortAscending) { //sorting field and sort order not provided
    return `select * from goldmedal where country = '${country}'`
  } else if(sortAscending) { //sort in ascending order
    return `select * from goldmedal where country = '${country}' order by ${field} asc`
  } else { // sort in descending order
    return `select * from goldmedal where country = '${country}' order by ${field} desc`
  }
};

/*
Returns a SQL query string that will find the sports a country has
won medals in. It should include the number of medals, aliased as 'count',
as well as the percentage of this country's wins the sport represents,
aliased as 'percent'. Optionally ordered by the given field in the specified direction.
*/

const orderedSports = (country, field, sortAscending) => {
  if(!field && !sortAscending) { //sorting field and sort order not provided
    return `select country, sport, count(sport), (count(sport) *100 /(select count(sport) from goldmedal where country='${country}')) as percent from goldmedal where country='${country}' group by sport;`;
  } else if (sortAscending) { //sort ascending order by field
    return `select country, ${field}, sport, count(sport), (count(sport) *100 /(select count(sport) from goldmedal where country='${country}')) as percent from goldmedal where country='${country}' group by sport order by ${field} asc;`
  } else {//sort decending order by field
    return `select country, ${field}, sport, count(sport), (count(sport) *100 /(select count(sport) from goldmedal where country='${country}')) as percent from goldmedal where country='${country}' group by sport order by ${field} desc;`
  }
};

module.exports = {
  createCountryTable,
  createGoldMedalTable,
  goldMedalNumber,
  mostSummerWins,
  mostWinterWins,
  bestDiscipline,
  bestSport,
  bestYear,
  bestEvent,
  numberMenMedalists,
  numberWomenMedalists,
  mostMedaledAthlete,
  orderedMedals,
  orderedSports
};
