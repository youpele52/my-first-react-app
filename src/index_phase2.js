import React from 'react'
import ReactDOM from 'react-dom'

//importing CSS, when importing css files you always include the file extension.
// But for JS files you dont have to
import './index.css'

// setup variables

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51VqaSP4PSL._SX299_BO1,204,203,200_.jpg',
  author: 'Dale Carnegie',
  title: 'How To Win Friends And Influence People',
}
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/41K68OkTs3L._SX341_BO1,204,203,200_.jpg',
  author: 'Robert Greene',
  title: 'The 48 Laws Of Power',
}

// Mini Book Project
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        // the lorem below is called prop children
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
        optio autem cumque, facere sit saepe, odit officiis quia nesciunt hic
        omnis error voluptatum minima! Ab ratione vel accusantium fugit! Vitae
        officia numquam, doloribus esse unde accusantium eligendi harum
        voluptate ipsam voluptatibus cupiditate tempore alias nostrum soluta
        velit molestiae distinctio possimus quam aperiam dolor quae. Impedit
        repellat quia velit dignissimos! Aliquid, quia atque? Cum doloribus sunt
        magnam odit facere nam reprehenderit explicabo optio hic totam! Ex rerum
        doloribus ipsum veritatis molestias repudiandae fuga, quae, dolor
        cupiditate nam qui veniam vitae! Nostrum ducimus magnam voluptatibus
        eius dicta laudantium velit consequuntur amet, at ab ipsam repudiandae
        voluptates iure nihil quod optio nisi cupiditate tempora distinctio et!
        Asperiores numquam molestiae id vitae quia. Delectus ipsum quisquam
        recusandae repellendus atque autem odio natus animi eos corporis
        veritatis impedit ab sed, voluptatem similique vero, deleniti doloremque
        labore rerum debitis dolor ipsam adipisci rem. Enim, libero.
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  // the children above is the children prop, and the name is special
  //   console.log(props)
  //   destructuring
  //   const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />

      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>

      {children}

      {/* <Image />
      <Title />
      <Author /> */}
    </article>
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
