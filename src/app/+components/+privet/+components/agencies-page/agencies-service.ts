import { Injectable } from '@angular/core';
import { agenciesElemet } from './agencies-element.model';
import { delay, of } from 'rxjs';

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
    return of([...this.ELEMENT_DATA]).pipe(delay(2400));
  }
  add(agencies: agenciesElemet) {
    this.ELEMENT_DATA.push(agencies);
  }
  edit(id: string, agencie: agenciesElemet) {
    const index = this.ELEMENT_DATA.findIndex(m => m.id == id);
    if (index != -1) {
      this.ELEMENT_DATA[index] = agencie;
    }
  }
  remove(id: string) {
    const index = this.ELEMENT_DATA.findIndex(m => m.id == id);
    if (index != -1) {
      this.ELEMENT_DATA.splice(index, 1);
    }
  }
}
