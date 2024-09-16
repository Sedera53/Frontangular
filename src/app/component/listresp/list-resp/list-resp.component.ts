import { Component, OnInit } from '@angular/core';
import { Codebenef } from 'src/app/models/codebenef';
import { CodebenefService } from 'src/app/services/codebenef.service';
import { AddbeneficiareComponent } from '../addbeneficiare/addbeneficiare.component';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-resp',
  templateUrl: './list-resp.component.html',
  styleUrls: ['./list-resp.component.css']
})
export class ListRespComponent implements OnInit {
  //codebenefs?: Codebenef[];
  //currentcodebenef: Codebenef = {}
  codebenefList: any[] = [];
  currentPage = 0;
  pageSize = 5;
  totalItems = 0;
  constructor(private codebenefservice: CodebenefService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCodebenefList();
  }



  getCodebenefList(): void {
    this.codebenefservice.getCodebenefList(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.codebenefList = response.content;
        this.totalItems = response.totalElements;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getCodebenefList();
  }

  openDialog1(): void {
    const dialogRef1 = this.dialog.open(AddbeneficiareComponent, {
      width: '400px',
      data: { codetype: '', designation: '' }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.getCodebenefList();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddbeneficiareComponent, {
      width: '400px',
      data: { modeexecution: '', designation: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.getCodebenefList();
    });
  }



}
