import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ page, changePage, totalPages }) => {
    let pagesArray = getPagesArray(totalPages)    
    return ( 
        <div className='flex m-1'>
          {pagesArray.map(p =>
            <span 
              onClick={() => changePage(p)}
              key={p} 
              className={page === p ? 'mr-1 p-[10px] ${page} === p) ? border-[2px] border-orange-500 cursor-pointer'
                                        : 'mr-1 p-[10px] ${page} === p) ? border-[1px] border-sky-500 cursor-pointer'
          }>{p}</span>
          )}
        </div>
    );
};
 
export default Pagination;