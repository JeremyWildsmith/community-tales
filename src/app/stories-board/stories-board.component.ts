import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-stories-board',
    templateUrl: './stories-board.component.html',
    styleUrls: ['./stories-board.component.css']
})
export class StoriesBoardComponent implements OnInit {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('newSstory',
            sanitizer.bypassSecurityTrustResourceUrl('assets/newStory.svg'));
    }

    ngOnInit() {
    }

}
