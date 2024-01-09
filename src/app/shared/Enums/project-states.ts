   export enum ProjectStates {
  New = 1,    // جديد
  ReturnfromAdministrator = 2,    // إرجاع من مدير النظام
  ReturnfromCoordenator = 3,    // إرجاع من المشرف
  ReturnfromEvaluator = 4,    // إرجاع من المقيم
  ModifiedAccordingToAdministrator = 5,    // تم تعديل الطلب بناء على مدير النظام
  ModifiedAccordingToCoordenator = 6,    // تم تعديل الطلب بناء على المشرف
  ModifiedAccordingToEvaluator = 7,    // تم تعديل الطلب بناء على المقيم
  UnderScrutiny = 8,    // تحت التدقيق
  UnderEvaluation = 9,    // تحت التقييم
  Rated = 10,    // تم التقييم
  Saved = 11,    // تم الحفظ
  CannotServed = 12,    // لا يمكن خدمة المستفيد
  UnderGuidance = 13,    // تحت التوجيه
  directed = 14,    // تم التوجيه
  ReceivedService = 15,    // الطالب حصل على الخدمة
  NotReceiveService = 16,    // الطالب لم يحصل على الخدمة

}
