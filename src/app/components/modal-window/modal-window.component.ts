import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

  close_modal(){
    const modal = document.getElementById("modal");
    modal.style.opacity = "0";
    setTimeout(function(){
      modal.style.display = "none";
    },300);
  }

}
