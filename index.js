var buttonMain = document.querySelector('.btn');
let count = 0;
function update(){
    count++;
    console.log(count);
};
buttonMain.addEventListener('click' , update);
