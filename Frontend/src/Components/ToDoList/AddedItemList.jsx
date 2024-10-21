import React from 'react'

const AddedItemList = ({id,items,getItemDeletingId}) => {
    const getDeletingId = (event) =>{        
        const deletingId = event.target.getAttribute('data-id');
        getItemDeletingId(deletingId);
    }
    return (
        <li>
            <div className='bg-slate-400 text-white rounded-md px-2 py-1 my-2 font-semibold text-center cursor-pointer' data-id={id} onClick={getDeletingId}> 
                {items}
            </div>
        </li>
    )
}

export default AddedItemList
