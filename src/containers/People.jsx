import React, { useState } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import uuid from 'react-uuid';

import { useSelector, useDispatch } from 'react-redux';
const People = () => {
    //const [people, setPeople] = useState([])

    const dispatch = useDispatch();
    const personData = useSelector((state)=>state);

    // const personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'John',
    //         age: Math.floor( Math.random() * 40 )
    //     }

    //     setPeople( ( prevState ) => {
    //         return [
    //             ...prevState,
    //             newPerson
    //         ]
    //     } );
    // }

    // const personDeletedHandler = (personId) => {
    //     setPeople( ( prevState ) => {
    //         return prevState.filter(person => person.id !== personId)
    //     } );
    // }

    return (
        <div>
            <AddPerson personAdded={()=>dispatch({type:"PERSON_ADD"})} />
            {personData ? personData.map(person => (
                <Person 
                    key={uuid()}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => dispatch({type:"PERSON_DELETE", id:person.id})}/>
            )):null}
        </div>
    );
}

export default People;