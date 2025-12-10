import { Injectable } from '@angular/core';
import { memebersElement } from './members-element.mobel';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private readonly ELEMENT_DATA: memebersElement[] = [
    { id: '1', fullName: 'علی رضایی', address: 'همدان', number: '0918' },
    { id: '2', fullName: 'سعید احمدی', address: 'تهران', number: '0919' },
    { id: '3', fullName: 'رضا صمدی', address: 'سمنان', number: '0905' },
    { id: '4', fullName: 'فاطمه جلیلی', address: 'قم', number: '0935' },
    { id: '5', fullName: 'متین حسنی', address: 'گیلان', number: '0955' },
    { id: '6', fullName: 'یگانه میرزایی', address: 'اردبیل', number: '0912' },
    { id: '7', fullName: 'علیرصا نیکی', address: 'همدان', number: '0918' },
    { id: '8', fullName: 'سهیل جعفری', address: 'بوشهر', number: '0918' },
    { id: '9', fullName: 'زهرا احمدی', address: 'تهران', number: '0912' },
    { id: '10', fullName: 'پارسا احمدزاده', address: 'همدان', number: '0905' },
  ];
 list(){
  return [...this.ELEMENT_DATA];
 }
 add(member:memebersElement){
   this.ELEMENT_DATA.push(member); 
 }
}
