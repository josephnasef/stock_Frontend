import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reqShiftTypesDTO, reqShiftTypesUpdateDTO, ResShiftTypesDTO, resShiftTypesInsertDTO, resShiftTypesUpdateDTO } from 'src/app/admin/Models/ResShiftTypesDTO';
import { AppConfig } from '../../Config/app-settings.service';
import { ResponceDTO } from '../Models/ResponceDTO';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public url: String
  constructor(private http: HttpClient,
  ) {
    this.url = AppConfig.settings.apiServerEndPoints.DoctorBooking;
  }
  AutoApprove(model: boolean): Observable<ResponceDTO> {
    return this.http.get<ResponceDTO>
      (`${this.url}Settings/AutoApprove?State=` + model);
  }
  IsAutoApprove(): Observable<boolean> {
    return this.http.get<boolean>
      (`${this.url}Settings/IsAutoApprove`);
  }
  GetAllShiftType(): Observable<ResShiftTypesDTO> {
    return this.http.get<ResShiftTypesDTO>
      (`${this.url}Settings/GetAllShiftType`);
  }
  AddShiftType(model: reqShiftTypesDTO): Observable<resShiftTypesInsertDTO> {
    return this.http.post<resShiftTypesInsertDTO>
      (`${this.url}Settings/AddShiftType`, model);
  }
  UpdateShiftType(model: reqShiftTypesUpdateDTO): Observable<resShiftTypesUpdateDTO> {
    return this.http.post<resShiftTypesUpdateDTO>
      (`${this.url}Settings/UpdateShiftType`, model);
  }
  DeleteShiftType(model: number): Observable<resShiftTypesInsertDTO> {
    return this.http.get<resShiftTypesInsertDTO>
      (`${this.url}Settings/DeleteShiftType?shiftTypeId=` + model);
  }

}
