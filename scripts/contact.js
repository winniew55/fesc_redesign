//responsive nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Vue.js for contact people

var ContactPerson = [
  {name: "Dr. David Norton",
    position: "Interim Director",
    email: "dpnorton@ufl.edu",
    imgSource: "image/norton.png"
  },{name: "Ms. Canan “Janan” Balaban",
    position: "Associate Director",
    email: "cbalaban@ufl.edu",
    imgSource: "image/balaban.png" 
  }
]

document.addEventListener("DOMContentLoaded", function(){
  let profilelistings = new Vue({
  el: '#profilelistings',
  data: {
    profiles:ContactPerson,
  }
})
  
  
})