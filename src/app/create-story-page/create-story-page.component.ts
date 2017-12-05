import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

import {Story, StoryService} from '../story.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-story-page',
    templateUrl: './create-story-page.component.html',
    styleUrls: ['./create-story-page.component.css']
})
export class CreateStoryPageComponent implements OnInit {
    contactEmail: string = "";
    summary: string = "";
    title: string = "";
    genre: string = "Mystery";
    paragraph: string = "";

    errorDescription: string = "";

    constructor(private _formBuilder: FormBuilder, private storyService: StoryService, private router: Router) {}

    ngOnInit() {

    }

    validateContact(stepper?: MatStepper) {
        this.errorDescription = "";

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(this.contactEmail)) {
            this.errorDescription = "Please enter a valid contact e-mail address.";
            return false;
        }

        if (stepper != undefined)
            stepper.next();

        return true;
    }

    validateDescription(stepper?: MatStepper) {
        this.errorDescription = "";

        if (this.title.length < 3 || this.title.length > 50) {
            this.errorDescription = "Your title must be between 3 and 50 characters long.";
            return false;
        }
        
        if (this.summary.length < 10 || this.summary.length > 200) {
            this.errorDescription = "Your summary must be between 10 and 400 characters long.";
            return false;
        }

        if (stepper != undefined)
            stepper.next();
        
        return true;
    }

    validateParagraph(stepper?: MatStepper) {
        this.errorDescription = "";
        
        if (this.paragraph.length < 200 || this.paragraph.length > 3000) {
            this.errorDescription = "Your page must be between 200 and 3000 characters long.";
            return false;
        }
        
        if (stepper != undefined)
            stepper.next();

        return true;
    }

    publishStory(stepper: MatStepper) {
        if (!this.validateContact()) {
            stepper.previous();
            stepper.previous();
            stepper.previous();
            return false;
        }
        
        if (!this.validateDescription()) {
            stepper.previous();
            stepper.previous();
            return false;
        }


        if (!this.validateParagraph()) {
            stepper.previous();
            return false;
        }

        let story = new Story();
        story.title = this.title;
        story.author = this.contactEmail;
        story.content = this.paragraph;
        story.genre = this.genre;
        story.date = Math.round((new Date()).getTime() / 1000);
        story.parent = null;
        story.summary = this.summary;
        story.page = 1;
        story.score = 0;

        this.storyService.saveStory(story).then(() => {
            this.router.navigateByUrl("/home");
        }).catch(() => {
            alert("Unable to submit story!.");
        });
    }
}
