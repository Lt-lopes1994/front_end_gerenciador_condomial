import React from 'react';
import '../../styles/cardHome.css';

export default function CardHome() {
  return (
    <div className='cardHome'>
      <div className='cardHomeContent'>
        <div className='cardHomeTitle'>
          <strong>Residencial Canadá</strong>
        </div>
        <div className='cardHomeDescription'>
          <p>Descrição do condomínio</p>
        </div>
        <div className='cardHomeFooter'>
          <div className='cardHomeFooterContent'>
            <div className='cardHomeFooterContentItem'>
              <strong>1</strong>
              <p>Unidades</p>
            </div>
            <div className='cardHomeFooterContentItem'>
              <strong>1</strong>
              <p>Visitantes</p>
            </div>
            <div className='cardHomeFooterContentItem'>
              <strong>1</strong>
              <p>Visitantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
