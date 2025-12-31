import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,

} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { memebersElement } from '../members-element.mobel';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-member-details',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatInputModule, 
    MatIconModule
  ],
  templateUrl: './member-details.html',
  styleUrl: './member-details.scss',
})
export class MemberDetails implements OnInit {
  ngOnInit(): void {
    if (this.data.action=='edit') {
      this.member.fullName=this.data.data.fullName;
      this.member.number=this.data.data.number;
      this.member.address=this.data.data.address;
      this.member.id=this.data.data.id;
    }
    else if (this.data.action=='remove') {
      this.member.fullName=this.data.data.fullName;
      this.member.number=this.data.data.number;
      this.member.address=this.data.data.address;
      this.member.id=this.data.data.id;
    }
  }
  readonly dialogRef = inject(MatDialogRef<MemberDetails>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  member: memebersElement = {
    id: '',
    address: '',
    fullName: '',
    number: ''
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
  action: string;
  data: memebersElement;
}