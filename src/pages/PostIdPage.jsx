import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';

const PostIdPage = () => {
    const { id } = useParams(0);
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    console.log('id', id);
    useEffect(() => {
        fetchPostById(id)
        fetchComments(id)
    }, [])

    console.log('post', post);
    console.log('comments', comments);
    return (
        <>
            <div>
                <h3 className='p-3 flex text-xl justify-center font-medium'>{post.id}.{post.title}</h3>
                <div className='px-1'>{post.body}</div>
            </div>
            <div className='m-3'>
                <h3 className='font-bold'>Комментарии</h3>
                <div>
                    {comments.map(comm => 
                    <div className='my-4' key={id+comm.email}>
                        <h5 className='my-1 font-medium'>{comm.email}</h5>
                        <div className='my-1'>{comm.body}</div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PostIdPage;