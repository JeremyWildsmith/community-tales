import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Story, StoryService} from '../story.service';

@Component({
    selector: 'app-read-story-page',
    templateUrl: './read-story-page.component.html',
    styleUrls: ['./read-story-page.component.css']
})
export class ReadStoryPageComponent implements OnInit {

    currentStory: Story = new Story();
    formattedDate: string = "";

    constructor(private route: ActivatedRoute, private storyService: StoryService, private router: Router) {
        this.currentStory.title = "";
        this.currentStory.author = "";
        this.currentStory.content = "";
        this.currentStory.genre = "";
        this.currentStory.date = 0;
        this.currentStory.summary = "";
        this.currentStory.id = "";

        this.route.params.subscribe(params => {
            storyService.getStory(params.storyId).then((story: Story) => {
                this.currentStory = story;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                d.setUTCSeconds(story.date);
                this.formattedDate = d.toLocaleString();
            });
        });
    }

    newPage() {
        this.router.navigateByUrl("/newPage/" + this.currentStory.id);
    }

    nextPage() {
        this.router.navigateByUrl("/home/" + this.currentStory.id);
    }

    ngOnInit() {
    }

}
