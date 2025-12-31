import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AgenciessService } from './agencies-service';
import { MatDialog } from '@angular/material/dialog';
import { AgenciesDetails } from './agencies-details/agencies-details/agencies-details';
import { Action } from 'rxjs/internal/scheduler/Action';
import { agenciesElemet } from './agencies-element.model';

@Component({
  selector: 'app-agencies-page',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: 'agencies-page.html',
  styleUrl: 'agencies-page.scss',
})
export class AgenciesPage {
  agenciesService = inject(AgenciessService);
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['id', 'address', 'number', 'action'];
  dataSource = this.agenciesService.list();
  refreshData() {
    this.dataSource = this.agenciesService.list();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { Action: 'add', data: undefined },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.agenciesService.add(result);
        this.refreshData()
      }
    });
  }
  editDialog(member: agenciesElemet): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { action: 'edit', data: member }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.agenciesService.edit(result.id, result);
        this.refreshData();
        // console.log(this.memebersService.add(result));
      }
    });
  }

  removeDialog(member: agenciesElemet): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { action: 'remove', data: member }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.agenciesService
        
        
        
        .remove(result.id);
        this.refreshData();
        // console.log(this.memebersService.add(result));
      }
    });
  }
}
