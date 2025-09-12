import Header from '@/components/navigation/Header'
import BooksTable from '@/components/tables/BooksTable'
import ROUTES from '@/constants/routes'
import React from 'react'

const books: Books[] = [
  {
    id: "1",
    userId: "user-123", // Example user ID
    title: "The Name of the Wind",
    genre: "High fantasy",
    rating: 4.8,
    status: "read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-01-10"),
    updatedAt: new Date(),
  },
  {
    id: "2",
    userId: "user-123",
    title: "Project Hail Mary",
    genre: "Hard sci-fi",
    rating: 4.7,
    status: "read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date(),
  },
  {
    id: "3",
    userId: "user-123",
    title: "Circe",
    genre: "Mythic fantasy",
    rating: 4.6,
    status: "currently_reading" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-07-05"),
    updatedAt: new Date(),
  },
  {
    id: "4",
    userId: "user-123",
    title: "Mistborn: The Final Empire",
    genre: "Heroic fantasy",
    rating: 4.7,
    status: "want_to_read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-09-15"),
    updatedAt: new Date(),
  },
  {
    id: "5",
    userId: "user-123",
    title: "The Midnight Library",
    genre: "Contemporary fiction",
    rating: 4.2,
    status: "paused" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-05-02"),
    updatedAt: new Date(),
  },
  {
    id: "6",
    userId: "user-123",
    title: "Educated",
    genre: "Autobiography/Memoir",
    rating: 4.5,
    status: "read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2022-11-01"),
    updatedAt: new Date(),
  },
  {
    id: "7",
    userId: "user-123",
    title: "The House in the Cerulean Sea",
    genre: "Fantasy romance (Romantasy)",
    rating: 4.9,
    status: "read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2022-09-10"),
    updatedAt: new Date(),
  },
  {
    id: "8",
    userId: "user-123",
    title: "Atomic Habits",
    genre: "Self-help",
    rating: 4.6,
    status: "read" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2021-08-01"),
    updatedAt: new Date(),
  },
  {
    id: "9",
    userId: "user-123",
    title: "Fourth Wing",
    genre: "Fantasy romance (Romantasy)",
    rating: 4.8,
    status: "currently_reading" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-08-15"),
    updatedAt: new Date(),
  },
  {
    id: "10",
    userId: "user-123",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    genre: "Literary fiction",
    rating: 4.3,
    status: "dnf" as BookStatus,
    format: "physical_hardcover",
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date(),
  },
];


const MyBooksPage = () => {
  // get books from db
  return (
    <>
      <Header
          title="My Books"
          subtitle="Manage your personal book collection"
          href={ROUTES.ADD_BOOK}
          buttonText="Add Book"
      />
      {/* pass books as props */}
      <BooksTable books={books} />
    </>
  )
}

export default MyBooksPage
