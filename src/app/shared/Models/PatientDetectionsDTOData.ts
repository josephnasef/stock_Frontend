export class PatientDetectionsDTOData {
}

export interface PatientDetectionsDTOData {
  DiseaseName: string;
  DoctorName: string;
  patientDetailsId: number;
  patientDetails?: any;
  detectionAttachetes: any[];
  Id: number;
  LastEiteDate?: any;
  LastEditeBy: string;
  Creation_Date: Date;
  CreatedBy?: any;
  isDeleted: boolean;
  DeletedDate?: any;
  DeletedBy: string;
  Isapproved: boolean;
}

export interface Object {
  PatientDetectionsDTOData: PatientDetectionsDTOData[];
}

export interface PatientDetectionsDTODataRes {
  Object: Object;
  Message: string;
  State: boolean;
}
