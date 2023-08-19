import Slides from './components/Slides';
import './App.css';

function App({slides}) {
  return (
<div>
      <div className='App'>
        <Slides slides={slides} />
      </div>
    </div>
  );
}

export default App;
