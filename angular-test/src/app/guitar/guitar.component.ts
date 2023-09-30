import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent {
  name = 'Aniket';




  constructor(data: DataService) {}

  changeName() {
    this.name ='Tiwari'
  }


}
