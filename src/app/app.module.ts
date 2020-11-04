import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BlankComponent } from './layout/blank/blank.component';
import { ToolbarMainComponent } from './layout/toolbar-main/toolbar-main.component';
import { ToolbarPageComponent } from './layout/toolbar-page/toolbar-page.component';
import { RoutingModule } from './routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './page/home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        BlankComponent,
        ToolbarMainComponent,
        ToolbarPageComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        RoutingModule,
        AuthModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
