const Book = (props) => {
  // the children above is the children prop, and the name is special
  //   console.log(props)
  //   destructuring
  //   const { img, title, author } = props.book //if you using a spread operator you dont have to use this
  const { img, title, author } = props
  //   react events basics
  const clickHandler = (e) => {
    console.log(e) //event
    console.log(e.target) //event target
    alert(`You clicked on "${title}"!`)
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      {/* inline click event below */}
      <h1
        onClick={() => {
          alert(`You inline clicked on "${title}"!`)
        }}
      >
        {title}
      </h1>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>
        {' '}
        Click Me
      </button>

      {/* the func  complexExample only runs when the buttton is clicked */}
      <button type='button' onClick={() => complexExample(author)}>
        {' '}
        More complex example
      </button>

      {/* <Image />
      <Title />
      <Author /> */}
    </article>
  )
}

export default Book
