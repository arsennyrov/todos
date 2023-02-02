import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 className='flex text-3xl justify-center font-bold'>
               Посты не найдены! 
            </h1>
        )
    }

    return (
        <div>
            <h1 className='flex text-3xl justify-center font-bold'>
                {title}
            </h1>
            {posts.map((post, index) => 
                <div
                    // className='animate-ping flex'
                    key={post.id}
                    timeout={500}
                >
                <PostItem 
                    remove={remove}
                    number={index + 1}
                    post={post} />
                </div>                            
            )} 
        </div>
    );
};

export default PostList;