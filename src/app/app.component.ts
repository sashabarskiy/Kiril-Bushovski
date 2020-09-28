import {Component, OnInit} from '@angular/core';
import {LanguageService} from "./services/language.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css', './spinner.css', './css.menu.card.css', './css.menu.css', './o2.css' ]
})
export class AppComponent implements OnInit {

  cube = false;

  constructor(public lang: LanguageService) {
  }

  ngOnInit(): void {
    this.lang.set(navigator.language);
  }

  cube_1_start(){
    setTimeout(function(){
      const left = document.getElementsByClassName('left');
      const right = document.getElementsByClassName('right');
      const container = document.getElementsByClassName('container');
      const imgList = ['https://images.pexels.com/photos/2760248/pexels-photo-2760248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1554740/pexels-photo-1554740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/950308/pexels-photo-950308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940','https://images.pexels.com/photos/2887879/pexels-photo-2887879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3341813/pexels-photo-3341813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2810197/pexels-photo-2810197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];
      let counter = [];
      for (let i = 0; i < left.length; i++)
        counter.push(0);
      if(left){
        for (let i = 0; i < left.length; i++){
          // @ts-ignore
          left[i].style.backgroundImage =`url("${imgList[counter[i]]}")`;
          // @ts-ignore
          right[i].style.backgroundImage = `url("${imgList[counter[i]+1]}")`;
          left[i].addEventListener('click', e => {
            // @ts-ignore
            e.target.classList.add('left-move-left');
            right[i].classList.add('right-move-left');
            container[i].classList.add('container-movement');
          });
          left[i].addEventListener('animationend', e=>{
            // @ts-ignore
            e.target.classList.remove('left-move-left');
            right[i].classList.remove('right-move-left');
            // @ts-ignore
            e.target.style.backgroundImage = `url("${imgList[++counter[i]]}")`;
            if (counter[i]+1 >= imgList.length){
              counter[i]=-1;
            }
            // @ts-ignore
            right[i].style.backgroundImage = `url("${imgList[counter[i]+1]}")`;
            container[i].classList.remove('container-movement');
          });
        }
      }
    }, 500);
  }

  cube_2_start(){
    setTimeout(function(){
      const cube = document.getElementsByClassName("cube_"),
          imageButtons = document.getElementsByClassName("image-buttons");
      if(cube){
        for(let i = 0; i < cube.length; i++){
          let cubeImageClass = cube[i].classList[1];
          imageButtons[i].addEventListener("click", e => {
            // @ts-ignore
            const targetNode = e.target.nodeName,
                // @ts-ignore
                targetClass = e.target.className;
            if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
              // @ts-ignore
              e.target.parentNode.querySelector(".show-image-1").classList.remove("selected");
              // @ts-ignore
              e.target.parentNode.querySelector(".show-image-2").classList.remove("selected");
              // @ts-ignore
              e.target.parentNode.querySelector(".show-image-5").classList.remove("selected");
              // @ts-ignore
              e.target.classList.add("selected");
              cube[i].className = "cube_ " + targetClass;
              cubeImageClass = targetClass;
            }
          });
        }
      }
    }, 500);
  }

}
