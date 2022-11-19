import React from 'react';
import '../Styles/Blogposts.css';

function Blogposts() {
  const blogPosts = [
    {
      title: 'blogpost 1',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 2',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 3',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'blogpost 4',
      posted: '2022',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ];

  return (
    <div className='blogposts-div__wrapper'>
      {blogPosts.map((post, index) => {
        return (
          <div
            key={index}
            style={{ marginBottom: '30px', border: '1px solid black' }}
          >
            <p>{post.title}</p>
            <p>{post.posted}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blogposts;
