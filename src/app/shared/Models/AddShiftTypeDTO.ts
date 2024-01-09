
export class Message {
  Hours!: number;
  ShiftTypeName!: string;
  Id!: number;
  LastEiteDate?: any;
  LastEditeBy?: any;
  Creation_Date!: Date;
  CreatedBy?: any;
  isDeleted!: boolean;
  DeletedDate?: any;
  DeletedBy?: any;
  Isapproved?: any;
}

export class Object {
  Message!: Message[];
}

export class AddShiftTypeDTO {
  Object!: Object;
  Message!: string;
  State!: boolean;
}

