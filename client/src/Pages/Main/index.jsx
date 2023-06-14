import React from 'react';
import Nav from '../../Layouts/Nav';

function Main(props) {
  return (
    <>
      <main>
        <Nav />
        <header className='app-header app-header-gradient app-header-grid'>
          <div className='flex flex-center flex-center-col'>
            <div className='text-container'>
              <h1 className='title'>
                What is Lorem Ipsum?
              </h1>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              </p>
            </div>
          </div>
          <div className='flex flex-center'>
            <div className='size-v1'>
              <img src={require('../../assests/email 3.png')} alt="description" />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}

export default Main;