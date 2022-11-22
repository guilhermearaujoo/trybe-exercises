import React from 'react';

class About extends React.Component {
  render() {
    const abilities = ['JS', 'HTML', 'CSS'];

    return (
      <div className='about'>
        <h1>
          Guilherme Araujo
        </h1>
        <p>
          Fullstack Developer at Trybe!
        </p>
        <div className='skills'>
          <h2>My Skills</h2>
          <ul>
            {abilities.map((element) => <li>{element}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
