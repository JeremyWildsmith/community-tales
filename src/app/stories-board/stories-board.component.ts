import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatTableDataSource} from '@angular/material';
import {Story, StoryService} from '../story.service';


@Component({
    selector: 'app-stories-board',
    templateUrl: './stories-board.component.html',
    styleUrls: ['./stories-board.component.css']
})
export class StoriesBoardComponent implements OnInit {
    displayedColumns = ['score', 'author', 'genre', 'title'];
    dataSource = new MatTableDataSource<Story>();

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private storyService: StoryService) {
        iconRegistry
            .addSvgIcon('newSstory',
            sanitizer.bypassSecurityTrustResourceUrl('assets/newStory.svg'));
    }

    ngOnInit() {
        this.storyService.getStories().then((result: Array<Story>) => {
            let stories: Array<Story> = new Array();
            result.forEach((s: Story) => {
                stories.push(s);
            });


            this.dataSource = new MatTableDataSource<Story>(stories);
        });
    }

}
