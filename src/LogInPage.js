import React from 'react'
import LogIn from './components/LogIn'


function LogInPage() {

  return (
    <div id='loginPage' className='game-summary' >
      <p className='info'>
        <p>Welcome to Avatar Pairs!</p> 
        A matching game inspired by the tv show, <i>Avatar: The Last Airbender</i>. 
        All of your favorite characters are here, and it's up to you to pair them up with their correct images. 
        Ready to test your memory and see how many pairs you can match? 
        <p>Good luck!</p>
      </p>
      <div className='loginbutton-page'>
        <LogIn />
      </div>
    </div>
  );
};

export default LogInPage;


