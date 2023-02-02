import React, { useEffect, useMemo, useRef, useState } from 'react'

import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/MyButton';
import MyModal from '../components/UI/MyModal';
import MySelect from '../components/UI/MySelect';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/Pagination';
import { useObsever } from '../hooks/useObsever';

function Posts() {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts( [...posts, ...response.data] )
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  } )

  useObsever(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page+1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]) 

  const createPost = (newPost) => { 
    setPosts([...posts, newPost])
  } 
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    // fetchPosts(limit, page)
  }

  return (  
    <div className='mx-12'>
      <div className='mt-2'>
        <MyButton 
          onClick={() => setShowModal(true)}>
            Создать новый пост
        </MyButton>
      </div>

      <MyModal showModal={showModal} setShowModal={setShowModal}>
        <PostForm create={createPost} />
      </MyModal>

      <div>
        <PostFilter 
          filter={filter} 
          setFilter={setFilter}
        />
      </div>
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          {value: 5, name: '5'},
          {value: 8, name: '8'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать все'},
        ]}
      />  
      
        {postError &&
          <h1>Произошла ощибка ${postError}</h1>
        }
        {isPostsLoading &&
          <div className='flex justify-enter mt-[50px]'><Loader /></div>
        }
        <PostList 
            remove={removePost} 
            posts={sortedAndSearchedPosts} 
            title={'Список постов 1'} 
          />
          <div ref={lastElement} className='h-[10px] bg-white' />

        <Pagination 
          page={page} 
          changePage={changePage} 
          totalPages={totalPages} 
        />
    </div>
  ); 
}

export default Posts;
 