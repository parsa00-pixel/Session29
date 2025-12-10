import { Injectable } from '@angular/core';
import { agenciesElemet } from './agencies-element.model';

@Injectable({
  providedIn: 'root',
})
export class AgenciessService {
  private readonly ELEMENT_DATA: agenciesElemet[] = [
    { id: '1', address: 'خوزستان', number: '0246' },
    { id: '2', address: 'رشت', number: '5863' },
    { id: '3', address: 'ساری', number: '0281' },
    { id: '4', address: 'تهران', number: '6446' },
    { id: '5', address: 'همدان', number: '9196' },
    { id: '6', address: 'بوشهر', number: '7843' }
  ]
  list() {
   return this.ELEMENT_DATA
  }
}
