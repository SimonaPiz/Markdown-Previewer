//import logo from './logo.svg';
import './App.css';
import MarkdownConverter from './features/MarkdownConverter/MarkdownConverter';

function App() {
  return (
    <div className="App">
      <h1>
        Markdown Previewer 
        <span className="material-symbols-outlined rotate">
          autorenew
        </span>
      </h1>
      <MarkdownConverter />
    </div>
  );
}

export default App;
