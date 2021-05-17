var stud_array =[];
function submit(){
    var display_stud_array=[ ];
    for (var j=1; j<5; j++){
        var stud= document.getElementById("name_of_the_student_"+ j).value;
        console.log(stud);
        stud_array.push(stud);
        
    }
    console.log(stud_array);
    var length_of_stud_array= stud_array.length;
    console.log(length_of_stud_array)
    for( var k=0; k < length_of_stud_array; k++ ){
        display_stud_array.push("<h4> NAME : "+stud_array[k]+"</h4>");
        console.log(display_stud_array);
    }
    console.log(display_stud_array);
    document.getElementById("display_name_with_commas").innerHTML= display_stud_array;
    var remove_commas= display_stud_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
    

}
function sorting(){
stud_array.sort();
console.log(stud_array);
var display_sorting=[];
var length_of_stud_array= stud_array.length;
    console.log(length_of_stud_array)
    for( var k=0; k < length_of_stud_array; k++ ){
        display_sorting.push("<h4> NAME : "+stud_array[k]+"</h4>");
        console.log(display_sorting);
    }
  
    var remove_commas= display_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}
function update(){
    document.getElementById("display_name_without_commas").innerHTML= "<h1>"+ stud_array+"</h1>"
}