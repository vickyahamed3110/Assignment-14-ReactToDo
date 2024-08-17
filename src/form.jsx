import React, { useState } from 'react';
import { editData, postData } from './api';

const TitleDescriptionForm = ({render, setRender, formData, setFormData, editId, editMode, setEditMode}) => {
 const [error, setError] = useState({}) 
 const formError = {}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!formData.title) formError.title = 'Title is required';
    if(Object.keys(formError).length===0) {
      console.log('Form submitted:', formData);
      await postData({...formData, status:"not completed"})
      setRender(render + 1)
    } else {
      setError(formError)
    }
   };
  const handleEdit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    await editData(formData, editId)
    setRender(render + 1)
    setEditMode(false)
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="text-center mb-4">
          <h1 style={{fontWeight:"bold"}}>TODO</h1>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label" style={{fontWeight:"bold"}}>Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter the title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              {error.title && <p style={{ color: 'red',fontSize:'2vh',marginLeft:'5px' }}>{error.title}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label" style={{fontWeight:"bold"}}>Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                placeholder="Enter the description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {editMode ? <button type="submit" onClick = {handleEdit} className="btn btn-primary">Edit</button> :
            <button type="submit" onClick = {handleAdd} className="btn btn-primary">Add</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TitleDescriptionForm;
