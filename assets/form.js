function sendMail() {
    var params = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_0rnnibf";
    const templateID = "template_cdnja36";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("fname").value = "";
          document.getElementById("lname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }