import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

import {Story, StoryService} from '../story.service';

@Component({
    selector: 'app-create-story-page',
    templateUrl: './create-story-page.component.html',
    styleUrls: ['./create-story-page.component.css']
})
export class CreateStoryPageComponent implements OnInit {
    contactEmail: string = "noemail";
    summary: string = "";
    title: string = "";
    genre: string = "Mystery";
    paragraph: string;

    isLinear = false;

    constructor(private _formBuilder: FormBuilder, private storyService: StoryService) {}

    ngOnInit() {

    }

    validateContact(stepper: MatStepper) {
        stepper.next();
        return false;
    }

    validateDescription(stepper: MatStepper) {
        stepper.next();
    }

    validateParagraph(stepper: MatStepper) {
        stepper.next();
    }

    publishStory() {
        let story = new Story();
        story.title = this.title;
        story.author = this.contactEmail;
        story.content = this.paragraph;
        story.genre = this.genre;
        story.date = Math.round((new Date()).getTime() / 1000);
        story.parent = null;
        story.summary = this.summary;
        
        this.storyService.saveStory(story).then(()=> {}).catch(()=> {});
    }
}
