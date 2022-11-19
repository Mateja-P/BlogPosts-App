import './App.css';
import Header from './Components/Header';
import Messages from './Components/Messages';
import Button from './Components/Button';
import Categories from './Components/Categories';
import Blogposts from './Components/Blogposts';

function App() {
  return (
    <div className='App'>
      <div className='header-grid__div'>
        <Header />
      </div>
      <div className='messages-grid__div'>
        <Messages />
      </div>
      <div className='button-grid__div'>
        <Button />
      </div>
      <div className='categories-grid__div'>
        <Categories />
      </div>
      <div className='blogposts-grid__div'>
        <Blogposts />
      </div>
    </div>
  );
}

export default App;
