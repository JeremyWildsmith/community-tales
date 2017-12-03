import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';

export class Story {
    title: string;
    author: string;
    content: string;
    genre: string;
    date: number;
    parent: string;
    summary: string;
    id: string;
    score: number;
    page: number;
}

@Injectable()
export class StoryService {
    readonly URL_BASE: string = "https://communitytales-39909.firebaseio.com";

    constructor(private http: HttpClient, private db: AngularFireDatabase, private auth: AngularFireAuth, private afs: AngularFirestore) {}

    public getStoriesStream(filter?: string): Observable<Story[]> {

        let o: Observable<Story[]> = Observable.create(emitter => {
            
            let snapshotObservable;
            if(filter == undefined) {
                snapshotObservable = this.db.list<any>('/posts', ref => ref.orderByChild("parent").equalTo(null)).snapshotChanges();
            } else {
                snapshotObservable = this.db.list<any>('/posts', ref => ref.orderByChild("parent").equalTo(filter)).snapshotChanges();
            }
            
            snapshotObservable.subscribe((e) => {
                let stories: Array<Story> = [];

                e.forEach(d => {
                    let story: Story = d.payload.val();
                    story.id = d.key;
                    stories.push(story);
                });
                
                emitter.next(stories);
            });
        });

        return o;
    }
    
    public getStoryStream(id : string) : AngularFireObject<Story> {
        return this.db.object<Story>("/posts/" + id);
    }

    public getStories(filter: string): Promise<Array<Story>> {
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

    public getStory(storyId: string): Promise<Story> {

        let promise = new Promise<Story>((resolve, reject) => {
            this.http.get(this.URL_BASE + "/posts/" + storyId + ".json").toPromise().then((r: any) => {
                let s: Story = r;
                s.id = storyId;
                resolve(r);
            }).catch((e) => {
                reject(e);
            });
        });

        return promise;
    }

    public saveStory(story: Story): Promise<boolean> {
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
