const form= document.getElementById("form")
 form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name= document.getElementById("name").value;
    const pass= document.getElementById("pass").value;

    console.log(name);
    console.log(pass);

 }
 
 
 )