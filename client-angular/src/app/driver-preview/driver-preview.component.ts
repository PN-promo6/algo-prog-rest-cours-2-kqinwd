import { Component, OnInit, Input } from '@angular/core';

import { Driver } from '../models/driver/driver';

@Component({
  selector: 'app-driver-preview',
  templateUrl: './driver-preview.component.html',
  styleUrls: ['./driver-preview.component.css']
})
export class DriverPreviewComponent implements OnInit {

  @Input() driver: Driver;

  constructor() { }

  ngOnInit(): void {
  }

}
