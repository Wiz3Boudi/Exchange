let  dollar = document.getElementById('dollar');
let  pound  = document.getElementById('pound');
let  click  = document.getElementById('submit-button');
let  Delete = document.getElementById('Delete-button');
let  errorr = document.getElementById('errorr')


click.addEventListener('click', function(){
     if(dollar.value != 0){return pound.value = dollar.value /50;}
     else if (pound.value != 0) {return dollar.value =  pound.value * 50;}
     else{ return alert('! Invalid Input >>>>')}
})

Delete.addEventListener('click',function(){
     dollar.value = ''
     pound.value = ''
})












// dollar.onkeyup =function(){
//      pound.value = dollar.value*50
// }

// pound.onkeyup =function(){
//      dollar.value = pound.value*50
// }