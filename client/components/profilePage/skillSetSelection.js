import React from 'react';

const skillSetSelection = () => {
  let skills = ['Javascript', 'SQL', 'HTML', 'Python', 'Java'];
  for (let i = 0; i < skills.length; i += 1) {
    checkbox.push(
      <din>
        <input type='checkbox' id='skill ' name={`skills${i}`} value='skill' />
        <label htmlFor={`skills${i}`}>{skills[i]}</label>
      </div>
    );
  }
  return (
    <div>
      <span></span>
    </div>
  );
};

export default skillSetSelection;
