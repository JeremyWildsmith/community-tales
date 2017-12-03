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
    paragraph: string;
    parentStory: Story = new Story();

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
