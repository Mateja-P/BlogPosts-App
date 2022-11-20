import React, { useEffect, useState } from 'react';
import '../Styles/Blogposts.css';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../Redux/reducer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Blogposts() {
  const dispatch = useDispatch();

  const [blogPostsN, setPosts] = useState([]);
  const blogPosts = blogPostsN.reverse();

  const param = useParams();
  const { category } = param;

  useEffect(() => {
    if (!category) {
      axios
        .get(
          `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`
        )
        .then((res) => setPosts(res.data.resultData));
    } else {
      axios
        .get(
          `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/GetPostByCategory?categoryId=${category}`
        )
        .then((res) => {
          setPosts(res.data.resultData);
        });
    }
  }, []);

  function editPost(id) {
    const payload = {
      purpose: 'Edit',
      postId: id,
    };
    dispatch(setOpenModal(payload));
  }

  function deletePost(id) {
    axios
      .delete(
        `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`
      )
      .then((res) => console.log(res));
  }

  return (
    <div className='blogposts-div__wrapper'>
      {blogPosts.length > 0 ? (
        blogPosts.map((post, index) => {
          return (
            <div
              key={index}
              style={{ marginBottom: '30px', border: '1px solid black' }}
              className='each-post__wrapper'
            >
              <div className='blog-info'>
                <div className='blogs-about-info'>
                  <div className='flex-info'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png' />
                    <span>
                      <h2>{post.title}</h2>
                      <p>Posted {post.createdAt} at 12:00</p>
                    </span>
                  </div>
                </div>
                <div className='blogs-buttons'>
                  <Button
                    text='Edit'
                    padding='5px 15px'
                    purpose='Edit'
                    onClick={() => {
                      editPost(post.id);
                    }}
                  />
                  <Button
                    text='Delete'
                    padding='5px 15px'
                    purpose='Delete'
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  />
                </div>
              </div>
              <div className='blog-content'>
                <p className='posts-content'>{post.text}</p>
              </div>
              <div className='blog-images'>
                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png' />
                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png' />
                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png' />
              </div>
            </div>
          );
        })
      ) : (
        <h2 className='alternative-text'>No posts yet</h2>
      )}
    </div>
  );
}

export default Blogposts;
