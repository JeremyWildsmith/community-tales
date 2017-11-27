import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoriesBoardComponent} from './stories-board/stories-board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule, MatIconRegistry, MatToolbarModule, MatMenuModule} from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        StoriesBoardComponent,
        SideNavComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


