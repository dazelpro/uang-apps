import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { DialogCategoryAddComponent } from './dialog-category-add/dialog-category-add.component';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    dataCategoryIn:Object;
    dataCategoryOut:Object;

    constructor(
        private rest: ApiService,
        public dialog: MatDialog
    ) { }

    async ngOnInit() {
        await this.rest.get_category().subscribe((data) => {
            // console.log(data)
            if (data['success']){
                this.dataCategoryIn = data['in'];
                this.dataCategoryOut = data['out'];
            }
        });
    }

    openDialogCategoryAdd() {
        const dialogRef = this.dialog.open(DialogCategoryAddComponent, {
            width: '400px',
            data: {},
        });
        dialogRef.afterClosed().subscribe(arr => {
            this.ngOnInit();
        });
    }

}
