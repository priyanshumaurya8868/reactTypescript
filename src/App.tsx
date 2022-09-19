import "./App.css";
import Todos from "./components/Todos";


const DUMMY_LIST =  [
  'Learn React',
  'Learn Typescript',
  'Learn NextJs'
]

function App() {
  return (
    <div className="App">
      <Todos items={DUMMY_LIST} />
    </div>
  );
}

export default App;
