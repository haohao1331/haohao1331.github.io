import React from 'react';
import '../App.css';
import { useState } from 'react';


function TransactionItem(people: string[]) {

  return (
    <div className="Transaction-Item">
      <select name="people" id="people">
        {people.map(person => <option value={person}>{person}</option>)}
      </select>
    </div>
  )
}


function Tools() {
  const [people, setPeople] = useState<string[]>([]);

  const onPeopleInputValueChange = (value : string) => {
    const peopleArray = value.replaceAll(' ', '').split(',');
    const filteredPeopleArray = peopleArray.filter(person => person !== '');
    setPeople(filteredPeopleArray);
  }

  return (
    <div className="Tools">
      <div className="Tools-Col">
        <h1>Money Splitter</h1>
        <label>Participants: 
          <input type="text" className="name-input" placeholder="people1, people2, people3" onChange={e => onPeopleInputValueChange(e.target.value)} required/>
        </label>
        <div className="Transaction">
          <TransactionItem {...people}/>
        </div>
      </div>
    </div>
  );
}

export default Tools