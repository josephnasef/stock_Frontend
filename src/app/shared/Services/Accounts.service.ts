import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/Config/app-settings.service';
import { IsLoginDTO } from '../Models/IsLoginDTO';
import { LoginDTO } from '../Models/LoginDTO';
import { Observable } from 'rxjs';
import { RegistrationDTO } from '../Models/registrationDTO';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public url: String
  constructor(private http: HttpClient,
  ) {
    this.url = AppConfig.settings.apiServerEndPoints.DoctorBooking;
  }
  Login(model:LoginDTO): Observable<IsLoginDTO> {
    return this.http.post<IsLoginDTO>
      (`${this.url}Accountent/Login`, model);
  }
  Register(model:RegistrationDTO): Observable<IsLoginDTO> {
    return this.http.post<IsLoginDTO>
      (`${this.url}Accountent/Register`, model);
  }
  GetUserById(UserId:string): Observable<User> {
    return this.http.get<User>
      (`${this.url}Accountent/Details?id=`+UserId);
  }

}
