import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from './IAppSettings';
import * as Configs from 'src/assets/Config/Config.json';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfig {
  static settings: IAppConfig;
  constructor(private http: HttpClient) { }
  load() {
    const jsonFile = `assets/Config/Config.${environment.name}.json`;
    return new Promise<boolean>((resolve, reject) => {
        this.http.get(jsonFile).toPromise().then((response) => {
           AppConfig.settings = <IAppConfig> response;
           resolve(true);
        }).catch((response: any) => {
          resolve(false);
        });
    });
  }

}
