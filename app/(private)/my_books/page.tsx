import LocalSearch from '@/components/search/LocalSearch'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const books = [
  { id: 1, title: 'Once Upon a Time', author: 'Author 1', genre: 'Fantasy', reviews: 120, rating: 4.5 },
  { id: 2, title: 'The Great Adventure', author: 'Author 2', genre: 'Adventure', reviews: 85, rating: 4.0 },
  { id: 3, title: 'Mystery of the Night', author: 'Author 3', genre: 'Mystery', reviews: 200, rating: 4.8 },
  { id: 4, title: 'Romance in Paris', author: 'Author 4', genre: 'Romance', reviews: 150, rating: 4.3 },
  { id: 5, title: 'Science Wonders', author: 'Author 5', genre: 'Science', reviews: 95, rating: 4.1 },
  { id: 6, title: 'Historical Tales', author: 'Author 6', genre: 'History', reviews: 110, rating: 4.4 }
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
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <div className="flex flex-col">
          <h1 className="h1-bold text-dark100_light900">My Books</h1>
          <p className="text-muted-foreground mt-1">Manage your personal library</p>
        </div>

        <Button variant={"primary"} asChild>
          <Link href={ROUTES.ADD_BOOK}>
            <Plus className="mr-2" size={16} />
            Add Book
          </Link>
        </Button>
      </section>

      <section className="mt-10">
        <LocalSearch 
          route={ROUTES.MY_BOOKS}
          imgSrc={'/icons/search.svg'} 
          placeholder={'Search books by title or author...'} 
          otherClasses={'flex-1'}
          />
      </section>

      <p>Filter dropdown for Genre</p>

      <div>Status Filter</div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex w-full flex-col rounded-lg border border-dark200_light700 bg-dark50_light950 p-4 shadow-sm">
            <h2 className="h2-bold text-dark100_light900">{book.title}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default MyBooksPage