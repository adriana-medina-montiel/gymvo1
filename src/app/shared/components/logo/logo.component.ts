import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
