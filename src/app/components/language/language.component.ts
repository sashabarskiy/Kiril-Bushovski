import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  languages;

  ngOnInit(): void {

    this.languages = document.getElementsByClassName("language");

  }

  right_triangle = "►";

  down_triangle = "▼";

  sign = this.right_triangle;

  toggle(){
    if(this.sign == this.right_triangle){
      this.sign = this.down_triangle;
      for(let i = 0; i < this.languages.length; i++){
        this.languages[i].style.display = "inline";
        setTimeout(function(main){
          main.languages[i].style.opacity = "1";
        },100, this);
      }
    } else {
      this.sign = this.right_triangle;
      for(let i = 0; i < this.languages.length; i++){
        this.languages[i].style.opacity = "0";
        setTimeout(function(main){
          main.languages[i].style.display = "none";
        },300, this);
      }
    }
  }

}
