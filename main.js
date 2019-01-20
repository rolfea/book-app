// const BOOKS_KEY = 'AIzaSyB9a6wUkQFgzuSu_4rEr0wX2-UL3GQgxB4';
const baseURL = 'https://www.googleapis.com/books/v1/';

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
  const image = typeof (imageLinks) === 'undefined' ? './resources/default-book-image.jpg' : imageLinks.smallThumbnail;

  bookImage.setAttribute('src', image);
  return bookImage;
}

function displaySearchResults(searchResults) {
  const resultsHeader = document.querySelector('#results-header');

  if (searchResults.length === 0) {
    resultsHeader.innerText = 'This search did not return any results.';
  } else {
    resultsHeader.innerText = 'Search Results:';
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
    .then(td => displaySearchResults(td))
    .catch(e => console.log(e));
}

function clearResults() {
  const listParent = document.querySelector('ul');
  while (listParent.firstChild) {
    listParent.removeChild(listParent.firstChild);
  }
}

// eslint-disable-next-line no-unused-vars
function search() {
  clearResults();
  const searchText = document.querySelector('input').value;
  fetchVolumes(searchText);
}
