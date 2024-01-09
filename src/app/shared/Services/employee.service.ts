import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/Config/app-settings.service';
import { RequestPostDTO } from '../../admin/Models/RequestShiftDTO';
import { EmployeeDTO } from '../Models/EmployeeDTO';
import { ResponceDTO } from '../Models/ResponceDTO';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  url!: String
  constructor(
    private http: HttpClient,
  ) {
    this.url = AppConfig.settings.apiServerEndPoints.DoctorBooking;
  }
  GetAllEmployee(): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>
      (`${this.url}Accountent/get`);
  }
CreateShift(Model:RequestPostDTO): Observable<ResponceDTO> {
    return this.http.post<ResponceDTO>
      (`${this.url}Posts/Create`,Model);
  }

}
