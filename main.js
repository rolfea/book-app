const BOOKS_KEY = "AIzaSyB9a6wUkQFgzuSu_4rEr0wX2-UL3GQgxB4";
const baseURL = "https://www.googleapis.com/books/v1/";

function displaySearchResults(searchResults) {
    const listParent = document.querySelector('#search-results');            

    searchResults.forEach(sr => {
        const li = document.createElement("li");
        li.innerText = `Author: ${sr.authors} Title: ${sr.title} Publishing Company: ${sr.publisher} Image: ${sr.imageLinks.smallThumbnail}`
        listParent.appendChild(li);
    })
}

function trimData(data) {
    return data.map( b => b.volumeInfo);    
}

function constructVolumesRequest(queryString) {
    const formattedString = queryString.split(" ").join("+");
    return baseURL + "volumes?q=" + formattedString;
}

function fetchVolumes(searchText) {
    fetch(constructVolumesRequest(searchText))
        .then(r => r.json())
        .then(d => trimData(d.items))
        .then(td => displaySearchResults(td));
}

function clearResults() {
    const listParent = document.querySelector('ul');
    while (listParent.firstChild) {
        listParent.removeChild(listParent.firstChild);
    }    
}

function search() {
    clearResults();
    const searchText = document.querySelector('input').value;
    fetchVolumes(searchText);
}

