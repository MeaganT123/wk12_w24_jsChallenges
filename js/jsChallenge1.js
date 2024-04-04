// also can use element selector? about 2:53pm
// challenge 1 
// When you check the box the email field appears
document.querySelector("#subscribe").addEventListener("click", function(){
    console.log('this works')
    if(this.checked) {
        document.getElementById("emailDiv").style.display="block"
    }
    else{
        document.getElementById("emailDiv").style.display="none"
        console.log('else statement will hide')
    }
})

// display current date when anywhere is clicked on page
window.addEventListener('click', function(){
    alert(new Date());
});
