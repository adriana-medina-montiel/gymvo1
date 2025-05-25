import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule]  // Aquí sí es válido
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() backButton!: string;



  constructor() { }

  ngOnInit() {}

}
