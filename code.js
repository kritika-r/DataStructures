var added_name =[];
var sort_added_names=[];
function add(){
    var display_added_name= [];
    display_added_name = document.getElementById("add_input").value ;
   added_name.push(display_added_name);
   document.getElementById("add_input").value= "";
  
    
   
}
function show(){
    document.getElementById("show_added_names").innerHTML= added_name.join('<br>');
   
    
}
function sort(){
    document.getElementById("sort_names").innerHTML= added_name.join('<br>');
    added_name.sort();
    document.getElementById("sort_names").innerHTML= added_name;
}
function search(){
    var search_name= document.getElementById("search_input").value;
    var found=0;
    var j;
    for (j=0; j<added_name.length; j++){
        if( search_name==added_name[j]){
            found=found+1;
        }
    }
    document.getElementById("search_results").innerHTML= +found+ "time/s";
}