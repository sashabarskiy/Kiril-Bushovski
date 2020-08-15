import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
      './fonts.googleapis.com.css.family.Muli.css',
    './fonts.googleapis.com.css.family.Open.Sans.400.700.css',
    './fonts.googleapis.com.css.family.Raleway.css',
    './fonts.googleapis.com.css.family.Slabo.27px.css',
    './about.component.css',
  ]
})
export class AboutComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
