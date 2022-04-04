import css from './styles.css'
import {muiScript} from "./static/script";


const addExerciseButton = document.getElementById('add-exercise')
let exerciseCounter = 1;


addExerciseButton.addEventListener('click', addExerciseHandler)


function addExerciseHandler(event) {
    const newExerciseLine = document.createElement('div')

    newExerciseLine.classList.add('exercise-line')
    newExerciseLine.innerHTML = `
        <label for="Exercise name">${exerciseCounter++}.</label>
        <input type="text" name="Exercise name">
    `
    document.getElementById('content-body').appendChild(newExerciseLine)


    const addSetButton = document.createElement('div')
    addSetButton.classList.add('add-set-button')
    addSetButton.innerHTML = `+`

    newExerciseLine.appendChild(addSetButton)

    addSetButton.addEventListener('click', () => console.log('Add new set'))
}

function addNewSet() {

}
