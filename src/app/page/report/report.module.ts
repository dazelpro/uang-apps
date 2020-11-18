import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportComponent } from './main-report/main-report.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReportRoutingModule } from './report-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
    declarations: [MainReportComponent],
    imports: [
        CommonModule,
        ReportRoutingModule,
        MaterialModule,
        FormsModule,
        GoogleChartsModule
    ]
})
export class ReportModule { }
