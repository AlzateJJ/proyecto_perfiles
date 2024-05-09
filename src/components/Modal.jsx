import './Modal.css'

const Modal = ( { modalIsOpened, setModalIsOpened, activador } ) => {

    // activador = hemisferio
    // modalIsOpened = cuadrante

    let listaCarreras

    if (activador === 'I') {
        if (modalIsOpened === 'FI') {
            listaCarreras = ['Ing. Industrial', 'Ing. Civil', 'Ing. Aeronáutica', 'Ing. Producción', 'Ing. Sistemas / Informática', 'Ing. Mecánica', 'Medicina', 'Finanzas', 'Física']
        } else if (modalIsOpened === 'PI')
            listaCarreras = ['Contaduría']

    } else if (activador === 'D') {
        if (modalIsOpened === 'FD') {
            listaCarreras = ['Diseño', 'Escultor', 'Pintor', 'Arte', 'Marketing']
        } else if (modalIsOpened === 'PD')
            listaCarreras = ['Psicología', 'Trabajo Social', 'Docencia', 'Comunicador', 'Músico', 'Actor']

    } else if (activador === 'F') {
        if (modalIsOpened === 'FI') {
            listaCarreras = ['Ing. Química', 'Ing. Ambiental', 'Ing. Electrónica', 'Ing. Minas y Petróleos', 'Ing. Multimedia']
        } else if (modalIsOpened === 'FD')
            listaCarreras = ['Arquitectura', 'Psiquiatría', 'Diseño Digital', 'Multimedia']

    } else if (activador === 'P') {
        if (modalIsOpened === 'PI') {
            listaCarreras = ['Administración', 'Instrumentación Quirúrgica']
        } else if (modalIsOpened === 'PD')
            listaCarreras = ['Enfermería', 'Fisioterpia', 'Administración GH', 'Pedagogía Infantil', 'Teología']

    } else {
        listaCarreras = ['w']
    }

    return (
        <div className={`modal__container ${!modalIsOpened && "modal__closed"}`}>
            <div className='modal__body'>
                <h1 className='modal__title'>Posibles carreras alineadas con tu perfil</h1>
                <ul>
                    {
                        listaCarreras?.map(carr => (
                            <li key={listaCarreras}>{carr}</li>
                        ))
                    }
                </ul>
                <button className='modal__btn' onClick={() => setModalIsOpened(false)}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal