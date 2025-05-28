import React, { useState } from 'react'
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';
const initialState = [
  {
      'id':1,
      'name':'Milk',
      'price':50,
      'description':'Amul milk good for health'
  },
  {
      'id':2,
      'name':'Bread',
      'price':40,
      'description':'Wibs Wheat bread'
  },
  {
      'id':3,
      'name':'Cookies',
      'price':150,
      'description':'Good Day chocolate chip cookies'
  },
  {
      'id':4,
      'name':'Potatoes',
      'price':60,
      'description':'Fresh and organic'
  },
]

export default function MainComponent() {
  const [items, setItems] = useState(initialState);
  const [showAddItem, setShowAddItem] = useState(false);

  const addItem = (newitem)=>{
    console.log(newitem);
    newitem.id = items.length+1;
    setItems([...items, newitem])
  }

  const deleteItem = (itemid)=>{
    console.log(itemid)
    const newItems = items.filter(item => item.id !== itemid);
    setItems(newItems);
  }
  
  const editItem =(item)=>{
    console.log('editing', item)
    const updatedItems = items.map(obj=> obj.id === item.id ? item : obj);
    setItems(updatedItems)
  }
  
  return (
    <div>
      <h2 className="App">Grocery List</h2>
      <div className="container">
        <div class="mb-3">
        <button onClick={()=>setShowAddItem(!showAddItem)}>Add New Item</button>
        </div>
        {showAddItem && 
        <GroceryForm addItem={addItem}/>
        }
        <GroceryList items={items} deleteItem={deleteItem} editItem={editItem}/>
      </div>
    </div>
  );
}
