# Books API App

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

I will build a React Application whose "back end" is the Google API. Since there specifications don't mention any need to store user data, we can begin by creating an interface over this API that meets the above requirements and not worry about crafting a backend. By using React in a modular way, we can always build a backend at a later point it we want to store user data, etc.

## Authentication

We have the option of using an API Key or OAuth2 to authenticate our requests to the API. Google requres OAuth2 if we need authorization (user data requests) and since this will be public facing, I use the API key to keep things a little simpler. This decision implies a little tech debt if we decide to add more features in the future, but I think it's an acceptable trade off to avoid any additional complexities with OAuth for the time being.

I turned on the Google Books API on my account and got a key, which is here: https://console.developers.google.com/apis/credentials