import { Component, Input, OnInit } from '@angular/core';
import { Testdrive } from '../models/testdrive/testdrive';

@Component({
  selector: 'app-testdrive-preview',
  templateUrl: './testdrive-preview.component.html',
  styleUrls: ['./testdrive-preview.component.css']
})
export class TestdrivePreviewComponent implements OnInit {

  @Input() testdrive: Testdrive;

  constructor() { }

  ngOnInit(): void {
  }

}
