import React from 'react';
import MyButton from './UI/MyButton';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostItem = ({post, number, remove}) => {

  const navigate = useNavigate()

  return (
        <div className='flex justify-between w-[100%] my-2 border-2 
        border-teal-700 rounded-md'>
          <div className='my-1 mx-2'>
              <strong>{post.id}. {post.title}</strong>
            <div className='flex'>
                <p>{post.body}</p>
            </div>
          </div>
          <div className='w-[25vw] ml-1 flex justify-end flex-nowrap'>
            <div className='h-[5vh] flex item-right my-auto'>
              <Link className='px-3 h-[5vh] align-middle text-[1rem] p-1  
                border-2 border-gray-300 rounded-md text-white bg-sky-500 
                hover:md:bg-sky-700 backdrop-opacity-1' key={post.id} to={`/posts/${post.id}`} >
                Открыть
              </Link>
            </div>
            <div className='h-[5vh] flex item-right my-auto mr-[1vw]'>
              <MyButton onClick={() => remove(post)}>
                Удалить
              </MyButton>
            </div>
          </div>
        </div>
    );
}; 

export default PostItem;