import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

import {Story, StoryService} from '../story.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-write-next-page',
    templateUrl: './write-next-page.component.html',
    styleUrls: ['./write-next-page.component.css']
})
export class WriteNextPageComponent implements OnInit {
    contactEmail: string = "";
    paragraph: string = "";
    parentStory: Story = new Story();
    errorDescription: string = "";

    constructor(private _formBuilder: FormBuilder, private storyService: StoryService, private router: Router, private route: ActivatedRoute) {
        this.parentStory.title = "";
        this.parentStory.author = "";
        this.parentStory.content = "";
        this.parentStory.genre = "";
        this.parentStory.date = 0;
        this.parentStory.summary = "";
        this.parentStory.page = 1;

        this.route.params.subscribe(params => {
            storyService.getStory(params.parentStoryId).then((story: Story) => {
                this.parentStory = story;
            });
        });
    }

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
            return;
        }
        
        if (!this.validateParagraph()) {
            stepper.previous();
            return;
        }
        
        let story = new Story();
        story.title = this.parentStory.title;
        story.author = this.contactEmail;
        story.content = this.paragraph;
        story.genre = this.parentStory.genre;
        story.date = Math.round((new Date()).getTime() / 1000);
        story.parent = this.parentStory.id;
        story.page = this.parentStory.page + 1;
        story.summary = this.parentStory.summary;
        story.score = 0;

        this.storyService.saveStory(story).then(() => {
            this.router.navigateByUrl("/home/" + this.parentStory.id);
        }).catch(() => {
            alert("Unable to submit story!.");
        });
    }

}
