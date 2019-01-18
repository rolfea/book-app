const BOOKS_KEY = "AIzaSyB9a6wUkQFgzuSu_4rEr0wX2-UL3GQgxB4";
const baseURL = "https://www.googleapis.com/books/v1/";

function constructVolumesRequest(queryString) {
    return baseURL + "volumes?q=" + queryString;
}

fetch(constructVolumesRequest("john+mills"))
    .then(r => r.json())
    .then(d => console.log(d));

