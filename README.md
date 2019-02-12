# Books API App

Visit [here](https://rolfe-books-app.herokuapp.com/) to see the deployed version of this app.

To run this locally:

```bash
npm install
npm run server
```

Then navigate to `http://localhost:8080/home.html`

To run tests:

```bash
npm test
```

## Goal

Create an application that allows you to use the Google Books API to search for books, and deploy it somewhere accessible through a web browser.

This application should allow you to:

1. Type in a query and display a list of books matching that query.
2. Each item in the list should include:
    1. author
    2. title
    3. publishing company
    4. a picture of the book.
3. From each list item, you should also be able to navigate to more information about the book, but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.

## Process

I follow a general process of planning, generating distinct pieces of work (see the "Additional Work" list below), and then crafting a solution. I begin by identifying different components to the application (auth, behavior, etc.), how those will work with the API, and a general user flow. After that I spike a simple solution to make sure I understand how the API will behave, then generate tasks and start to put together the application piece by piece. 

## Design

I originally thought to build a React Application whose "back end" is the Google API. However, after completing an initial spike of the work using vanilla JS, I didn't find a good reason to add a framework, so I'm going to keep things simple and submit this initial.

Since the specifications don't mention any need to store user data, we can begin by creating an interface over this API that meets the above requirements and not worry about crafting a backend.

I originally planned to use "TDD" principles, leaning on Jest for unit testing, but I found that unit testing the DOM scripting proved harder to setup after I committed to my "spiked" work. If I have a chance to revise this further, my next step will be to refactor the code to make it easier to test. I'd also like to write a handful of end-to-end tests that exercise a full "run-through" of the app.

## Authentication

The Get and List methods sent to the Volumes endpoint of the API do not require authentication to use. If we want to add features that require authentication, we have the option of using an API Key or OAuth2 to authenticate our requests to the API. Google requires OAuth2 if we need authorization (user data requests) and since this will be public facing, I will use the API key to keep things a little simpler. This decision implies a little tech debt if we decide to add more features in the future, but I think it's an acceptable trade off to avoid any additional complexities with OAuth for the time being.

## Deploy

I am deploying this to Heroku. Since there isn't any backend stack to this at the moment (ie. Node, Ruby, etc.) I used a slightly hackey approach of creating a php file to utilize the Heroku PHP buildpack. I don't love this, but it got me up and running without needing to bring in any extra libraries, so I think it's acceptable for now.

## Testing

I initially thought I would set up Jest to run unit tests. I got as far as my first fetch request before realizing that Jest runs in Node (of course!) and can't use the Fetch API as a result. There are a couple work arounds, and maybe this is ultimately a smell of my code that it is so dependent on browser I/O to be tested, but for now I'm going to pursue setting up some basic E2E tests to at least get some functional validation up and running before I do any further work.

## Additional Work

Additional work is documented in the "Issues" section of the repository [here](https://github.com/rolfea/book-app/issues).