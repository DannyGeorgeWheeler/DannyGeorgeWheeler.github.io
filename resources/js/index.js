const today = new Date();
const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const dailyActivity = new Array(7);
dailyActivity[0] = 'It\'s Sunday so I\'ll be going out on a long walk!';
dailyActivity[1] = 'Monday is always a CrossFit day for me, there is no better way to start a week!';
dailyActivity[2] = 'It\'s Tuesday so I\'ll be going out on a long walk!';
dailyActivity[3] = 'As it\'s a <em>Wednesday</em>, i\'ll probably be listening to <a href=\'https://podbay.fm/p/giant-bombcast\' target=\'blank\'>The Giant Bombcast</a>, my favourite podcast!';
dailyActivity[4] = 'It\'s Thursday so I\'ll be going out on a long walk!';
dailyActivity[5] = 'Happy Friday! At the moment I usually study every day, but I still get the Friday feeling because my partner Tulu will be ready for a movie night.';
dailyActivity[6] = 'The weekend is here! That means a slow morning enjoying breakfast and coffee with my partner Tulu.  We\'ll probably listen to <a href=\'https://www.thisamericanlife.org/recommended/new-to-this-american-life\' target=\'blank\'>This American Life</a> together, check it out if you enjoy true stories and high-end audio production.';

const dailyCode = `<p> ${dailyActivity[3]}</p>`

document.getElementById('doing').insertAdjacentHTML('afterend', dailyCode);