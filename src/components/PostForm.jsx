import React, { useState } from 'react';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    
    return (
        <div>
            <form className='m-3'>
                <MyInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="Название поста" />
                <MyInput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder="Описание поста" />
                <MyButton 
                    onClick={addNewPost} 
                    disabled={false} 
                    children={'Создать пост'} />
            </form>
        </div>
    );
};

export default PostForm;