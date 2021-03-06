import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  host: {
    class:'market'
  }
})
export class MarketComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

  open_modal(){
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    setTimeout(function(){
      modal.style.opacity = "1";
    },300);
  }

}
