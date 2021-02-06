import React from 'react'
import ReactDOM from 'react-dom'

//importing CSS, when importing css files you always include the file extension.
// But for JS files you dont have to
import './index.css'

// other imports
// { books } is the name of the JS variable in the file './books.js'
import { data } from './books'
import Book from './Book'

// Mini Book Project
function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        // const { img, title, author } = book
        return (
          // key={book.id} the key here is used by react to keep track of event. and it is important to add key
          //   instead of using book={book} you can use a spread operator {...book} and it will do the same job
          //   the spread operator spreads all the properties coming from the book and pass it onto 'props'
          <Book key={book.id} {...book}>
            {' '}
          </Book>
        )
      })}
    </section>
  )
}

// const Image = () => {
//   return (
//     <img
//       src='https://images-na.ssl-images-amazon.com/images/I/51VqaSP4PSL._SX299_BO1,204,203,200_.jpg'
//       alt=''
//     />
//   )
// }

// // style = {{}} means the first braces takes us to JS world, and the second is making JS object
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
//     Dale Carnegie
//   </h4>
// )

// const Title = () => <h1>How To Win Friends And Influence People</h1>
ReactDOM.render(<BookList />, document.getElementById('root'))
