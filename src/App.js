import './App.css';
import Stories from '../src/components/stories';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <div className="side-bar-top">
          top
        </div>
        <div className="side-bar-middle">
          middle
        </div>
        <div className="side-bar-bottom">
          bottom
        </div>
      </div>
      <div className="main-content">
        <div className="header flex-column-center">
          <Stories/>
        </div>
        <div className="body flex-column-center">
          body
        </div>
        <div className="footer flex-column-center">
          footer
        </div>
      </div>
    </div>
  );
}

export default App;
