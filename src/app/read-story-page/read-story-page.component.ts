import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Story, StoryService} from '../story.service';
import {AngularFireObject} from 'angularfire2/database';

@Component({
    selector: 'app-read-story-page',
    templateUrl: './read-story-page.component.html',
    styleUrls: ['./read-story-page.component.css']
})
export class ReadStoryPageComponent implements OnInit {

    storyObject: AngularFireObject<Story>;
    currentStory: Story = new Story();
    formattedDate: string = "";
    liked: boolean = false;
    isLoading: boolean = true;
    
    constructor(private route: ActivatedRoute, private storyService: StoryService, private router: Router) {
        this.currentStory.title = "";
        this.currentStory.author = "";
        this.currentStory.content = "";
        this.currentStory.genre = "";
        this.currentStory.date = 0;
        this.currentStory.summary = "";
        this.currentStory.id = "";

        this.route.params.subscribe(params => {
            this.storyObject = storyService.getStoryStream(params.storyId);
            
            this.storyObject.valueChanges().subscribe((story: Story) => {
                this.currentStory = story;
                this.currentStory.id = params.storyId;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                d.setUTCSeconds(story.date);
                this.formattedDate = d.toLocaleString();
                setTimeout(() => {this.isLoading = false}, 1000);
            });
        });
    }

    newPage() {
        this.router.navigateByUrl("/newPage/" + this.currentStory.id);
    }

    nextPage() {
        this.router.navigateByUrl("/home/" + this.currentStory.id);
    }
    
    previousPage() {
        this.router.navigateByUrl("/read/" + this.currentStory.parent);
    }
    
    storyBoard() {
        this.router.navigateByUrl("/home/all");
    }
    
    like() {
        this.liked = true;
        this.storyObject.update({score: this.currentStory.score + 1});
    }

    ngOnInit() {
    }

}
