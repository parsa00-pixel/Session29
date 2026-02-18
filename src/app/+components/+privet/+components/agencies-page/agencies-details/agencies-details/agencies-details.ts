import { Component, inject, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialogModule, MatDialogTitle, MatDialogClose, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AgenciessService } from '../../agencies-service';
import { agenciesElemet } from '../../agencies-element.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-agencies-details',
  imports: [MatDialogModule,
    MatDialogContent,
    MatDialogActions,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogTitle,
    MatDialogClose,
  ],
  templateUrl: './agencies-details.html',
  styleUrl: './agencies-details.scss',
})
export class AgenciesDetails implements OnInit {

  readonly dialogRef = inject(MatDialogRef<AgenciesDetails>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  onNoClick(): void {
    this.dialogRef.close();
  }
  agencies: agenciesElemet = {
    id: '',
    address: '',
    number: ''
  }
  ngOnInit(): void {
    if (this.data.action == 'edit') {
      this.agencies.number = this.data.data.number;
      this.agencies.address = this.data.data.address;
      this.agencies.id = this.data.data.id;
    }
    else if (this.data.action == 'remove') {
      this.agencies.number = this.data.data.number;
      this.agencies.address = this.data.data.address;
      this.agencies.id = this.data.data.id;
    }
  }
}

export interface DialogData {
  action: string;
  data: agenciesElemet;
}