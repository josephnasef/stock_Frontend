import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/Config/app-settings.service';
import { User } from '../Models/User';

@Injectable()
export class UsersFromServerService {
  public userProfile: String = '';
  constructor(private http: HttpClient,

  ) {
    this.userProfile = AppConfig.settings.apiServerEndPoints.UserprofileAPI;
  }
  GetUSerById(id: string): Observable<User> {
    return this.http.get<User>(this.userProfile + `Accountent/Details?id=${id}`);
  }
}
