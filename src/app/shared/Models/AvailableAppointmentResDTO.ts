

export interface AppointmentslotsList {
  Id: number;
  start: string;
  end: string;
  ShiftId: number;
  Status: number;
  serviceId?: any;
  slotsDate: Date;
}

export interface AvailableSlot {
  EmployeeId: string;
  from: string;
  to: string;
  AppointmentDate: string;
  AppointmentslotsList: AppointmentslotsList[];
}

export interface Obj {
  backgroundphoto: any[];
  availableSlots: AvailableSlot[];
}

export interface ResValue {
  Object: Obj;
  Message: string;
  State: boolean;
}

export interface AvailableAppointmentResDTO {
  Value: ResValue;
}
