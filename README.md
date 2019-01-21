# Books API App

Visit [here](https://rolfe-books-app.herokuapp.com/) to see the deployed version of this app.

## Requirements

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

I am following a general process of planning, generating distinct pieces of work, and then crafting a solution. I will begin by identifying different components to the application (auth, behavior, etc.), how those will work with the API, and a general user flow. After that I will probably spike a simple solution to make sure I understand how the API will behave, then generate tasks and start to put together the application piece by piece. I'm going to use "TDD" principles, leaning on Jest for unit testing. To keep things simple, I'm not planning on incorporating any "end to end" testing by way of browser scripting, a la Selenium, although if this were going to production, I might prioritize writing a few of those once I had the basic UI set up.

## Design

I originally thought to build a React Application whose "back end" is the Google API. However, after completing an initial spike of the work using vanilla JS, I didn't find a good reason to add a framework, so I'm going to keep things simple and submit this initial.

Since the specifications don't mention any need to store user data, we can begin by creating an interface over this API that meets the above requirements and not worry about crafting a backend.

## Authentication

The Get and List methods sent to the Volumes endpoint of the API do not require authentication to use. If we want to add features that require authentication, we have the option of using an API Key or OAuth2 to authenticate our requests to the API. Google requires OAuth2 if we need authorization (user data requests) and since this will be public facing, I will use the API key to keep things a little simpler. This decision implies a little tech debt if we decide to add more features in the future, but I think it's an acceptable trade off to avoid any additional complexities with OAuth for the time being.

## Deploy

I am deploying this to Heroku. Since there isn't any backend stack to this at the moment (ie. Node, Ruby, etc.) I used a slightly hackey approach of creating a php file to utilize the Heroku PHP buildpack. I don't love this, but it got me up and running without needing to bring in any extra libraries, so I think it's acceptable for now.

## Testing

## Additional Work

* ~~When I click the "Additional Info" link, Then the link opens a new tab~~

* ~~The Content should be centered on the page~~

* ~~When my search returns no results, Then a message informs me of this~~

* ~~bug when no image available for a text (search for `these are the things`) get undefined error in console~~

* ~~Book images are inconsistent~~

* ~~some horizontal line to distinguish between results~~

* JS Refactor

  * ~~When I enter a search term and press the enter key on my keyboard, then the search executes~~

  * ~~same as above - refactor "on click" to an event listener and pull that JS out into a separate file~~

  * Build unit tests around the JS    

* When I search, I can select between author and title searches

* Responsive Design considerations as I add styling