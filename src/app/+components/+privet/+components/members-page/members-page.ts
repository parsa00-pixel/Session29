import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { memebersElement } from './members-element.mobel';
import { MembersService } from './members-service';
import { MatDialog } from '@angular/material/dialog';
import { MemberDetails } from './member-details/member-details';



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'members-page.scss',
  templateUrl: 'members-page.html',
  imports: [MatTableModule, MatButtonModule],
})
export class MembersPage {
  memebersService = inject(MembersService);
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['id', 'fullName', 'address', 'number', 'action'];
  dataSource = this.memebersService.list();

  refreshData(){
    this.dataSource=this.memebersService.list();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MemberDetails, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
         this.memebersService.add(result);
         this.refreshData();
        // console.log(this.memebersService.add(result));
      }
    });
  }
}
