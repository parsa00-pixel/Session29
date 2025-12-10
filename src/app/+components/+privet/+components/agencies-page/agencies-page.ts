import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AgenciessService } from './agencies-service';

@Component({
  selector: 'app-agencies-page',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: 'agencies-page.html',
  styleUrl: 'agencies-page.scss',
})
export class AgenciesPage {
  agenciesService=inject(AgenciessService);
  displayedColumns: string[] = ['id', 'address', 'number','action'];
  dataSource = this.agenciesService.list();
}
