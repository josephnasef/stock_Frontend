export class IsLoginDTO {
  token!: string;
  id!: string;
  Result!: boolean;
  Errors?: any;
  RolesName!: any[];
  UserName!: string;
}
