import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AgenciessService } from './agencies-service';
import { MatDialog } from '@angular/material/dialog';
import { AgenciesDetails } from './agencies-details/agencies-details/agencies-details';
import { Action } from 'rxjs/internal/scheduler/Action';
import { agenciesElemet } from './agencies-element.model';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-agencies-page',
  imports: [MatTableModule, MatButtonModule, MatProgressBarModule, MatIcon],
  templateUrl: 'agencies-page.html',
  styleUrl: 'agencies-page.scss',
})
export class AgenciesPage implements OnInit {
  ngOnInit(): void {
    this.refreshData()
  }
  readonly agenciesService = inject(AgenciessService);
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['id', 'address', 'number', 'action'];
  dataSource:agenciesElemet[] = [];
  busy=false;

  refreshData(){
    this.busy=true;
    this.agenciesService.list().subscribe({
      next:(result)=>{
        this.busy=false;
        this.dataSource=result;
      },
      error:()=>{
        this.busy=false;
        window.alert("خطا در اجرا");
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { Action: 'add', data: undefined },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.agenciesService.add(result);
        this.refreshData();
      }
    });
  }
  editDialog(agencie: agenciesElemet): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { action: 'edit', data: agencie }
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

  removeDialog(agencies: agenciesElemet): void {
    const dialogRef = this.dialog.open(AgenciesDetails, {
      data: { action: 'remove', data: agencies }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.agenciesService.remove(result.id);
        this.refreshData();
        // console.log(this.memebersService.add(result));
      }
    });
  }
}
