   import * as CryptoJS from 'crypto-js';
export class EncryptionHelper {

  static iv = CryptoJS.enc.Utf8.parse('tx@M_VCmD#yccau9');
  static decPassword: any = CryptoJS.enc.Utf8.parse('tx@M_VCmD#yccau9&A?%7%xfjAC?7%s8');

  static Encrypt(val: string): string {
    var key = CryptoJS.enc.Utf8.parse(EncryptionHelper.decPassword);
    let data:string = CryptoJS.enc.Utf8.parse(val);
    return  encodeURIComponent(CryptoJS.AES.encrypt(val, key, { iv: this.iv }).toString());
  }

  static Decrypt(EncryptedText: string):string {
    var key = CryptoJS.enc.Utf8.parse(EncryptionHelper.decPassword);
    let data:string = CryptoJS.enc.Utf8.parse(EncryptedText);
    return  CryptoJS.AES.decrypt(decodeURIComponent(EncryptedText), key, { iv: this.iv }).toString(CryptoJS.enc.Utf8);
  }

}
