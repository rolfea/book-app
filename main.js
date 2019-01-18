const BOOKS_KEY = "AIzaSyB9a6wUkQFgzuSu_4rEr0wX2-UL3GQgxB4";
const baseURL = "https://www.googleapis.com/books/v1/";

function search() {
    const searchText = document.querySelector('input').value;
    fetchVolumes(searchText);
}

function trimData(data) {
    console.log(data);
    return data.map( b => b.volumeInfo);
    
}

function fetchVolumes(searchText) {
    fetch(constructVolumesRequest(searchText))
        .then(r => r.json())
        .then(d => console.log(trimData(d.items)));
}

function constructVolumesRequest(queryString) {
    const formattedString = queryString.split(" ").join("+");
    return baseURL + "volumes?q=" + formattedString;
}

