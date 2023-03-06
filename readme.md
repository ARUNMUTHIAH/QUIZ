# Project Name

	Quiz.

# REQUIREMENT :

 * Display a question and options

 * Place the next button

 * Place the finish button

 * Display final score and answers






 # Steps For Quiz App:

 * Add a data to config, the structure will be array of objects, question and answer are string, and the options is array of strings,
 * Add two keys to the state, one is question and another one is options, and initially added the value to it,
 * Create a component to display a question,
 * Create a component to display the options array using map,
 * Add a userAnswer key in state , while user click any options the userAnswer key will be updated,



 * Create a component to display next button , initially the next button is in disabled state, when the user click any options it will be enabled,
 * Add a currentQuestion key in state , the value will be initially zero, when the user click the next button the currentQuestion will be increased,
 * while the currentQuestion is updated, the next question and the options will also be updated,
 * Add a score key to the state, while the userAnswer and the exact answer when matches then the score will increase,



 * Add a component to display the finish button,initially the finish button is in disabled state, when the user click any options it will be enabled, while the userAnswer and the exact answer when matches then the score will increase in this too,
 * while the user click the finish button it will display the final page,



 * The final page contains the total score and the overall answers,



 This application is developed under the part of upskill training.
