import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    loading = true;
    noData = true;
    totalSaldo = 0;
    transactionIn:Object;
    transactionOut:Object;

    constructor(
        public dialog: MatDialog,
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        await this.rest.get_data_home().subscribe((data) => {
            if (data['success']){
                // console.log(data['data'][0][0]['totalSaldo'] )
                if (data['data'][0][0]['totalSaldo'] === null){
                    this.loading = false;
                    this.noData = false;
                } else {
                    this.loading = false;
                    this.totalSaldo = data['data'][0][0]['totalSaldo'];
                    this.transactionIn = data['data'][1];
                    this.transactionOut = data['data'][2];
                }
            }
        });
    }

    openDialogAdd() {
        const dialogRef = this.dialog.open(AddTransactionComponent, {
            width: '400px',
            data: {},
        });
        dialogRef.afterClosed().subscribe(arr => {
            this.loading = true;
            this.ngOnInit();
        });
    }

}
