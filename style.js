function madLibbing(noun, adj, person) {
  var createMadLib = document.getElementById("story");
  
  // variables to store input data
  var noun = document.getElementById("noun").value;
  var adj = document.getElementById("adjective").value;
  var person = document.getElementById("person").value;

  // create mad lib
  var madLib = "Why would " + person + " ever eat " + adj + " " + noun + " at the beach.";
  
  createMadLib.innerText = madLib;
}

// create event listener for lib-button
document.getElementById("lib-button").addEventListener("click", madLibbing);