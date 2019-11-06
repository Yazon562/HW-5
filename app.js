var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200) 
        {

            var myData = JSON.parse(this.responseText) 
            console.log(myData.length)
          
            var sorted = []
            console.log(typeof myData) 
            for (i=0; i< myData.length; i++)
                {
                    console.log(myData[i].email);
                    sorted.push(myData[i].email + '<br>') 
                   
                }
                sorted = sorted.sort()
            document.getElementById("output1").innerHTML = sorted.join(' '); 
       
        }
};

xhttp.open( "Get" , "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();





fetch  ("https://jsonplaceholder.typicode.com/users")
.then  ( response => response.json())                   
.then (data => {                                      
        const sortData = data.sort ((a,b) => a.username.length -b.username.length);
        console.log(typeof sortData);
        sortLength( JSON.stringify(sortData));

       
})

.catch ( error => console.log('There was an error:' , error))







function sortLength (ourData){
var needSort = []
var LOL = JSON.parse(ourData)


for (i=0; i< LOL.length; i++)
                 {
                     console.log(i)
                     console.log(LOL[i].username);
                     needSort.push(LOL[i].username + '<br>');
                     console.log(needSort)
                }

document.getElementById("output2").innerHTML = needSort.join(' ');              
}

