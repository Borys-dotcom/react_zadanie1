
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Header className="counter-header" title="React Counter App"/>
      <Counter className="counter-body" initValue={12}/>
      <Counter className="counter-body" initValue={108}/>
    </div>
  );
}

export default App;
