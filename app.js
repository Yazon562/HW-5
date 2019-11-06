
// json is a type of data where object is listed in an array
// ajax is just async, javascript, json
// xmlhttpreqeuest sort by alphabets


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200) 
        {

            var myData = JSON.parse(this.responseText) // ************ JSON.Parse is used to convert text into javascript object or array
            console.log(myData.length)
            // create sorted data
            var sorted = []
            console.log(typeof myData) // use this to see what type of stuff
            for (i=0; i< myData.length; i++)
                {
                    console.log(myData[i].email);
                    sorted.push(myData[i].email + '<br>') //.push is used to add elements to the end of an array, this line adds stuff to sorted array by getting data from myData
                    // grab email of first object
                }
                sorted = sorted.sort()
            document.getElementById("output1").innerHTML = sorted.join(' '); // replace myData with sortedData and .join is used to customize how data is dislayed, in this case every data is seperated by a space 
       
        }
};

xhttp.open( "Get" , "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();




// fetch username and sort by length, this is the promise syntax
fetch  ("https://jsonplaceholder.typicode.com/users")
.then  ( response => response.json())                   
.then (data => {                                      
        const sortData = data.sort ((a,b) => a.username.length -b.username.length);
        console.log(typeof sortData);
        sortLength( JSON.stringify(sortData));

       
})

.catch ( error => console.log('There was an error:' , error))






//fetch  ("https://jsonplaceholder.typicode.com/users")
//.then  ( sortLength (response)  )
//.catch ( error => console.log('There was an error:' , error) )


function sortLength (ourData){
var needSort = []
var LOL = JSON.parse(ourData)
// console.log(LOL + "HALLO")

for (i=0; i< LOL.length; i++)
                 {
                     console.log(i)
                     console.log(LOL[i].username);
                     needSort.push(LOL[i].username + '<br>');
                     console.log(needSort)
                }

document.getElementById("output2").innerHTML = needSort.join(' ');              
}

