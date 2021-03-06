const baseURL = 'https://www.googleapis.com/books/v1/';
const defaulImage = './resources/default-book-image.jpg';

function buildBookDisplay(searchResult) {
  const publisher = searchResult.publisher === undefined ? 'Unavailable' : searchResult.publisher;
  return `Author: ${searchResult.authors}
    Title: ${searchResult.title}
    Publishing Company: ${publisher}`;
}

function createBookImage(searchResult) {
  const bookImage = document.createElement('img');
  // eslint-disable-next-line prefer-destructuring
  const imageLinks = searchResult.imageLinks;
  const image = typeof (imageLinks) === 'undefined' ? defaulImage : imageLinks.smallThumbnail;

  bookImage.setAttribute('src', image);
  return bookImage;
}

function buildResultsList(searchResults) {
  const listParent = document.querySelector('ul');

  searchResults.forEach((sr) => {
    const book = document.createElement('li');
    const bookData = document.createElement('p');
    const emptyParagraph = document.createElement('p');
    const learnMore = document.createElement('a');

    bookData.innerText = buildBookDisplay(sr);
    learnMore.setAttribute('href', sr.infoLink);
    learnMore.setAttribute('target', '_blank');
    learnMore.innerText = 'Learn More';

    book.appendChild(bookData);
    book.appendChild(createBookImage(sr));
    book.appendChild(emptyParagraph);
    book.appendChild(learnMore);
    listParent.appendChild(book);
  });
}

function displaySearchResults(searchResults) {
  const resultsHeader = document.querySelector('#results-header');

  if (searchResults.length === 0) {
    resultsHeader.innerText = 'This search did not return any results.';
  } else {
    resultsHeader.innerText = 'Search Results:';
    buildResultsList(searchResults);
  }
}

function getVolumeInfo(data) {
  return typeof (data) === 'undefined' ? [] : data.map(b => b.volumeInfo);
}

function constructVolumesRequest(queryString) {
  const formattedString = queryString.split(' ').join('+');
  return `${baseURL}volumes?q=${formattedString}`;
}

function fetchVolumes(searchText) {
  fetch(constructVolumesRequest(searchText))
    .then(r => r.json())
    .then(d => getVolumeInfo(d.items))
    .then(sr => displaySearchResults(sr))
    .catch(e => console.log(e));
}

function clearResults() {
  const listParent = document.querySelector('ul');

  while (listParent.firstChild) {
    listParent.removeChild(listParent.firstChild);
  }
}

export default function () {
  const searchText = document.querySelector('input').value;

  clearResults();
  fetchVolumes(searchText);
}
