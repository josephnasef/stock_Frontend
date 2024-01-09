import { CrudOperations } from './crud-operations.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultDeleteDTO } from "../../Models/ResultDeleteDTO";
import { ResultSaveGeneric } from "../../Models/ResultSaveGeneric";
import { ResultSaveListGeneric } from "../../Models/ResultSaveListGeneric";
import { CRUD_ServiceDTO } from '../../Models/CRUD-ServiceDTO';
import { AppConfig } from 'src/app/Config/app-settings.service';
export abstract class CrudOperationService<DTO, ID, Filter> implements CrudOperations<DTO, ID, Filter> {
  appsConfig!: AppConfig;
  myURL!: string;
  constructor(
    protected httpClient: HttpClient,
    protected URL: string
  ) {
    this.myURL = AppConfig.settings.apiServerEndPoints.DoctorBooking + URL;
  }
  GetAll(filter: Filter): Observable<ResultSaveListGeneric<DTO>> {
    return this.httpClient.post<ResultSaveListGeneric<DTO>>(`${this.myURL}${CRUD_ServiceDTO.GetAll}`, filter);
  }
  GetById(Id: ID): Observable<ResultSaveGeneric<DTO>> {
    return this.httpClient.get<ResultSaveGeneric<DTO>>(`${this.myURL}${CRUD_ServiceDTO.GetById}${Id}`);
  }
  Insert(model: DTO): Observable<ResultSaveGeneric<DTO>> {
    return this.httpClient.post<ResultSaveGeneric<DTO>>
      (`${this.myURL}${CRUD_ServiceDTO.Insert}`, model);
  }
  BulkInsert(models: DTO[]): Observable<ResultSaveListGeneric<DTO[]>> {
    return this.httpClient.post<ResultSaveListGeneric<DTO[]>>
      (`${this.myURL}${CRUD_ServiceDTO.BulkInsert}`, models);
  }
  Update(model: DTO): Observable<ResultSaveGeneric<DTO>> {
    return this.httpClient.put<ResultSaveGeneric<DTO>>
      (`${this.myURL}${CRUD_ServiceDTO.Update}`, model);
  }
  BulkUpdate(models: DTO[]): Observable<ResultSaveListGeneric<DTO[]>> {
    return this.httpClient.patch<ResultSaveListGeneric<DTO[]>>
      (`${this.myURL}${CRUD_ServiceDTO.Patch}`, models);
  }
  Delete(Id: ID): Observable<ResultDeleteDTO> {
    return this.httpClient.delete<ResultDeleteDTO>
      (`${this.myURL}${CRUD_ServiceDTO.DeleteById}${Id}`);
  }
  BulkDelete(models: DTO[]): Observable<ResultDeleteDTO> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(models),
    };
    return this.httpClient.delete<ResultDeleteDTO>
      (`${this.myURL}${CRUD_ServiceDTO.BulkDelete}`, options);
  }
}
