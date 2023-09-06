// //jaavscript for web designers!
// //var list=new Array(12,"string","another string");
// //var list1=["js for design","web design",45];
// var person = new Object();
// person.name="something";
// person.age=30;
// person.car={};
// person.car.make="honda";

// person.name=["kirk"];
//to gradepoints from marks.
// function togradepoints(input){
// var input;
// var result=[];
// for(var i=0;i<input.length;i++){
//     res='';
//     if(input[i]>=90){
//         res="A+";
//     }
//     else if(input[i]>=80){
//         res="A";
//     }
//     else if(input[i]>=70){
//         res="B+";
//     }
//     else if(input[i]>=60){
//         res="B";
//     }
//     else {
//         res="Fail";
//     }
//     result.push(res);
// }
// return result;
// }
// document.write(togradepoints([91, 80, 60]));
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  