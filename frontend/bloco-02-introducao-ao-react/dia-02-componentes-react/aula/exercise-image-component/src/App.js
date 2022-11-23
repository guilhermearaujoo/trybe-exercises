import './App.css';
import Greeting from './Greeting';
import Image from './Image';
import staringCat from './staringCat.jpg';
import List from './List';

function App() {

  const list = ['beans', 'bananas', 'meat', 'rice', 'chicken', 'salad']
  
  return (
    <>
      <Greeting name="Guilherme" lastName="Araujo" />
      <Image source= { staringCat } alternativeText="Cute cat staring"/>
      <List list={list}/>
    </>
  );
}

export default App;
