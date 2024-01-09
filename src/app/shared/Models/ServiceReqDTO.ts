export class ServiceReqDTO {
}
export interface ServicesData {
  description: string;
  arabicName: string;
  englishName: string;
  averageServiceTimeMin: number;
  Price: number;
  SlotsNumber: number;
  Icon: string;
  Points: number;
  Employee: any[];
  EmpServ: any[];
  Id: number;
  LastEiteDate: Date;
  LastEditeBy: string;
  Creation_Date: Date;
  CreatedBy: string;
  isDeleted: boolean;
  DeletedDate?: any;
  DeletedBy?: any;
  Isapproved?: any;
}

export interface Obj {
  backgroundphoto: any[];
  servicesData: ServicesData[];
}

export interface ServiceReqDTO {
  Object: Obj;
  Message: string;
  State: boolean;
}
