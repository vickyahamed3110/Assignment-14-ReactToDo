import './App.css'
import TitleDescriptionForm from './form'
import CardList from './todo'
import { useState } from 'react'
function App() {
  const [render, setRender] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [editId, setEditId] = useState(0)
  const [editMode, setEditMode] = useState(false)
 return (
    <>
      <TitleDescriptionForm render = {render} setRender ={setRender} formData = {formData} setFormData = {setFormData}
      editId ={editId} editMode = {editMode} setEditMode = {setEditMode}/>
      <CardList render ={render} setRender = {setRender} formData = {formData} setFormData = {setFormData} 
      setEditId = {setEditId} setEditMode = {setEditMode}/>
    </>
  )
}

export default App
