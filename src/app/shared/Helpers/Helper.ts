   export class Helper {
  static IsNullOrEmpty(val: string): boolean {
    return (!val || 0 === val.length || val == undefined || val == '');
  }
  static Undefined(val: any): boolean {
    return (!val || 0 === val.length || val == undefined || val == '');
  }

  static NumberNotSet(val: any): boolean {
    return (val == undefined);
  }

  static NotSet(val: any): boolean {
    return (!val || val === null || val == undefined);
  }

  static FileNotUploaded(val: File): boolean {
    return (val === null || val == undefined || this.IsNullOrEmpty(val.name));
  }
  static BooleanNotSet(val: any): boolean {
    return (val === null || val == undefined);
  }

  static addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  static GroupBy(list:any, keyGetter:any) {
    const map = new Map();
    list.forEach((item:any) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
  }

  static GetUserRoles():string[]{

    if(!Helper.NotSet( sessionStorage.getItem('UserRoles')))
    return sessionStorage.getItem('UserRoles')!.split(',');
    else
    return [];
  }
}
