console.log('\'Plugify \'Plugify!');

//jquery message for user to put email
$(document).ready(function(){

var button = $(".buttonmsg");

button.on("click", function(){
    alert("Please confirm by clicking 'ok' and put your e-mail address below.")
})


// pure JavaScript function for mobile navigation menu
function showMenu(){
    var navigation = document.querySelector(".navigation");
    var button = document.querySelector(".menu_btn");

    button.addEventListener("click", function(event){
      if(navigation.className.indexOf("hidden_menu") >=0){
        navigation.classList.remove("hidden_menu");
      }
      else{
        navigation.classList.add("hidden_menu");
      }
    })
  }

  showMenu();


});
