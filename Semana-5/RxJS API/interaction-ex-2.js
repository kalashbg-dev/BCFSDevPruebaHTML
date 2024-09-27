import { fromEvent, of } from 'https://esm.run/rxjs';
import { map, debounceTime, switchMap, catchError } from 'https://esm.run/rxjs/operators';
import { ajax } from 'https://esm.run/rxjs/ajax';

const fetchDataButton = document.getElementById('fetchData');
const outputDiv = document.getElementById('output');
const errorDiv = document.getElementById('error');

const fetchUrl = 'https://randomuser.me/api/';

function showUserData(user) {
  outputDiv.innerHTML = `
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>Email: ${user.email}</p>
    <p>Location: ${ user.location.city}, ${ user.location.country}</p>
    <img src="${user.picture.large}" alt="User Picture"/>
  `
}

fromEvent(fetchDataButton, 'click').pipe(
  switchMap(() => {
    return ajax.getJSON(fetchUrl).pipe(
      catchError(error => {
        errorDiv.textContent = `Error: ${ error }`
        return of(null)
      })
    );
  }),
  map(response => response ? response.results[0] : null),
).subscribe(user => {
  console.log('Results', user);
  if(user) {
    showUserData(user);
  }
});
