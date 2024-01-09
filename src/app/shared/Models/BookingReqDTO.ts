export class BookingReqDTO {
  serviceId!: number;
  PatientDetailsId!: number;
  otherCustomerPhone!: string;
  customerId?: string;
  customerPhoneNumber!: string;
  customerName!: string;
  customerNationalId!: string;
  employeeId!: string;
  createById!: string;
  from!: string;
  to!: string;
  appointmentDate!: string;
  bookingModelSlotsList!: number[];
}
