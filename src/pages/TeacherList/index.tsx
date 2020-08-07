import React, { useState, FormEvent} from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [searchMessage, setSearchMessage] = useState('Selecione a matéria e quando deseja estudar.');
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.get('classes', {
        params: { subject, week_day, time }
      });

      setTeachers(response.data);
      setSearchMessage('Nenhum professor encontrado com sua pesquisa.');

    } catch (e) {
      setSearchMessage('Preencha todos os campos para pesquisar.')
    }
  }


  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os Proffys disponíveis'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' }
            ]}
          />
          <Select
            name='week_day'
            label='Dias da semana'
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
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
          <Input
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type='submit'>Procurar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.length === 0 ? (
          <div className='empty-search'>
            <h1 className='title-empty-list'>{searchMessage}</h1>
          </div>
        ) : (
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
        )}
      </main>
    </div>
  );
}

export default TeacherList;
