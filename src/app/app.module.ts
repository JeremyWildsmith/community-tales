import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {StoriesBoardComponent} from './stories-board/stories-board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatGridListModule, MatTableModule, MatIconModule, MatIconRegistry, MatToolbarModule, MatMenuModule, MatStepperModule} from '@angular/material';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ErrorPageNotFoundComponent} from './error-page-not-found/error-page-not-found.component';
import {CreateStoryPageComponent} from './create-story-page/create-story-page.component';
import {MatInputModule} from '@angular/material';
import {StoryService} from "./story.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReadStoryPageComponent} from './read-story-page/read-story-page.component';
import {WriteNextPageComponent} from './write-next-page/write-next-page.component';

import {AngularFireModule} from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AngularFirestoreModule } from 'angularfire2/firestore';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { LoadingPageComponent } from './loading-page/loading-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDIvmUoX7NSZviYobDrrriYxVLC36lAzTU",
    authDomain: "communitytales-39909.firebaseapp.com",
    databaseURL: "https://communitytales-39909.firebaseio.com",
    projectId: "communitytales-39909",
    storageBucket: "communitytales-39909.appspot.com",
    messagingSenderId: "375118973018"
};

const appRoutes: Routes = [
    {path: 'home/:filter', component: HomePageComponent},
    //{path: 'hero/:id', component: HeroDetailComponent},
    {
        path: '',
        redirectTo: '/home/all',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/home/all',
        pathMatch: 'full'
    },
    {
        path: 'read/:storyId',
        component: ReadStoryPageComponent
    },
    {
        path: 'newStory',
        component: CreateStoryPageComponent
    },
    {
        path: 'newPage/:parentStoryId',
        component: WriteNextPageComponent
    },
    {path: '**', component: ErrorPageNotFoundComponent}
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
        WriteNextPageComponent,
        LoadingPageComponent,
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
        HttpClientModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        HttpClientJsonpModule,
        MatProgressSpinnerModule,
    ],
    providers: [StoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


