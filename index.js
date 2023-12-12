function sendMail(){
    var params ={
        name: document.getElementById("name1").value ,
        email:document.getElementById("email1").value,
        message:document.getElementById("msg").value
    };

const serviceID="service_sf3wz1o"
const templateID="template_obozyzf"

emailjs
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name1").value="";
        document.getElementById("email1").value="";
        document.getElementById("msg").value="";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch((err)=> console.log(err));
}