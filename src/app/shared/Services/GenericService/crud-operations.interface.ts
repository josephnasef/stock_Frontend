 import { Observable } from "rxjs";
import { ResultDeleteDTO } from "../../Models/ResultDeleteDTO";
import { ResultSaveGeneric } from "../../Models/ResultSaveGeneric";
import { ResultSaveListGeneric } from "../../Models/ResultSaveListGeneric";



export interface CrudOperations<DTO, ID, Filter> {
    GetAll(filter: Filter): Observable<ResultSaveListGeneric<DTO>>;
    GetById(Id: ID): Observable<ResultSaveGeneric<DTO>>;
    Insert(model: DTO): Observable<ResultSaveGeneric<DTO>>;
    BulkInsert(models: DTO[]): Observable<ResultSaveListGeneric<DTO[]>>;
    Update(model: DTO): Observable<ResultSaveGeneric<DTO>>;
    BulkUpdate(models: DTO[]): Observable<ResultSaveListGeneric<DTO[]>>;
    Delete(Id: ID): Observable<ResultDeleteDTO>;
    BulkDelete(models: DTO[]): Observable<ResultDeleteDTO>;
}
