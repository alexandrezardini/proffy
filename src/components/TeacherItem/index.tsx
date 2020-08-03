import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars3.githubusercontent.com/u/54390818?s=460&u=8683e57370c7599860e9e62c79890ba0096b722e&v=4'
          alt='Avatar'
        />
        <div>
          <strong>Alexandre Roa</strong>
          <span>Geografia</span>
        </div>
      </header>
      <p>
        As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em
        qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
        <br />
        <br />
        Ensino a galera a não se perder na vida, com lições geográficas simples
        para você nunca mais precisar de um mapa na sua bela vida;
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 350,00</strong>
        </p>
        <button type='button'>
        <img src={whatsAppIcon} alt='Entrar em contato' />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem