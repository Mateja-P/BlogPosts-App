import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';
import { useSelector } from 'react-redux';

function Categories() {
  const [visibleCategory, setVisibleCategory] = useState(false);
  const { categoryList } = useSelector((state) => state.appInfo);

  return (
    <div className='categories-div__wrapper'>
      <div className='categories-content'>
        <div className='toggle-div__wrapper'>
          <h4>Blog categories</h4>
          <div
            className={
              visibleCategory ? 'toggle-category active' : 'toggle-category'
            }
            onClick={() => {
              setVisibleCategory(!visibleCategory);
            }}
          >
            <div
              className={
                visibleCategory ? 'animation-div active' : 'animation-div'
              }
            ></div>
          </div>
        </div>
        <div
          className={
            visibleCategory ? 'categories-options active' : 'categories-options'
          }
        >
          {categoryList.length > 0
            ? categoryList.map((category, index) => {
                return (
                  <Link
                    to={`/category/${category.id}`}
                    className='filter-option'
                    key={index}
                  >
                    {category.name}
                  </Link>
                );
              })
            : 'Insert Categories'}
        </div>
      </div>
    </div>
  );
}

export default Categories;
