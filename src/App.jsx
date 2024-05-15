import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {

  const [activador, setActivador] = useState()
  const [modalIsOpened, setModalIsOpened] = useState(false)

  const handleClickLi = (indicacion) => {
    setActivador(indicacion)

    const div_message = document.querySelector(".description_profile")

    div_message.innerHTML = "Marca tu dominancia"

    setTimeout(() => {
        div_message.innerHTML = ""
    }, 5000);
  }

  console.log(activador)



  return (
    <div className='body'>

      <div className='header__div'>
        <h1 className='perfiles__title'>Perfiles y Dominancias</h1>
        <p className='descripcion'>Autodescubrimiento hacia tu propósito de vida</p>
      </div>

      <Modal 
        modalIsOpened = {modalIsOpened}
        setModalIsOpened = {setModalIsOpened}
        activador = {activador}
      />

      <div className='perfiles'>
        <h2 className='list__title'>Escoge tu perfil general</h2>
        <ul className='lista_perfiles'>
          <li className={`perfil ${(activador === 'I') && 'li__activo'}`} onClick={() => handleClickLi('I')}>Izquierdo</li> 
          <li className={`perfil ${(activador === 'D') && 'li__activo'}`} onClick={() => handleClickLi('D')}>Derecho</li>
          <li className={`perfil ${(activador === 'F') && 'li__activo'}`} onClick={() => handleClickLi('F')}>Frontal</li>
          <li className={`perfil ${(activador === 'P') && 'li__activo'}`} onClick={() => handleClickLi('P')}>Posterior</li>
        </ul>
        <h3 className="description_profile"></h3>
      </div>

      <div className='imgs__container'>

        <div className={`img__container ${(activador === 'I' || activador === 'F') && 'img__activa'}`} onClick={
          (activador === 'I' || activador === 'F') 
            ? () => setModalIsOpened('FI')
            : null
          }>
          <img src="/cuadrante_FI.png" alt="FI" />
          <div className={(activador !== 'I' && activador !== 'F') && 'overlay'}></div>
        </div>

        <div className={`img__container ${(activador === 'F' || activador === 'D') && 'img__activa'}`} onClick={
          (activador === 'D' || activador === 'F') 
            ? () => setModalIsOpened('FD')
            : null
          }>
          <img src="/cuadrante_FD.png" alt="FD" />
          <div className={(activador !== 'D' && activador !== 'F') && 'overlay'}></div>
        </div>

        <div className={`img__container ${(activador === 'I' || activador === 'P') && 'img__activa'}`} onClick={
          (activador === 'I' || activador === 'P') 
            ? () => setModalIsOpened('PI')
            : null
          }>
          <img src="/cuadrante_PI.png" alt="PI" />
          <div className={(activador !== 'P' && activador !== 'I') && 'overlay'}></div>
        </div>

        <div className={`img__container ${(activador === 'P' || activador === 'D') && 'img__activa'}`} onClick={
          (activador === 'P' || activador === 'D') 
            ? () => setModalIsOpened('PD')
            : null
          }>
          <img src="/cuadrante_PD.png" alt="PD" />
          <div className={(activador !== 'P' && activador !== 'D') && 'overlay'}></div>
        </div>

      </div>

    </div>
  )
}

export default App
