export interface Employee {
  LastEiteDate?: any;
  LastEditeBy?: any;
  Creation_Date: Date;
  CreatedBy?: any;
  isDeleted?: any;
  state?: any;
  Isapproved?: any;
  UsernameEn?: any;
  FirstNameEn: string;
  lastNameEn: string;
  UsernameAr?: any;
  FirstNameAr?: any;
  lastNameAr?: any;
  UserType: number;
  ExternalEmail?: any;
  Birthdate: Date;
  Points: number;
  ServiceId?: any;
  Image?: any;
  device_token?: any;
  fingerPrintIdAndroid?: any;
  Service?: any;
  shifts: any[];
  Bills: any[];
  EmployeesAppointment: any[];
  CustomersAppointment: any[];
  EmpServ: any[];
  Id: string;
  UserName: string;
  NormalizedUserName?: any;
  Email?: any;
  NormalizedEmail?: any;
  EmailConfirmed: boolean;
  PasswordHash?: any;
  SecurityStamp: string;
  ConcurrencyStamp: string;
  PhoneNumber?: any;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEnd?: any;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
}

export interface Service {
  description: string;
  arabicName: string;
  englishName: string;
  averageServiceTimeMin: number;
  Price: number;
  SlotsNumber: number;
  Icon?: any;
  Points: number;
  Employee: any[];
  EmpServ: any[];
  Id: number;
  LastEiteDate?: any;
  LastEditeBy?: any;
  Creation_Date: Date;
  CreatedBy?: any;
  isDeleted: boolean;
  DeletedDate?: any;
  DeletedBy?: any;
  Isapproved?: any;
}

export interface BookingHistoryItem {
  From: string;
  To: string;
  AppointmentDate: Date;
  ServiceId: number;
  CustomerId?: any;
  EmployeeId: string;
  Employee: Employee;
  Slots: any[];
  State: number;
  CustomerPhoneNumber?: any;
  CustomerName?: any;
  CustomerNationalId?: any;
  Service: Service;
  Customer?: any;
  OtherCustomerPhone: string;
  billItems?: any;
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
  Data: BookingHistoryItem[];
}

export interface BookingHistoryResDTO {
  Object: Obj;
  Message: string;
  State: boolean;
}
