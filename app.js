loadDoc("https://jsonplaceholder.typicode.com/users", emailSplit); 
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function emailSplit(xhttp) {
  const recDataOld = JSON.parse(xhttp.responseText); 
  var emailList = [];
  for (property in recDataOld) {
    
    emailList.push(recDataOld[property].email); 
  }
  emailList = emailList.sort(); 
  for (entry in emailList) {
    document.getElementById("box1").innerHTML += emailList[entry] + "</br>"; 
  }
}


fetch("https://jsonplaceholder.typicode.com/users") 
  .then(function(response) {
    
    return response.json(); 
  })
  .then(function(myJson) {
    usernameList = [];
    
    for (i in myJson) {
      
      usernameList.push(myJson[i].username); 
    }
    usernameList.sort(function(a, b) {
      
      return a.length - b.length;
    });
    for (name in usernameList)
      document.getElementById("box2").innerHTML += usernameList[name] + "</br>"; 
  });