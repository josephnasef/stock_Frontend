import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../Config/app-settings.service';
import { AvailableAppointmentReqDTO } from '../Models/AvailableAppointmentReqDTO';
import { AvailableAppointmentResDTO } from '../Models/AvailableAppointmentResDTO';
import { Observable } from 'rxjs';
import { BookingHistoryResDTO } from '../Models/BookingHistoryResDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // Appointments/AvailableAppointment
  public url: String
  constructor(private http: HttpClient,
  ) {
    this.url = AppConfig.settings.apiServerEndPoints.DoctorBooking;
  }

  AvailableAppointment(model: AvailableAppointmentReqDTO): Observable<AvailableAppointmentResDTO> {
    return this.http.post<AvailableAppointmentResDTO>
      (`${this.url}Appointments/AvailableAppointment`, model);
  }
  BookingHistory(): Observable<BookingHistoryResDTO> {
    return this.http.get<BookingHistoryResDTO>
      (`${this.url}Appointments/BookingHistory`);
  }
  ApproveAnAppointment(appointmentId: number): Observable<BookingHistoryResDTO> {
    return this.http.post<BookingHistoryResDTO>
      (`${this.url}Appointments/ApproveAnAppointment?AppointmentId=${appointmentId}`, appointmentId);
  }
  CancelBooking(appointmentId: number): Observable<BookingHistoryResDTO> {
    return this.http.post<BookingHistoryResDTO>
      (`${this.url}Appointments/CancelBooking?AppointmentId=${appointmentId}`, appointmentId);
  }
}
