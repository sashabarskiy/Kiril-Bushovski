import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
