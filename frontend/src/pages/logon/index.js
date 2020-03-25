import React, {useState}  from 'react'
import './style.css'
import heroisImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import '../../global.css'
import api from '../../services/api'


export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault()
    try {
      const response = await api.post('/sessions', {id})
      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name)
    
      history.push('/profile')
    }catch(error){
      alert('Falha no Login, tente Novamente')
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the Hero!"/>
        <form onSubmit={handleLogin}> 
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" values= {id} onChange={e=>setId(e.target.value)}/>
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02041"/>Não tenho cadastro</Link>
        </form>
      </section>
      <img src={heroisImg} alt="heroes"/>
    </div>
  );
}