import React, { useEffect, useState } from 'react';
import '../Styles/Modal.css';
import Button from './Button';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from '../Redux/reducer';
import axios from 'axios';

function Modal() {
  const dispatch = useDispatch();
  const { modalPurpose, postId } = useSelector(
    (state) => state.appInfo.modalInfo
  );
  const { categoryList } = useSelector((state) => state.appInfo);

  const [usersTitle, setTitle] = useState('');
  const [titleHandler, setTitleHandler] = useState('');

  const [usersText, setText] = useState('');
  const [textHandler, setTextHandler] = useState('');

  const [usersCategory, setCategory] = useState('');
  const [categoryHandler, setCategoryHandler] = useState('');

  useEffect(() => {
    if (modalPurpose === 'Edit') {
      axios
        .get(
          `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${postId}`
        )
        .then((res) => {
          setTitle(res.data.resultData.title);
          setText(res.data.resultData.text);
          setCategory(res.data.resultData.categoryId);
        });
    }
  }, []);

  function confirmChanges() {
    if (usersTitle !== '') {
      setTitleHandler('');
      if (usersText !== '') {
        setTextHandler('');
        if (usersCategory !== '') {
          setCategoryHandler('');
          const payload = {
            id: postId,
            title: usersTitle,
            text: usersText,
            categoryId: usersCategory,
          };
          axios
            .put(
              `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${postId}`,
              payload
            )
            .then(() => dispatch(setCloseModal()));
        } else {
          setCategoryHandler('Category must be chosen');
        }
      } else {
        setTextHandler('Text field cant be empty');
      }
    } else {
      setTitleHandler('Title field cant be empty');
    }
  }

  function submitForm() {
    if (usersTitle == '') {
      setTitleHandler('Title field cant be empty');
    } else {
      setTitleHandler('');
    }
    if (usersText == '') {
      setTextHandler('Text field cant be empty');
    } else {
      setTextHandler('');
    }
    if (usersCategory === '') {
      setCategoryHandler('Category must be chosen');
    } else {
      setCategoryHandler('');
    }

    const payload = {
      title: usersTitle,
      text: usersText,
      categoryId: usersCategory,
    };

    if (usersTitle != '' && usersText != '' && usersCategory != '') {
      axios
        .post(
          `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`,
          payload
        )
        .then(() => dispatch(setCloseModal()));
    }
  }

  return (
    <div className='modal-popup'>
      <div className='modal-overlay'></div>
      <div className='modal-content'>
        <div
          className='close-modal__div'
          onClick={() => {
            dispatch(setCloseModal());
          }}
        >
          <CloseIcon />
        </div>
        {modalPurpose === 'Edit' ? <h2>Edit post</h2> : <h2>Add post</h2>}
        <form
          onSubmit={(e) => e.preventDefault()}
          encType='multipart/form-data'
        >
          <div className='input__wrapper'>
            <p className='error_p'>* {titleHandler}</p>
            <input
              className={titleHandler != '' ? 'incorrect-input' : undefined}
              type='text'
              placeholder='Title'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              defaultValue={modalPurpose === 'Edit' ? usersTitle : undefined}
            />
          </div>
          <div className='input__wrapper'>
            <p className='error_p'>* {textHandler}</p>
            <textarea
              className={textHandler != '' ? 'incorrect-input' : undefined}
              placeholder='Text'
              onChange={(e) => {
                setText(e.target.value);
              }}
              defaultValue={modalPurpose === 'Edit' ? usersText : undefined}
            ></textarea>
          </div>

          <div className='input__wrapper'>
            <p className='error_p'>* {categoryHandler}</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className={categoryHandler != '' ? 'incorrect-input' : undefined}
            >
              <option value=''>Select category</option>
              {categoryList.map((category) => {
                return (
                  <option
                    key={category.id}
                    selected={usersCategory == category.id ? true : false}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <Button
            text={modalPurpose === 'Edit' ? 'Confirm' : 'Add post'}
            padding='5px 10px'
            onClick={() =>
              modalPurpose == 'Edit' ? confirmChanges() : submitForm()
            }
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
