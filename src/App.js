import './App.css';
import Header from './Components/Header';
import Messages from './Components/Messages';
import Button from './Components/Button';
import Categories from './Components/Categories';
import Blogposts from './Components/Blogposts';
import Modal from './Components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal, setCategory } from './Redux/reducer';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state.appInfo.modalInfo);

  function addPost() {
    const payload = {
      purpose: 'Insert',
    };
    dispatch(setOpenModal(payload));
  }

  useEffect(() => {
    axios
      .get(`https://frontend-api-test-nultien.azurewebsites.net/api/Category`)
      .then((res) => {
        dispatch(setCategory(res.data.resultData));
      });
  }, []);

  return (
    <Router>
      <div className='App'>
        {openModal ? <Modal /> : ''}
        <div className='header-grid__div'>
          <Header />
        </div>
        <div className='messages-grid__div'>
          <Messages />
        </div>
        <div className='categories-grid__div'>
          <Categories />
        </div>
        <div className='button-grid__div'>
          <Button
            text='Add post'
            padding='5px 40px'
            purpose='Insert'
            onClick={() => {
              addPost();
            }}
          />
        </div>
        <div className='blogposts-grid__div'>
          <Routes>
            <Route path='/' element={<Blogposts />} />
            <Route path='/category/:category' element={<Blogposts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
