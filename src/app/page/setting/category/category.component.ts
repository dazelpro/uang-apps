import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

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
    ) { }

    async ngOnInit() {
        await this.rest.get_category().subscribe((data) => {
            console.log(data)
            if (data['success']){
                this.dataCategoryIn = data['in'];
                this.dataCategoryOut = data['out'];
            }
        });
    }

}
