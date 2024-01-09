import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { AccountsService } from 'src/app/shared/Services/Accounts.service';
@Component({
  selector: 'app-registriation',
  templateUrl: './registriation.component.html',
  styleUrls: ['./registriation.component.css']
})
export class RegistriationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService,
    public accountsService: AccountsService,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
    public router: Router,
    private cookie: CookieService) {
  }
  form!: UntypedFormGroup;
  IsValid: boolean = true;
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      'name': new UntypedFormControl(null, [Validators.required]),
      'mobile': new UntypedFormControl(null, [Validators.required]),
      'firstName': new UntypedFormControl(null, [Validators.required]),
      'lastName': new UntypedFormControl(null, [Validators.required]),
      'password': new UntypedFormControl(null, [Validators.required]),
      'email': new UntypedFormControl(null, [Validators.required]),
      'device_token': new UntypedFormControl('', [Validators.required]),
      'fingerPrintIdAndroid': new UntypedFormControl('', [Validators.required])
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  result: any;
  async submit() {
    this.spinnerService.show();
    var result;
    try {
      debugger
      result = await firstValueFrom(this.accountsService.Register(this.form.value))
      if (result.errors == null) {
        this.result = result;
        this.cookie.set('F_UR_453_X0', JSON.stringify(result.token));
        this.router.navigate(['/Admin/']);
        this.spinnerService.hide();
      }
      else {
        this.spinnerService.hide();
        this.toastr.error(this.translate.instant('NotRegist'), this.translate.instant('ErrorInRegist'))
      }
    } catch (error) {
      this.spinnerService.hide();
      this.toastr.error(this.translate.instant('NotRegist'), this.translate.instant('ErrorInRegist'))
    }
    if (this.form.valid) {
    } else {
      this.IsValid = false
    }
  }
}
