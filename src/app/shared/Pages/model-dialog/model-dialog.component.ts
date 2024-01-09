import { Component, Input, OnInit } from '@angular/core';
import { DialogStatus } from './../../Models/ModalDialogParameter';
import { ModelDialogParameter } from '../../Models/ModalDialogParameter';



@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css'],

})
export class ModelDialogComponent implements OnInit{

  _isClosed:boolean=false;
  ModelDialogParameter:ModelDialogParameter=new ModelDialogParameter();
  constructor() { }


  Close(){
    this.ModelDialogParameter.Condition=false;
  }

  ngOnInit() {
  }

  get CsscClass():string {
    if(this.ModelDialogParameter.Status === DialogStatus.Sucess)
    return"alert alert-success col-md-8 ";
    if(this.ModelDialogParameter.Status === DialogStatus.Failed)
    return"alert alert-danger col-md-8 ";
    if(this.ModelDialogParameter.Status === DialogStatus.Warning)
    return"alert alert-warning col-md-8 ";
    else
    return"alert alert-primary col-md-8 ";
  }

  get Parameter() :ModelDialogParameter{
    return this.ModelDialogParameter;
  }
  @Input()
  set Parameter(value:ModelDialogParameter){

    this.ModelDialogParameter = value;
    if(this.ModelDialogParameter.Condition)
    {
      document.body.setAttribute('style','overflow:hidden');
    }
    else{

      document.body.setAttribute('style','');
    }
  }


}
