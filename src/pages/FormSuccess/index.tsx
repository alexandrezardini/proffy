import React from 'react';

import ImgBg from '../../assets/images/success-background.svg';
import checkIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

function FormSuccess() {

    const history = useHistory();

    function handleReturnToList() {
        history.push('study')
    }
  return (
    <div id='container-sucess'>
      <div
        className='imgbg-container'
        style={{ backgroundImage: `url(${ImgBg})` }}
      >
        <img src={checkIcon} alt={'Ok'} />
        <h1>Cadastro Salvo!</h1>
        <h2>
          Tudo certo, seu cadastro está na nossa lista de professores. Agora é
          só ficar de olho no seu WhatsApp.
        </h2>
        <button onClick={handleReturnToList}>Acessar Lista</button>
      </div>
    </div>
  );
}

export default FormSuccess;
