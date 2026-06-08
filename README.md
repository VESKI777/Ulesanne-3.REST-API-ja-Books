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

