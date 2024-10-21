import React, { useEffect, useState } from 'react'
import AddedItems from './AddedItems'; 
import AddNewItem from './AddNewItem';
import fetchApi from '../../lib/utils/fetchApi';

const itemListData = [];
const ToDoList = () => {
    const [fetchToDoList, setFetchToDoList] = useState(false);
    const [addedItemList, setAddedItemList] = useState(itemListData);
    // const getAddedItem = (newAddedItem) => {
    //     // console.log(newAddedItem);
    //     let count = addedItemList.length;
    //     const itemList = {
    //         id : ++count,
    //         item : newAddedItem
    //     }
    //     setAddedItemList((prevState) => {
    //         return [itemList, ...prevState];
    //     }); 
    // };
     
    const getDeletingId = async (id) =>{
        // const filteredArray = addedItemList.filter(item => parseInt(item.id) !== parseInt(id)); 
        // setAddedItemList(filteredArray);
        try { 
            const response = await fetchApi(
                `http://localhost:5000/remove-todolist`,
                {
                    method: "POST",
                    body: {
                    payload: id,
                    },
                }
            ); 

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            setFetchToDoList(prev => !prev);
            
        } catch (error) {
            console.log(error);
        }
    }

    const fetchItemData = (flag) => {
        setFetchToDoList(flag);
    };

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetchApi(`http://localhost:5000/get-todolist`); 
          if (response.ok) {
            const data = await response.json();
            setAddedItemList(data.data); 
        }
        };
      
        fetchData();
      }, [fetchToDoList]);
      
    return (
        <div className="font-sans w-screen h-screen flex justify-center items-center flex-col">
            <div className="w-1/2 bg-white p-5 rounded-lg">
                <AddNewItem fetchItemData={fetchItemData}/>
            </div>
            <br/>
            <div className="w-1/2 bg-white p-5 rounded-lg">          
                <AddedItems addedItemList={addedItemList} getDeletingId={getDeletingId}/>
            </div>
        </div>
    );
}

export default ToDoList 
