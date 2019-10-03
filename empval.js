function validate_form() {
    var emp_name = document.getElementById("emp_name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var gender="";
    var female= document.getElementById("female").value;
    var department="";
    var technology="";
    if(document.getElementById("male").checked == true){
        gender = document.getElementById("male").value;
    }else{
        gender = female;
    }
    if(document.getElementById("developer").checked == true){
        department += document.getElementById("developer").value;
    }
    if(document.getElementById("marketing").checked == true){
        department += document.getElementById("marketing").value;
    }
    if(document.getElementById("hr").checked == true){
        department += document.getElementById("hr").value;
    }
    if(document.getElementById("designer").checked == true){
        department += document.getElementById("designer").value;
    }
    if(document.getElementById("react").checked == true){
        technology += document.getElementById("react").value;
    }
    if(document.getElementById("node").checked == true){
        technology += document.getElementById("node").value;
    }
    if(document.getElementById("ruby").checked == true){
        technology += document.getElementById("ruby").value;
    }
    if(document.getElementById("photoshop").checked == true){
        technology += document.getElementById("photoshop").value;
    }
    if(document.getElementById("excel").checked == true){
        technology += document.getElementById("excel").value;
    }
    if(emp_name==""){
        alert("Employee name required!");
        return false
    }
    if(contact==""){
        alert("Contact required!");
        return false
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){
        alert("Enter valid email address!");
        return false
    }
    document.getElementById("n").innerHTML=emp_name;
    document.getElementById("e").innerHTML=email;
    document.getElementById("c").innerHTML=contact;
    document.getElementById("g").innerHTML=gender;
    document.getElementById("d").innerHTML=department;
    document.getElementById("t").innerHTML=technology;
    /*var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(1);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    cell0.innerHTML = emp_name;
    cell1.innerHTML = email;
    cell2.innerHTML = contact;
    cell3.innerHTML = gender;
    cell4.innerHTML = department;
    cell5.innerHTML = technology;
        function AddData(){
                var rows = "";                  
                rows += "<tr><td>" + ename + "</td><td>" + email + "</td><td>" + contact + "</td><td>" + gender + "</td></tr>" 
                + "</td></tr>"+ department + "</td></tr>"+ technology + "</td></tr>";
                $(rows).appendTo("#list tbody");    
        }
        return AddData();*/
}
