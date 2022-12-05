
import React, { useState, useEffect } from "react";
import api from "./services/api";
import './app.css';
import './styles.css';
import './sidebar.css';
import './main.css';

import Notes from "./Components/Notas";
import RadioButton from "./Components/RadioButton";

function App() {  

  const [selectedValue, setSelectedValue] = useState('all')
  const [title, setTitles] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {    
    getAllNotes()
  }, [])
  
  async function getAllNotes() {
    const response = await api.get('/annotations')
    setAllNotes(response.data)
  }

  async function loadNotes(option){
    const params = {priority: option}
    const response = await api.get('/priorities', {params})

    if(response){
      setAllNotes(response.data)
    }
  }

  async function handleChange(e){
    setSelectedValue(e.value)

    if(e.checked && e.value != 'all'){
      loadNotes(e.value)
    }else{
      getAllNotes()
    }

  }

  async function handleDelete(id){
    const deletedNote = await api.delete(`/annotations/${id}`)

    if(deletedNote){
      setAllNotes(allNotes.filter(note => note._id != id))
    }
  }

  async function handleChangePriority(id){
    const note = await api.post(`/priorities/${id}`)
    
    if(note && selectedValue != 'all'){
      //getAllNotes()
      loadNotes(selectedValue)
    } else if(note){
      getAllNotes()
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    const response=await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitles('')
    setNotes('')

    if(selectedValue != 'all'){
      getAllNotes()
    } else{
      setAllNotes([...allNotes, response.data])
    }
    setSelectedValue('all')
    //setAllNotes([...allNotes, response.data])
  }

  useEffect(()=>{
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#7bc9f7'
      if(title && notes){
        btn.style.background = '#24a4ee'
      }
    }

    enableSubmitButton()
  }, [title, notes])



  return (
    <div id="app">     
      <aside>
        <strong>Bloco de Lembrentes</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo do Lembrete</label>
            <input
              required
              maxLength="30" 
              value={title}
              onChange={e => setTitles(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Lembrete</label>
            <textarea
              required
              maxLength="350"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">Salvar</button>
        </form>
        <RadioButton
          selectedValue={selectedValue}
          handleChange={handleChange}
        />

      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes 
              key={data._id}
              data={data} 
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
            />
          ))}          
        </ul>
      </main>      
    </div> 
  );
}

export default App;
