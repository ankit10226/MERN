import React, { useEffect, useState } from 'react'
import styles from "./AddNewItem.module.css"; 
import Button from '../UI/Button/Button'; 
import fetchApi from '../../lib/utils/fetchApi';

const AddNewItem = ({fetchItemData}) => {
    const [newItem,setNewItem] = useState('');
    const [errorBorder,setErrorBorder] = useState(true); 

    const inputHandlerChange = (e) =>{
        let value = e.target.value;
        if(value != ''){ 
            setErrorBorder(true);
        }
        setNewItem(value); 
    }

    const submitFormHandler =async (e) =>{
        try {
            e.preventDefault();         
            if(newItem == ''){
                setErrorBorder(false);
                return;
            } 
            // console.log(newItem); 
            const response = await fetchApi(
                `http://localhost:5000/add-todolist`,
                {
                    method: "POST",
                    body: {
                    payload: newItem,
                    },
                }
            ); 

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            setNewItem('');
            fetchItemData(prev => !prev);
        } catch (error) {
            console.log(error);
        }
         
    };

  return (
        <form onSubmit={submitFormHandler}>
            <div className={`${!errorBorder ? styles.invalid : ''}`}>
                <h3 className='font-semibold text-slate-500 my-2'>Add New Item</h3>
                <input type="text" name="newItem" id="newItem" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={newItem} onChange={inputHandlerChange}/> 
                <Button type="submit">Add Item</Button>
            </div>
        </form>
  )
}

export default AddNewItem
