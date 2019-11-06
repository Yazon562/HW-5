loadDoc("https://jsonplaceholder.typicode.com/users", emailSplit); //call loadDoc and emailSplit function
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest(); //create request
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function emailSplit(xhttp) {
  const recDataOld = JSON.parse(xhttp.responseText); //sets response as constant
  var emailList = [];
  for (property in recDataOld) {
    //loop through data
    emailList.push(recDataOld[property].email); //takes out each email and adds to list
  }
  emailList = emailList.sort(); //sorts alphabetically
  for (entry in emailList) {
    document.getElementById("box1").innerHTML += emailList[entry] + "</br>"; //adds to box1 div and adds line break each entry
  }
}

//fetch
fetch("https://jsonplaceholder.typicode.com/users") //path we are fetching
  .then(function(response) {
    //promise
    return response.json(); //returns promise containing the response object
  })
  .then(function(myJson) {
    usernameList = [];
    //const recDataNew = JSON.parse(myJson);
    for (i in myJson) {
      //loops through response data
      usernameList.push(myJson[i].username); //add to list
    }
    usernameList.sort(function(a, b) {
      //sorts by length of string
      return a.length - b.length;
    });
    for (name in usernameList)
      document.getElementById("box2").innerHTML += usernameList[name] + "</br>"; //add to box2 div
  });