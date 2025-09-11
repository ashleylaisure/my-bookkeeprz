import BookForm from '@/components/forms/BookForm'
import React from 'react'

const AddBook = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Add A Book</h1>
      
      <div className="mt-9">
        <BookForm />
      </div>
    </>
  )
}

export default AddBook;
