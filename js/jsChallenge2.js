/* When the box is checked the “Billing Address” shows up in the “Home Address” field 
When the box is checked you can’t edit the “Home Address” field
Fix the Accessibility Error on the page */

document.querySelector("#sameAddress").addEventListener("click", function(){
    const homeBox = document.getElementById("home");
    if(this.checked){
        console.log('you clicked the thing');

        let address = document.getElementById("bill").value;

        homeBox.value = address;
        homeBox.disabled = true;

    }
    else{
        homeBox.value = "";
        homeBox.disabled = false;
    }
})