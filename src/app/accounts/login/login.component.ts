import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { AccountsService } from '../../shared/Services/Accounts.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService,
    public accountsService: AccountsService,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
    public router: Router,
    private cookie: CookieService) {
    this.typeSelected = 'ball-fussion';
  }
  typeSelected: string;
  form!: UntypedFormGroup;
  IsValid: boolean = true;
  ngOnInit(): void {
    debugger
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      'mobile': new UntypedFormControl(null, [Validators.required]),
      'password': new UntypedFormControl('', [Validators.required]),
      'device_token': new UntypedFormControl('', [Validators.required])
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  // GetAllShiftType() {
  //   this.shiftTypeService.GetAllShiftType().subscribe(s => {
  //     sessionStorage.setItem('ShiftTypes', JSON.stringify(s.Object.Message));
  //   })
  // }
  // GetAllService() {
  //   this.appServicesService.AllService().subscribe(s => {
  //     sessionStorage.setItem('servicesData', JSON.stringify(s.Object.servicesData));
  //   })
  // }
  isOverlay: boolean = false;
  async submit() {
    this.spinnerService.show();
    try {
      debugger
      // var result =await firstValueFrom(this.accountsService.Login(this.form.value));
      var restlt = await firstValueFrom(this.accountsService.Login(this.form.value))

      if (restlt) {
        debugger
            await this.cookie.set('F_UR_453_X0', JSON.stringify(restlt.token));
            var restlt2 = await firstValueFrom(this.accountsService.GetUserById(restlt.id))
            await sessionStorage.setItem("US_", JSON.stringify(restlt2));
            this.isOverlay = false;
            this.spinnerService.hide();
            this.router.navigate(['/Admin/Shift']);

      } else {
        this.spinnerService.hide();
        this.toastr.error(this.translate.instant('NotLogin'), this.translate.instant('ErrorInLogin'))
      }
      // this.accountsService.Login(this.form.value).subscribe(
      //   async s => {
      //     debugger
      //     await sessionStorage.setItem('F_UR_453_X0', JSON.stringify(s.token));
      //     var restlt = await firstValueFrom(this.accountsService.GetUserById(s.Id))
      //     await sessionStorage.setItem("US_", JSON.stringify(restlt));
      //     this.isOverlay = false;
      //     this.spinnerService.hide();
      //     this.router.navigate(['/Admin/Shift']);
      //   },
      //   error => {
      //     this.spinnerService.hide();
      //     this.toastr.error(this.translate.instant('NotLogin'), this.translate.instant('ErrorInLogin'))
      //   }
      // )
    } catch (error) {

      this.spinnerService.hide();
      this.toastr.error(this.translate.instant('NotLogin'), this.translate.instant('ErrorInLogin'))
    }

    // this.GetAllShiftType();
    // this.GetAllService();
    if (this.form.valid) {
    } else {
      this.IsValid = false
    }

  }
}
