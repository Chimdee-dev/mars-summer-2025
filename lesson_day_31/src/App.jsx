import './App.css'
import Header from './components/Header';
import Profile from './components/Profile';


function App() {
let name = 'Chimedo';
let element = (<h1>Hello, {name} </h1>)

  return (
    <>
    <Header/>
          <h1 className='text-center text-5xl font-semibold '>Hello React</h1>
      <h2>My name is {name}</h2>
      {element}
      <Profile img= {"images/profile1.jpg"} name= {"John"} age = {"30"} gender={"Male"} email={"John@gmail.com"}/>
      <Profile img= {"images/profile2.jpg"} name= {"Alex"} age = {"20"} gender={"Male"} email={"Alex@gmail.com"}/>
      <Profile img= {"images/profile3.jpg"} name= {"Emily"} age = {"35"} gender={"Female"} email={"Emily@gmail.com"}/>
    </>
  )
}

export default App
