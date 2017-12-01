import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {StoriesBoardComponent} from './stories-board/stories-board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatGridListModule, MatTableModule, MatIconModule, MatIconRegistry, MatToolbarModule, MatMenuModule, MatStepperModule} from '@angular/material';
import {SideNavComponent} from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';
import { CreateStoryPageComponent } from './create-story-page/create-story-page.component';
import {MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {StoryService} from "./story.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadStoryPageComponent } from './read-story-page/read-story-page.component';

const appRoutes: Routes = [
    {path: 'home', component: HomePageComponent},
    //{path: 'hero/:id', component: HeroDetailComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'newStory',
        component: CreateStoryPageComponent
    },
    {path: '**', component: ErrorPageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        StoriesBoardComponent,
        SideNavComponent,
        HomePageComponent,
        ErrorPageNotFoundComponent,
        CreateStoryPageComponent,
        ReadStoryPageComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatStepperModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [StoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


