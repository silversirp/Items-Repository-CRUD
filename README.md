# List of Items Web App

## Description
This is a web application for managing a list of items. Users can view a list of items, view details about individual items, add new items (if signed in), and delete existing items (if signed in).

## Installation
1. Clone the repo
2. Copy `.env.example` to `.env` and fill in the values
3. Run `npm install` to install the dependencies
4. Run `npx prisma db push` to create the database tables
5. Run `npm start` to start the server
6. Go to `localhost:3001` to see the app

## Usage
1. Navigate to 'http://localhost:3000/items' to view the list of items.
2. Click on an item to view its details.
3. If signed in, click the "Add Item" button to add a new item.
4. If signed in, click the "Edit" button on an item to edit its details.
5. If signed in, click the "Delete" button on an item to delete it.

## Tests
1. Install dependencies with 'npm install'
2. Run the server with 'npm start'
3. Run the tests with 'npm test'

## Technologies Used
* TypeScript
* Express
* SQLite
* Prisma ORM
* Cypress
* Pug
* Swagger

## Contributors
* Silver Sirp silver.sirp@voco.ee
* ChatGPT chat.openai.com

## License
This project is licensed under the MIT License. See LICENSE file for details.

### Documentation

The documentation is available at [http://localhost:3001/docs](http://localhost:3001/docs)