 import { Component, Input, OnInit } from '@angular/core';
import { SpinnerModel } from 'src/app/shared/Models/SpinnerModel';





@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  SpinnerModel:SpinnerModel=new SpinnerModel();
  constructor() { }

  ngOnInit() {

  }

  get Parameter() :SpinnerModel{
    return this.SpinnerModel;
  }

  @Input()
  set Parameter(value:SpinnerModel){
    this.SpinnerModel = value;

  }
}
