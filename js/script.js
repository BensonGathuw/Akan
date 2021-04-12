document.getElementById("form").addEventListener("submit",getData)

function getData(){
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementById("gender")
    var gender = gender.options[gender.selectedIndex].text

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    var cc = parseInt(year.toString().substring(0,2))
    var yy = parseInt(year.toString().substr(-2))

    var d = (((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(month+1)/10)) + date) % 7
    var d = Math.trunc(d) +1


    var names = function(d,gender){
        if(gender==="Male"){
            return maleNames[d]
        }else if(gender==="Female"){
            return femaleNames[d]
        }else{
            return "Wrong values"
        }
    }
    

    alert(names(d,gender));
}




