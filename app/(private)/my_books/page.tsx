import StatusFilter from '@/components/filters/StatusFilter'
import LocalSearch from '@/components/search/LocalSearch'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import { create } from 'domain'
import { notBetween } from 'drizzle-orm'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const books = [
  { id: "1", title: 'Once Upon a Time', author: 'Author 1', genre: 'Fantasy', reviews: 120, rating: 4.5, status: "want-to-read", createdAt: new Date('2023-10-01'), updatedAt: new Date() },
  { id: "2", title: 'The Great Adventure', author: 'Author 2', genre: 'Adventure', reviews: 85, rating: 4.0, status: "currently-reading", createdAt: new Date('2024-10-02'), updatedAt: new Date() },
  { id: "3", title: 'Mystery of the Night', author: 'Author 3', genre: 'Mystery', reviews: 200, rating: 4.8, status: "read", createdAt: new Date('2023-10-03'), updatedAt: new Date() },
  { id: "4", title: 'Romance in Paris', author: 'Author 4', genre: 'Romance', reviews: 150, rating: 4.3, status: "read", createdAt: new Date('2023-10-04'), updatedAt: new Date() },
  { id: "5", title: 'Science Wonders', author: 'Author 5', genre: 'Science', reviews: 95, rating: 4.1, status: "read", createdAt: new Date('2024-10-05'), updatedAt: new Date() },
  { id: "6", title: 'Historical Tales', author: 'Author 6', genre: 'History', reviews: 110, rating: 4.4, status: "dnf", createdAt: new Date('2023-10-06'), updatedAt: new Date() },
  { id: "7", title: 'Fantasy Realm', author: 'Author 7', genre: 'Fantasy', reviews: 130, rating: 4.6, status: "want-to-read", createdAt: new Date('2025-10-07'), updatedAt: new Date() },
  { id: "8", title: 'Adventure Awaits', author: 'Author 8', genre: 'Adventure', reviews: 75, rating: 3.9, status: "currently-reading", createdAt: new Date('2023-10-08'), updatedAt: new Date() },
  { id: "9", title: 'Mystery Unveiled', author: 'Author 9', genre: 'Mystery', reviews: 180, rating: 4.7, status: "read", createdAt: new Date('2025-10-09'), updatedAt: new Date() },
  { id: "10", title: 'Love Stories', author: 'Author 10', genre: 'Romance', reviews: 140, rating: 4.2, status: "want-to-read", createdAt: new Date('2025-10-10'), updatedAt: new Date() },
]

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const MyBooksPage = async ({searchParams}: SearchParams) => {
  const {query = ""} = await searchParams;

  const filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(query?.toLowerCase()) 
    || book.author.toLowerCase().includes(query?.toLowerCase()));

  return (
    <>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Books</h1>
            <p className="text-muted-foreground mt-1">Manage your personal library</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant={"primary"} asChild>
              <Link href={ROUTES.ADD_BOOK}>
                <Plus className="mr-2" size={16} />
                Add Book
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mt-10">
        <LocalSearch 
          route={ROUTES.MY_BOOKS}
          imgSrc={'/icons/search.svg'} 
          placeholder={'Search books by title or author...'} 
          otherClasses={'flex-1'}
          />
      </section>

      <p>Filter dropdown for Genre</p>

      <StatusFilter books={filteredBooks}/>

    </>
  )
}

export default MyBooksPage