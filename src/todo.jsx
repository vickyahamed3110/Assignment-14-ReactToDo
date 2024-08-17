import React, { useEffect, useState } from 'react';
import { deleteData, getallData, editData } from './api';

const CardList = ({render, setRender, formData, setFormData, setEditId, setEditMode}) => {
  // Sample data
  const [cards, setCards] = useState([]);

const changeCompleted = async(id) => {
  await editData({status:"completed"}, id)
  setRender(render + 1)
}

const changeNotCompleted = async(id) => {
  await editData({status:"not completed"}, id)
  setRender(render + 1)
}

const completedItems = async() => {
  const data = await getallData()
  const filteredItems = data.filter((card)=> card.status =="completed")
  setCards(filteredItems)
}


const NotCompletedItems =async () => {
  const data = await getallData()
  const filteredItems = data.filter((card)=> card.status =="not completed")
  setCards(filteredItems)
}

const getTodos = async() => {
  const data = await getallData()
  setCards(data)
}
 useEffect(() => {
getTodos()
 },[render]
)

  // Function to handle edit button click
  const handleEdit = (id, title, description) => {
    // Logic for editing a card
    console.log('Edit card with id:', id);
    setFormData({title, description})
    setEditId(id)
    setEditMode(true)
  };

  // Function to handle delete button click
  const handleDelete = async(id) => {
    await deleteData(id)
    setRender(render + 1)  
  };

  return (
    <div className="container mt-4">
      <button className='btn me-2 btn-dark' onClick={completedItems}>Completed</button>
      <button className='btn me-2 btn-dark' onClick={NotCompletedItems}>Not Completed</button>
      <button className='btn me-2 btn-dark'onClick={getTodos}>All</button>
      <div className="row">
        {cards.map(card => (
          <div key={card.id} className="col-md-3 mb-3">
            <div className="card" style={{width:"13rem"}}>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {card.status =="not completed" ?<button className="btn btn-secondary" onClick={()=>changeCompleted(card.id)}>{card.status}</button>:
                <button className="btn btn-success" onClick={()=>changeNotCompleted(card.id)}>{card.status}</button>}
                <p className="card-text">{card.description}</p>
                <button className="btn btn-primary me-2" onClick={() => handleEdit(card.id, card.title, card.description)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(card.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
