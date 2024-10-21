import React from 'react' 
import AddedItemList from './AddedItemList';

const AddedItems = ({addedItemList,getDeletingId}) => {
    if(addedItemList.length === 0){
        return <h2 className='font-semibold text-slate-500 text-center tracking-wide'>Data Not Found!</h2>;
    }

    const getItemDeletingId = (deletingId) =>{
        getDeletingId(deletingId); 
    }
    return (
        // style={{minHeight:'240px',maxHeight:'240px',overflowY:'scroll'}}
        <ul>
        {addedItemList.map((item) => (
            <AddedItemList key={item.id} id={item.id} items={item.item} getItemDeletingId={getItemDeletingId}/>
            ))}
        </ul>
    )
}

export default AddedItems
