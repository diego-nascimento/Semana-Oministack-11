import React, {useState} from 'react'


import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'
import '../../global.css'
import api from '../../services/api'

export default function NewIncident(){
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [value, setValue] = useState('')
  const OngID = localStorage.getItem('ongID')
const history = useHistory()

  async function handlenewIncident(e){
    e.preventDefault()

    const data = {
      title, 
      description, 
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          authorization: OngID
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar! Tente novamente.')
    }

  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logo} alt="Be the Hero"/>
        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
        </p>
        <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02041"/>Voltar</Link>
      </section>
      <form onSubmit={handlenewIncident}>
        <input 
          placeholder="Titulo do caso"
          value = {title} 
          onChange={e => setTitle(e.target.value)}
          />
          

        <textarea 
          placeholder="Descrição"
          value = {description} 
          onChange={e => setdescription(e.target.value)}
          />
          
        <input 
          placeholder="Valor em reais"
          value = {value} 
          onChange={e => setValue(e.target.value)}
          />
        
        <button className = "button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
  )
}