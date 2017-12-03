import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatTableDataSource} from '@angular/material';
import {Story, StoryService} from '../story.service';
import {ActivatedRoute} from '@angular/router';

import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-stories-board',
    templateUrl: './stories-board.component.html',
    styleUrls: ['./stories-board.component.css']
})
export class StoriesBoardComponent implements OnInit {
    displayedColumns = ['score', 'author', 'genre', 'title'];
    dataSource = new MatTableDataSource<Story>();

    isStoryPage = false;
    noStories = false;

    parentStory: Story = new Story();

    isLoading = true;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private storyService: StoryService, private router: Router, private route: ActivatedRoute) {

        this.parentStory.title = "";
        this.parentStory.author = "";
        this.parentStory.content = "";
        this.parentStory.genre = "";
        this.parentStory.date = Math.round((new Date()).getTime() / 1000);
        this.parentStory.parent = "";
        this.parentStory.page = 1;
        this.parentStory.summary = "";
        this.parentStory.score = 0;


        this.route.params.subscribe(params => {
            this.getStories(params.filter);
        });
    }

    ngOnInit() {
    }

    getStories(filter: string) {
        let storiesFilter: string = filter;

        if (filter == "all") {
            storiesFilter = undefined;
        }

        if (storiesFilter !== undefined) {
            this.isStoryPage = true;
            this.storyService.getStory(storiesFilter).then((story: Story) => this.parentStory = story);
            this.displayedColumns = ['score', 'author'];
        }

        let stories = this.storyService.getStoriesStream(storiesFilter);

        stories.subscribe((s: Story[]) => {
            s.sort((a: Story, b: Story) => {
                return b.score - a.score;
            });

            this.noStories = (s.length == 0);
            setTimeout(() => {this.isLoading = false}, 1000);
            this.dataSource = new MatTableDataSource<Story>(s);
        });
    }

    selectRow(row: Story) {
        this.router.navigateByUrl("/read/" + row.id);
    }

    write() {
        if (this.isStoryPage)
            this.router.navigateByUrl("/newPage/" + this.parentStory.id);
        else
            this.router.navigateByUrl("/newStory");
    }
}
