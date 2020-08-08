import React, { ReactSVG } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  pageName: string;
  description?: string;
  iconLeft?: string;
  textRight?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  pageName,
  description,
  iconLeft,
  textRight,
  children
}) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backIcon} alt='Voltar' />
        </Link>
        <h2>{pageName}</h2>
        <img src={logoImg} alt='Proffy' />
      </div>
      <div className='header-content'>
        <strong>{title}</strong>
        <div className='content-right'>
        {description && <p>{description}</p>}
          <img src={iconLeft} alt='icon' />
          <h2 className='text-right'>{textRight}</h2>
        </div>
        
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
