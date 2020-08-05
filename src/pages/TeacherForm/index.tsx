import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas'
        description='Primeiro passo é preencher o formulário de inscrição'
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name='name' label='Nome completo' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='WhatsApp' />
          <Textarea name='bio' label='Bio' />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' }
            ]}
          />
          <Input name='cost' label='Custo da sua hora por aula' />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type='button'>+ Novo horário</button>
          </legend>

          <div className='schedule-item'>
            <Select
              name='week_day'
              label='Dias da semana'
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda' },
                { value: '2', label: 'Terça' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' }
              ]}
            />

            <Input name='from' label='Das' type='time' />
            <Input name='to' label='Até' type='time' />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt='Aviso importante' />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type='button'>Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
