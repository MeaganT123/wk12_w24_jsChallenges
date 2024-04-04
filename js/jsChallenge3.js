/* Both boxes must have radio buttons selected to move on
If one or both radio buttons isn’t selected create an alert
Fix the broken HTML */
// Challenge 3

// help from https://stackoverflow.com/questions/46518761/how-to-fix-alert-if-no-radio-button-is-selected

/* document.querySelector('#ch3form').onsubmit=function(){
    let standing = document.querySelector('input[name="standing"]:checked');    
    let gradDate = document.querySelector('input[name="gradDate"]:checked');
    if (!standing && gradDate) {
        alert('You did not select a standing.');
        return false;
    } else if (standing && !gradDate) {
        alert('You did not select a grad date.');
        return false;
    } else if (!standing && !gradDate){
        alert('You did not select a standing or grad date.');
        return false;
    }

    else {
        return true;
    }
}; */


document.querySelector('#ch3form').addEventListener("submit", function(event){
    let standing = document.querySelector('input[name="standing"]:checked');
    let gradDate = document.querySelector('input[name="gradDate"]:checked');
    console.log(standing, gradDate);
    if (!standing && gradDate) {
        alert('You did not select a standing.');
        event.preventDefault();
    } else if (standing && !gradDate) {
        alert('You did not select a grad date.');
        event.preventDefault();
    } else if (!standing && !gradDate){
        alert('You did not select a standing or grad date.');
        event.preventDefault();
    }

    else {
        return true;
    }
});