//Challenge 1: Your age in days


function ageInDays (){

    var birthYear = prompt ("What year you were born....my weird friend?");
    var ageInDayss = (2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer= document.createTextNode('you are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDayss');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);



   
    
}
function reset() {
    document.getElementById('ageInDays').remove(ageInDayss);


}



