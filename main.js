var nameofpeople=[];
var list=[];
function submit() {
    var GuestName=document.getElementById("input_first_name").value;
    nameofpeople.push(GuestName);
    document.getElementById("look").innerHTML=nameofpeople.toString();
    var length=nameofpeople.length;
for (var k = 0; k < length; k++) {
list.push(nameofpeople[k]);}
var guestnew=list.join(" ");
document.getElementById("show").innerHTML=guestnew;
}
function show() {
var i= nameofpeople.join("<br>");
document.getElementById("show_div").innerHTML=i.toString();
}
function sorting() {
nameofpeople.sort();    
var i= nameofpeople.join("<br>");
document.getElementById("sorted_list").innerHTML=i.toString();
}
function searching() {
var s=document.getElementById("search_input").value;
var found=0;
var j=0;
for (let j = 0; j < nameofpeople.length; j++) {
if (s==nameofpeople[j]) {
found++;
}   
}
document.getElementById("result").innerHTML=s+" Found "+ found+" Times";
}


