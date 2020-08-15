import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
