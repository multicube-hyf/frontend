import React, {useState} from 'react'
//import Rectangle from '../components/rectangle/Rectangle';
import SelectExercise from '../components/selectExercise/SelectExercise';

function Exercise1() {
    const [selectedNumber, setSelectedNumber] = useState(3);
    
    return (
        <div>
        <SelectExercise numToFind={5} selectedNumber={selectedNumber} />
        </div>
    )
}

export default Exercise1
