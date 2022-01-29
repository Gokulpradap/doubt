async function postdata() {
  var forData = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      country : document.getElementById("country").value,
      state : document.getElementById("state").value,
      city : document.getElementById("city").value
  }

 try {
        await fetch("https://61f531ae62f1e300173c4040.mockapi.io/api/personaldata",{
        method : "POST",
        body: JSON.stringify(forData),
        headers: {
            "Content-type": "application/json" 
        }
    })
    alert("Thanks For Updated your Details")
 } catch (er) {
     alert("Error")
 }

}

// get get the data
// Put edit
// post send the data
// delete delete the data