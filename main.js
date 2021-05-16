var students_name= [];

function submit()
{
    var s1= document.getElementById("student_1").value;
    var s2= document.getElementById("student_2").value;
    var s3= document.getElementById("student_3").value;
    var s4= document.getElementById("student_4").value;
    var s5= document.getElementById("student_5").value;

    students_name.push(s1);
    students_name.push(s2);
    students_name.push(s3);
    students_name.push(s4);
    students_name.push(s5);

    document.getElementById("display_name").innerHTML=students_name;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

    
    
}
function sort()
{
    students_name.sort();
    
    document.getElementById("display_name").innerHTML=students_name;
    console.log(students_name);
}