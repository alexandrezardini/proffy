import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import FormSuccess from './pages/FormSuccess';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/study' component={TeacherList} />
      <Route path='/give-classes' component={TeacherForm} />
      <Route path='/form-success' component={FormSuccess} />
    </BrowserRouter>
  );
}

export default Routes;
