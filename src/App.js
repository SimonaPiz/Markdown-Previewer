//import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';

function App() {
  return (
    <div className="App">
      <h1>
        Markdown Previewer 
        <span className="material-symbols-outlined rotate">
          autorenew
        </span>
      </h1>
      <div className="converter">
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
