import React from 'react'
import ReactDOM from 'react-dom'

// JSX Rules
// 1. Return single element eg <div>nest every other element inside here</div>
// 2. use camelCase for HTML attribute className instead of class, because class is already a JS keyword
// 3. close every element, including images
// 4. dont do div div div div

// this is our component and for react to know that this function is actually a component the first letter has to be capitalized
// function Greeting (){

//     // this function returns a JSX, this is not a mere html
//     return <h4> This is my first react component </h4>
// }
// const Greeting = () =>{
//     return (
//         <div className = 'Some-class'>
//             <h1>Hello World One more Time</h1>
//             <h2>My react app is getting complicated</h2>
//             <section>
//                 <p> This is me just flexing html nesting...</p>
//             </section>
//         </div>
//     )
// }

// const Greeting = () => {
//     // the args passed in this function below are
//     // 1. the element you want to create ie h1
//     // 2. is the prop
//     // 3. the child or content of the element
//     return React.createElement('h1', {}, 'Hello world again!')
// }

// NESTED COMPONENTS, react tool

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>Jon Doe</h2>
const Message = () => <p>This is my message</p>

//  here we inject the component into the index.html found in public folder
// in this render function we pass in two args
// 1. the component we are going to render, and place it inside opening and closing tags < name_of_component_to_be_rendered />
// 2. where we want that component to be rendered
ReactDOM.render(<Greeting />, document.getElementById('root'))
