let add = document.getElementById('one');
let integerValue = document.getElementById('integer');
let count = 0;
add.addEventListener('click', function(){
count+=1;
integerValue.innerHTML = count;
})