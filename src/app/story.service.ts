import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Story {
    title: string;
    author: string;
    content: string;
    genre: string;
    date: number;
    parent: number;
    summary: string;
    id: string;
    score: number;
}

@Injectable()
export class StoryService {
    readonly URL_BASE: string = "https://communitytales-39909.firebaseio.com";

    constructor(private http: HttpClient) {}

    public getStories(): Promise<Array<Story>> {
        let promise = new Promise<Array<Story>>((resolve, reject) => {
            this.http.get(this.URL_BASE + "/posts.json").toPromise().then((r: any) => {
                let stories: Array<Story> = new Array();
                for (var prop in r) {
                    // skip loop if the property is from prototype
                    if (!r.hasOwnProperty(prop)) continue;

                    let story: Story = r[prop];
                    story.id = prop;
                    stories.push(story);
                }
                resolve(stories);
            }).catch((e) => {
                reject(e);
            });
        });

        return promise;
    }

    public saveStory(story: Story) {
        story.id = undefined;
        let promise = new Promise<boolean>((resolve, reject) => {
            this.http.post(this.URL_BASE + "/posts.json", JSON.stringify(story)).toPromise().then((r: any) => {
                resolve(true);
            }).catch((e) => {
                reject(e);
            });
        });

        return promise;
    }
}
