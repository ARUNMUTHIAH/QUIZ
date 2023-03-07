# PROJECT NAME :

	Quiz.

# REQUIREMENT (User Info):

 * User can able to select the options,

 * User can able to select the next button,

 * User can able to select the finish button,

 * User can able to see the final score and answers,




 # Steps For Quiz App:

 * Display a question and options, add a data to config, the structure will be array of objects, question and answer are string, and the options is array of strings,
 * Add two keys to the state, one is question and another one is options, and initially added the value to it,
 * Create a component to display a question,
 * Create a component to display the options array using map,
 * Add a userAnswer key in state , while user click any options the userAnswer key will be updated,



 * Place the next button, so create a component to display next button , initially the next button is in disabled state, when the user click any options it will be enabled,
 * Add a currentQuestion key in state , the value will be initially zero, when the user click the next button the currentQuestion will be increased,
 * while the currentQuestion is updated, the next question and the options will also be updated,
 * Add a score key to the state, while the userAnswer and the exact answer when matches then the score will increase,



 * place the finish button, so create a component to display the finish button,initially the finish button is in disabled state, when the user click any options it will be enabled, while the userAnswer and the exact answer when matches then the score will increase in this too,
 * while the user click the finish button it will display the final page,



 * The final page should display the total score and the overall answers,



 This application is developed under the part of upSkill training.


# REQUIREMENT (Owner Info):

 * Owner can able to add the questions, answer and options,

 * owner can able to add a value to the user info,


 # Steps to input boxes:

 * Add three keys in state , one is question, one is answer, another one is for options,
 * The structure of the question and answer are a string and the options is an array,
 * Create three components to display question, options and answer, when the user type any content in the text box, then the three flags will be updated,


 * Display a option add button, so create a component to display a option add button , when the user types a three options it will enabled orElse it will be in disabled state,


 * Display a common add button, so create a component to display a common add button , when we click the add button the value will be added to the userInfo,
