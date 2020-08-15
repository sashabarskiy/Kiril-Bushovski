import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void { }

}
