import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.scss']
})
export class DrumComponent implements OnInit {


constructor(dataService: DataService) {}

ngOnInit(): void {

}




}
