    
export class ModelDialogParameter{
  Condition!:boolean;
  Message!:string;
  Status!:DialogStatus;
}
export enum DialogStatus{Sucess,Failed,Warning,Information}
