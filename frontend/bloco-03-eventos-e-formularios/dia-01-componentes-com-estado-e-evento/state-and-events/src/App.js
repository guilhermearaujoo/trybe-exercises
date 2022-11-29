import './App.css';
import { Button } from './components/Button';
import ButtonText from './components/ButtonText';
import ButtonColor from './components/ButtonColor';

function App() {

  const messages = ['1', '2', '3'];
  return (
    <>
      {messages.map(text => <Button key={text} message={text}/>)}
      <ButtonText message="Botão 4"/>
      <ButtonColor />
    </>
  );
}

export default App;
