const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

function getEl(id){
 let a = document.getElementById(id);
 return a;

}
function getEle(q){
    let a = document.querySelector(q);
    return a;
}


function randomValues() {
    anime({
      targets: [getEl('el'),getEl('el1'),getEl('el2'),getEl('el3'),getEl('el4'),getEl('el5'),getEl('el6'),getEl('el7'),getEl('el8'),getEl('el9'),getEl('el10'),getEl('el11'),getEl('el12'),getEl('el13'),getEl('el14'),getEl('el15'),getEl('el16'),getEl('el17'),getEl('el18'),getEl('el19')],
      translateX: function() {
        return anime.random(0, WIDTH);
      },
      translateY:function() {
        return anime.random(0, HEIGHT);
      },
      rotateZ:function(){
        return anime.random(0, 300); 
        },
      opacity:function() {
        return anime.random(0.00, 1.00);
      },
      easing: 'easeInOutQuad',
      duration: 1500,
      complete: randomValues
    });
  }
  
  randomValues();
