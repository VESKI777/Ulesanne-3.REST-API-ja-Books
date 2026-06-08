# Ulesanne-3.REST-API-ja-Books

Project Structure

backend/

│

├── prisma/

│ ├── schema.prisma

│ ├── migrations/

│ └── seed.ts

│

├── src/

│ ├── controllers/

│ │ ├── book.controller.ts

│ │ ├── index.ts

│ │ └── review.controller.ts

│ ├── data/

│ │ ├── authors.ts

│ │ ├── books.ts

│ │ ├── genres.ts

│ │ ├── index.ts

│ │ ├── publishers.ts

│ │ ├── reviews.ts

│ │

│ ├── lib/

│ │ └── prisma.ts

│ │

│ ├── middleware/

│ │ ├── errorHandler.ts

│ │ ├── index.ts

│ │ └── validate.ts

│ │

│ ├── models/

│ │ ├── Author.ts

│ │ ├── Book.ts

│ │ ├── Genre.ts

│ │ ├── index.ts

│ │ ├── Publisher.ts

│ │ └── Review.ts

│ │

│ ├── routes/

│ │ ├── book.routes.ts

│ │ ├── index.ts

│ │ └── review.routes.ts

│ │

│ ├── services/

│ │ ├── book.service.ts

│ │ ├── index.ts

│ │ └── review.service.ts

│ │

│ ├── validators/

│ │ ├── book.validator.ts

│ │ └── review.validator.ts

│ │

├── .env.example

├── .gitignore

├── package-lock.json

├── package.json

├── prisma.config.ts

├── test-api.http

├── tsconfig.json

└── README.md

Installation
Clone the repository and navigate to the backend folder:

git clone https://github.com/VESKI777/Ulesanne-3.REST-API-ja-Books.git
cd Ulesanne-3.REST-API-ja-Books/backend

Install dependencies using npm:
npm install

Start the server in development mode:
npm run dev

This command uses nodemon to automatically restart the server when changes are made. The server will start on the default port—3000. If the port is already in use, you can override it: export PORT=3001 && npm run dev.

The API will be available at:
http://localhost:3000

✅ Testing
After starting, the server will print a full list of endpoints to the console that you can use:

GET /api/v1/books — get all books.

GET /api/v1/books/:id — retrieve a book by ID.

POST /api/v1/books — add a new book.

PUT /api/v1/books/:id — update an existing book.

DELETE /api/v1/books/:id — delete a book.

GET /api/v1/books/:id/reviews — retrieve all reviews for a book.

GET /api/v1/books/:id/average-rating — retrieve the book’s average rating.

GET /api/v1/reviews/:id — retrieve a review by ID.

POST /api/v1/books/:bookId/reviews — add a new review to a book.

PUT /api/v1/reviews/:id — update a review.

DELETE /api/v1/reviews/:id — delete a review.
