webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=PT+Mono);", ""]);

// module
exports.push([module.i, "main {\r\n    marigin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-side-nav></app-side-nav>\n    <div class=\"form-group row\"></div>\n    <div class=\"form-group row\"></div>\n\n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stories_board_stories_board_component__ = __webpack_require__("../../../../../src/app/stories-board/stories-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_page_not_found_error_page_not_found_component__ = __webpack_require__("../../../../../src/app/error-page-not-found/error-page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_story_page_create_story_page_component__ = __webpack_require__("../../../../../src/app/create-story-page/create-story-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__story_service__ = __webpack_require__("../../../../../src/app/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__read_story_page_read_story_page_component__ = __webpack_require__("../../../../../src/app/read-story-page/read-story-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__write_next_page_write_next_page_component__ = __webpack_require__("../../../../../src/app/write-next-page/write-next-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__loading_page_loading_page_component__ = __webpack_require__("../../../../../src/app/loading-page/loading-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// New imports to update based on AngularFire2 version 4





var firebaseConfig = {
    apiKey: "AIzaSyDIvmUoX7NSZviYobDrrriYxVLC36lAzTU",
    authDomain: "communitytales-39909.firebaseapp.com",
    databaseURL: "https://communitytales-39909.firebaseio.com",
    projectId: "communitytales-39909",
    storageBucket: "communitytales-39909.appspot.com",
    messagingSenderId: "375118973018"
};
var appRoutes = [
    { path: 'home/:filter', component: __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */] },
    //{path: 'hero/:id', component: HeroDetailComponent},
    {
        path: '',
        redirectTo: '/home/all',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/home/all',
        pathMatch: 'full'
    },
    {
        path: 'read/:storyId',
        component: __WEBPACK_IMPORTED_MODULE_13__read_story_page_read_story_page_component__["a" /* ReadStoryPageComponent */]
    },
    {
        path: 'newStory',
        component: __WEBPACK_IMPORTED_MODULE_10__create_story_page_create_story_page_component__["a" /* CreateStoryPageComponent */]
    },
    {
        path: 'newPage/:parentStoryId',
        component: __WEBPACK_IMPORTED_MODULE_14__write_next_page_write_next_page_component__["a" /* WriteNextPageComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__error_page_not_found_error_page_not_found_component__["a" /* ErrorPageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__stories_board_stories_board_component__["a" /* StoriesBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__error_page_not_found_error_page_not_found_component__["a" /* ErrorPageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_story_page_create_story_page_component__["a" /* CreateStoryPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__read_story_page_read_story_page_component__["a" /* ReadStoryPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__write_next_page_write_next_page_component__["a" /* WriteNextPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__loading_page_loading_page_component__["a" /* LoadingPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatProgressSpinnerModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__story_service__["b" /* StoryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-story-page/create-story-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-story-page/create-story-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1 class=\"text-center\">Create Story</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <div class=\"alert alert-danger\" *ngIf=\"errorDescription.length > 0\">\n                <strong>Error:</strong> {{errorDescription}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-horizontal-stepper #stepper linear>\n                <mat-step [stepControl]=\"firstFormGroup\">\n                    <ng-template matStepLabel>Contact Details</ng-template>\n                    <div class=\"form-group\">\n                        <div class=\"alert alert-info form-text text-muted\">\n                            <strong>Info!</strong> You will be emailed a link to manage your story and stay notified on updates / branches to your story.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Email address</label>\n                        <input [(ngModel)]=\"contactEmail\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                    </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                            <input type=\"checkbox\" class=\"form-check-input\">\n                            Keep me Notified\n                        </label>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-8\">\n                            <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"validateContact(stepper)\">Continue</button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step [stepControl]=\"detailsFormGroup\">\n                    <ng-template matStepLabel>Describe your Story</ng-template>\n                    <div class=\"form-group\">\n                        <label for=\"storyTitle\">Title</label>\n                        <input [(ngModel)]=\"title\" type=\"email\" class=\"form-control\" id=\"storyTitle\" aria-describedby=\"titleHelp\" placeholder=\"Enter a title\">\n                        <small id=\"titleHelp\" class=\"form-text text-muted\">Enter a descriptive and enticing story name. <strong>Must be between 3 and 50 character.</strong></small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"storySummary\">Summary</label>\n                        <textarea [(ngModel)]=\"summary\" class=\"form-control\" id=\"storyTitle\" aria-describedby=\"titleHelp\" placeholder=\"Enter a summary\" rows=\"5\"></textarea>\n                        <small id=\"titleHelp\" class=\"form-text text-muted\">Enter a summary of the over-all plot. <strong>Must be between 10 and 400 character.</strong></small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"genre\">Genre</label>\n                        <select [(ngModel)]=\"genre\" class=\"form-control\">\n                            <option>Mystery</option>\n                            <option>Adventure</option>\n                            <option>Comedy</option>\n                            <option>Drama</option>\n                            <option>Horror</option>\n                        </select>\n                        <small id=\"genreHelp\" class=\"form-text text-muted\">Select the most appropriate genre for this story.</small>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-8\">\n                            <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"validateDescription(stepper)\">Continue</button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step [stepControl]=\"secondFormGroup\">\n                    <ng-template matStepLabel>Write a Page</ng-template>\n                    <div class=\"form-group\">\n                        <label for=\"firstParagraph\">Page One</label>\n                        <textarea [(ngModel)]=\"paragraph\" class=\"form-control\" id=\"firstParagraph\" aria-describedby=\"firstParagraphHelp\" placeholder=\"Start your story here...\" rows=\"8\"></textarea>\n                        <small id=\"firstParagraphHelp\" class=\"form-text text-muted\">Enter the first paragraph of this story, others can expand onto this story. <strong>Must be between 200 and 3000 character.</strong></small>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-8\">\n                            <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"validateParagraph(stepper)\">Continue</button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel>Publish</ng-template>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-12\">\n                            <h3 class=\"text-center\">You've Been Published!</h3>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-8 offset-md-2\">\n                            <div class=\"text-center text-muted\">This story is ready to be published. Once it has been published, otherwise will be free to see the story and contribute to it by branching off of it to develop it further.</div>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-4 offset-md-4\">\n                            <button (click)=\"publishStory(stepper)\" type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" matStepperNext>Publish!</button>\n                        </div>\n                    </div>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-story-page/create-story-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStoryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_service__ = __webpack_require__("../../../../../src/app/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateStoryPageComponent = (function () {
    function CreateStoryPageComponent(_formBuilder, storyService, router) {
        this._formBuilder = _formBuilder;
        this.storyService = storyService;
        this.router = router;
        this.contactEmail = "";
        this.summary = "";
        this.title = "";
        this.genre = "Mystery";
        this.paragraph = "";
        this.errorDescription = "";
    }
    CreateStoryPageComponent.prototype.ngOnInit = function () {
    };
    CreateStoryPageComponent.prototype.validateContact = function (stepper) {
        this.errorDescription = "";
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(this.contactEmail)) {
            this.errorDescription = "Please enter a valid contact e-mail address.";
            return false;
        }
        if (stepper != undefined)
            stepper.next();
        return true;
    };
    CreateStoryPageComponent.prototype.validateDescription = function (stepper) {
        this.errorDescription = "";
        if (this.title.length < 3 || this.title.length > 50) {
            this.errorDescription = "Your title must be between 3 and 50 characters long.";
            return false;
        }
        if (this.summary.length < 10 || this.summary.length > 200) {
            this.errorDescription = "Your summary must be between 10 and 400 characters long.";
            return false;
        }
        if (stepper != undefined)
            stepper.next();
        return true;
    };
    CreateStoryPageComponent.prototype.validateParagraph = function (stepper) {
        this.errorDescription = "";
        if (this.paragraph.length < 200 || this.paragraph.length > 3000) {
            this.errorDescription = "Your page must be between 200 and 3000 characters long.";
            return false;
        }
        if (stepper != undefined)
            stepper.next();
        return true;
    };
    CreateStoryPageComponent.prototype.publishStory = function (stepper) {
        var _this = this;
        if (!this.validateContact()) {
            stepper.previous();
            stepper.previous();
            stepper.previous();
            return false;
        }
        if (!this.validateDescription()) {
            stepper.previous();
            stepper.previous();
            return false;
        }
        if (!this.validateParagraph()) {
            stepper.previous();
            return false;
        }
        var story = new __WEBPACK_IMPORTED_MODULE_2__story_service__["a" /* Story */]();
        story.title = this.title;
        story.author = this.contactEmail;
        story.content = this.paragraph;
        story.genre = this.genre;
        story.date = Math.round((new Date()).getTime() / 1000);
        story.parent = null;
        story.summary = this.summary;
        story.page = 1;
        story.score = 0;
        this.storyService.saveStory(story).then(function () {
            _this.router.navigateByUrl("/home");
        }).catch(function () {
            alert("Unable to submit story!.");
        });
    };
    CreateStoryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-story-page',
            template: __webpack_require__("../../../../../src/app/create-story-page/create-story-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-story-page/create-story-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__story_service__["b" /* StoryService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CreateStoryPageComponent);
    return CreateStoryPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error-page-not-found/error-page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-page-not-found/error-page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Error Page not Found. Please return to the home page.</h1>\n"

/***/ }),

/***/ "../../../../../src/app/error-page-not-found/error-page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageNotFoundComponent = (function () {
    function ErrorPageNotFoundComponent() {
    }
    ErrorPageNotFoundComponent.prototype.ngOnInit = function () {
    };
    ErrorPageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-page-not-found',
            template: __webpack_require__("../../../../../src/app/error-page-not-found/error-page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-page-not-found/error-page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageNotFoundComponent);
    return ErrorPageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<main class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <app-stories-board></app-stories-board>\n        </div><!-- /.blog-main -->\n\n    </div><!-- /.row -->\n\n</main><!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loading-page/loading-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading-page/loading-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row form-group\">\n    <div class=\"col-md-12\">\n        <h3 class=\"text-center\">Rummaging the Library</h3>\n    </div>\n</div>\n\n<div class=\"row form-group\">\n    <div class=\"col-md-12\">\n        <mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loading-page/loading-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingPageComponent = (function () {
    function LoadingPageComponent() {
    }
    LoadingPageComponent.prototype.ngOnInit = function () {
    };
    LoadingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading-page',
            template: __webpack_require__("../../../../../src/app/loading-page/loading-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loading-page/loading-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPageComponent);
    return LoadingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/read-story-page/read-story-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\np,h1,h2,h3 {\r\n    font-family: 'PT Mono', monospace;\r\n    color: #444444\r\n}\r\n\r\nh4 {\r\n    font-family: 'PT Mono', monospace;\r\n    color: #444444;\r\n    font-size: .8em;\r\n}\r\n\r\nh1,h2,h3 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.storyContainer {\r\n    white-space: pre-wrap;\r\n    background-color: rgb(248, 248, 248);\r\n    border: solid #eeeeee 1px;\r\n    border-right: solid #eeeeee 13px;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-control {\r\n    background-color: #eeeeee;\r\n    border-radius: 0px;\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/read-story-page/read-story-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\">\n    <app-loading-page></app-loading-page>\n</div>\n\n<div *ngIf=\"!isLoading\" class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <h3 class=\"text-center\">{{currentStory.title}}</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <h4 class=\"text-center\">Page {{currentStory.page}}</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"storyContainer\">\n                            <p class=\"storyFont\">{{currentStory.content}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"score\">Score</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" [value]=\"currentStory.score\" class=\"form-control\">\n                            <span class=\"input-group-btn\" *ngIf=\"!liked\">\n                                <button class=\"btn btn-success\" type=\"button\" (click)=\"like()\">Like!</button>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"author\">Author</label>\n                        <input class=\"form-control\" id=\"author\" aria-describedby=\"emailHelp\" [value]=\"currentStory.author\" disabled>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"genre\">Genre</label>\n                        <input class=\"form-control\" id=\"genre\" [value]=\"currentStory.genre\" disabled>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"date\">Date</label>\n                        <input class=\"form-control\" id=\"date\" [value]=\"formattedDate\" disabled>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"nextPage()\">Next Page</button>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"currentStory.parent != null\">\n                        <button type=\"submit\" class=\"btn btn-default\" style=\"width: 100%\" (click)=\"previousPage()\">Previous Page</button>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"currentStory.parent == null\">\n                        <button type=\"submit\" class=\"btn btn-default\" style=\"width: 100%\" (click)=\"storyBoard()\">Story Board</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/read-story-page/read-story-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadStoryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_service__ = __webpack_require__("../../../../../src/app/story.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadStoryPageComponent = (function () {
    function ReadStoryPageComponent(route, storyService, router) {
        var _this = this;
        this.route = route;
        this.storyService = storyService;
        this.router = router;
        this.currentStory = new __WEBPACK_IMPORTED_MODULE_2__story_service__["a" /* Story */]();
        this.formattedDate = "";
        this.liked = false;
        this.isLoading = true;
        this.currentStory.title = "";
        this.currentStory.author = "";
        this.currentStory.content = "";
        this.currentStory.genre = "";
        this.currentStory.date = 0;
        this.currentStory.summary = "";
        this.currentStory.id = "";
        this.route.params.subscribe(function (params) {
            _this.storyObject = storyService.getStoryStream(params.storyId);
            _this.storyObject.valueChanges().subscribe(function (story) {
                _this.currentStory = story;
                _this.currentStory.id = params.storyId;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                d.setUTCSeconds(story.date);
                _this.formattedDate = d.toLocaleString();
                setTimeout(function () { _this.isLoading = false; }, 1000);
            });
        });
    }
    ReadStoryPageComponent.prototype.newPage = function () {
        this.router.navigateByUrl("/newPage/" + this.currentStory.id);
    };
    ReadStoryPageComponent.prototype.nextPage = function () {
        this.router.navigateByUrl("/home/" + this.currentStory.id);
    };
    ReadStoryPageComponent.prototype.previousPage = function () {
        this.router.navigateByUrl("/read/" + this.currentStory.parent);
    };
    ReadStoryPageComponent.prototype.storyBoard = function () {
        this.router.navigateByUrl("/home/all");
    };
    ReadStoryPageComponent.prototype.like = function () {
        this.liked = true;
        this.storyObject.update({ score: this.currentStory.score + 1 });
    };
    ReadStoryPageComponent.prototype.ngOnInit = function () {
    };
    ReadStoryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-read-story-page',
            template: __webpack_require__("../../../../../src/app/read-story-page/read-story-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/read-story-page/read-story-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__story_service__["b" /* StoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ReadStoryPageComponent);
    return ReadStoryPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item {\r\n    padding-left: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Community Tales</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-nav',
            template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stories-board/stories-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-row:hover {\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n.mat-row {\r\n    font-family: 'PT Mono', monospace;\r\n}\r\n\r\n.storyText {\r\n    font-family: 'PT Mono', monospace;   \r\n    font-size: 0.8em\r\n}\r\n.summaryContainer {\r\n    white-space: pre-wrap;\r\n    background-color: rgb(248, 248, 248);\r\n    border: solid #eeeeee 1px;\r\n    border-right: solid #eeeeee 13px;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np,h1,h2,h3,h4 {\r\n    color: #444444\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stories-board/stories-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\">\n    <app-loading-page></app-loading-page>\n</div>\n\n<div *ngIf=\"!isLoading\">\n\n    <div *ngIf=\"isStoryPage\" class=\"row\">\n        <div class=\"col-md-5\">\n            <h1>{{parentStory.title}}</h1>\n            <p class=\"text-center\">Page: {{parentStory.page + 1}}</p>\n        </div>\n        <div class=\"col-md-7\">\n            <div class=\"summaryContainer storyText\">{{parentStory.summary}}</div>\n        </div>\n    </div>\n\n    <div *ngIf=\"!isStoryPage\" class=\"row\">\n        <div class=\"col-md-5\">\n            <h1>Story Board</h1>\n            <p class=\"text-center storyText\">Stories Written by the Community</p>\n        </div>\n        <div class=\"col-md-7\">\n            <div class=\"summaryContainer storyText\">\nAnd as imagination bodies forth\nThe forms of things unknown, the poet’s pen\nTurns them to shapes and gives to airy nothing\nA local habitation and a name.\n<span style=\"font-size: 0.7em\">William Shakespeare (A Midsummer Night’s Dream)</span></div>\n        </div>\n    </div>\n    <hr>\n    <div *ngIf=\"!noStories\">\n        <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n                <mat-table #table [dataSource]=\"dataSource\">\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"score\">\n                        <mat-header-cell *matHeaderCellDef> Score </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.score}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"author\">\n                        <mat-header-cell *matHeaderCellDef> Author </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\">{{element.author}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"genre\">\n                        <mat-header-cell *matHeaderCellDef> Genre </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\">{{element.genre}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Color Column -->\n                    <ng-container matColumnDef=\"title\">\n                        <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row [ngClass]=\"hoverRow\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></mat-row>\n                </mat-table>\n            </div>\n        </div>\n        <div class=\"row form-group\">\n            <div class=\"col-md-3 offset-md-9\">\n                <button class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"write()\">Create</button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"noStories\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h4 class=\"text-center\">The End.</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 offset-md-2\">\n                <p class=\"text-muted text-center\">It looks like no one has written a page here. Add you're creativity to this story.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4 offset-md-4\">\n                <button class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"write()\">Create</button>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/stories-board/stories-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_service__ = __webpack_require__("../../../../../src/app/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StoriesBoardComponent = (function () {
    function StoriesBoardComponent(iconRegistry, sanitizer, storyService, router, route) {
        var _this = this;
        this.storyService = storyService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['score', 'author', 'genre', 'title'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatTableDataSource */]();
        this.isStoryPage = false;
        this.noStories = false;
        this.parentStory = new __WEBPACK_IMPORTED_MODULE_3__story_service__["a" /* Story */]();
        this.isLoading = true;
        this.parentStory.title = "";
        this.parentStory.author = "";
        this.parentStory.content = "";
        this.parentStory.genre = "";
        this.parentStory.date = Math.round((new Date()).getTime() / 1000);
        this.parentStory.parent = "";
        this.parentStory.page = 1;
        this.parentStory.summary = "";
        this.parentStory.score = 0;
        this.route.params.subscribe(function (params) {
            _this.getStories(params.filter);
        });
    }
    StoriesBoardComponent.prototype.ngOnInit = function () {
    };
    StoriesBoardComponent.prototype.getStories = function (filter) {
        var _this = this;
        var storiesFilter = filter;
        if (filter == "all") {
            storiesFilter = undefined;
        }
        if (storiesFilter !== undefined) {
            this.isStoryPage = true;
            this.storyService.getStory(storiesFilter).then(function (story) { return _this.parentStory = story; });
            this.displayedColumns = ['score', 'author'];
        }
        var stories = this.storyService.getStoriesStream(storiesFilter);
        stories.subscribe(function (s) {
            s.sort(function (a, b) {
                return b.score - a.score;
            });
            _this.noStories = (s.length == 0);
            setTimeout(function () { _this.isLoading = false; }, 1000);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatTableDataSource */](s);
        });
    };
    StoriesBoardComponent.prototype.selectRow = function (row) {
        this.router.navigateByUrl("/read/" + row.id);
    };
    StoriesBoardComponent.prototype.write = function () {
        if (this.isStoryPage)
            this.router.navigateByUrl("/newPage/" + this.parentStory.id);
        else
            this.router.navigateByUrl("/newStory");
    };
    StoriesBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stories-board',
            template: __webpack_require__("../../../../../src/app/stories-board/stories-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stories-board/stories-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__story_service__["b" /* StoryService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], StoriesBoardComponent);
    return StoriesBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Story = (function () {
    function Story() {
    }
    return Story;
}());

var StoryService = (function () {
    function StoryService(http, db, auth, afs) {
        this.http = http;
        this.db = db;
        this.auth = auth;
        this.afs = afs;
        this.URL_BASE = "https://communitytales-39909.firebaseio.com";
    }
    StoryService.prototype.getStoriesStream = function (filter) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].create(function (emitter) {
            var snapshotObservable;
            if (filter == undefined) {
                snapshotObservable = _this.db.list('/posts', function (ref) { return ref.orderByChild("parent").equalTo(null); }).snapshotChanges();
            }
            else {
                snapshotObservable = _this.db.list('/posts', function (ref) { return ref.orderByChild("parent").equalTo(filter); }).snapshotChanges();
            }
            snapshotObservable.subscribe(function (e) {
                var stories = [];
                e.forEach(function (d) {
                    var story = d.payload.val();
                    story.id = d.key;
                    stories.push(story);
                });
                emitter.next(stories);
            });
        });
        return o;
    };
    StoryService.prototype.getStoryStream = function (id) {
        return this.db.object("/posts/" + id);
    };
    StoryService.prototype.getStories = function (filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.URL_BASE + "/posts.json").toPromise().then(function (r) {
                var stories = new Array();
                for (var prop in r) {
                    // skip loop if the property is from prototype
                    if (!r.hasOwnProperty(prop))
                        continue;
                    var story = r[prop];
                    story.id = prop;
                    stories.push(story);
                }
                resolve(stories);
            }).catch(function (e) {
                reject(e);
            });
        });
        return promise;
    };
    StoryService.prototype.getStory = function (storyId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.URL_BASE + "/posts/" + storyId + ".json").toPromise().then(function (r) {
                var s = r;
                s.id = storyId;
                resolve(r);
            }).catch(function (e) {
                reject(e);
            });
        });
        return promise;
    };
    StoryService.prototype.saveStory = function (story) {
        var _this = this;
        story.id = undefined;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.URL_BASE + "/posts.json", JSON.stringify(story)).toPromise().then(function (r) {
                resolve(true);
            }).catch(function (e) {
                reject(e);
            });
        });
        return promise;
    };
    StoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "../../../../../src/app/write-next-page/write-next-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/write-next-page/write-next-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1 class=\"text-center\">The Next Chapter</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <div class=\"alert alert-danger\" *ngIf=\"errorDescription.length > 0\">\n                <strong>Error:</strong> {{errorDescription}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-horizontal-stepper #stepper linear>\n                <mat-step [stepControl]=\"firstFormGroup\">\n                    <ng-template matStepLabel>Contact Details</ng-template>\n                    <div class=\"form-group\">\n                        <div class=\"alert alert-info form-text text-muted\">\n                            <strong>Info!</strong> You will be emailed a link to manage your story and stay notified on updates / branches to your story.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Email address</label>\n                        <input [(ngModel)]=\"contactEmail\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                    </div>\n                    <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                            <input type=\"checkbox\" class=\"form-check-input\">\n                            Keep me Notified\n                        </label>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-8\">\n                            <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"validateContact(stepper)\">Continue</button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step [stepControl]=\"secondFormGroup\">\n                    <ng-template matStepLabel>Write a Page</ng-template>\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title</label>\n                        <input [value]=\"parentStory.title\" class=\"form-control\" id=\"title\" aria-describedby=\"emailHelp\" disabled>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"firstParagraph\">New Page</label>\n                        <textarea [(ngModel)]=\"paragraph\" class=\"form-control\" id=\"firstParagraph\" aria-describedby=\"firstParagraphHelp\" placeholder=\"Start your story here...\" rows=\"8\"></textarea>\n                        <small id=\"firstParagraphHelp\" class=\"form-text text-muted\">Enter the first paragraph of this story, others can expand onto this story.</small>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-8\">\n                            <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" (click)=\"validateParagraph(stepper)\">Continue</button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel>Publish</ng-template>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-12\">\n                            <h3 class=\"text-center\">You've Been Published!</h3>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-8 offset-md-2\">\n                            <div class=\"text-center text-muted\">This story is ready to be published. Once it has been published, otherwise will be free to see the story and contribute to it by branching off of it to develop it further.</div>\n                        </div>\n                    </div>\n                    <div class=\"row form-group\">\n                        <div class=\"col-md-4 offset-md-4\">\n                            <button (click)=\"publishStory(stepper)\" type=\"submit\" class=\"btn btn-primary\" style=\"width: 100%\" matStepperNext>Publish!</button>\n                        </div>\n                    </div>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/write-next-page/write-next-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteNextPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_service__ = __webpack_require__("../../../../../src/app/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WriteNextPageComponent = (function () {
    function WriteNextPageComponent(_formBuilder, storyService, router, route) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.storyService = storyService;
        this.router = router;
        this.route = route;
        this.contactEmail = "";
        this.paragraph = "";
        this.parentStory = new __WEBPACK_IMPORTED_MODULE_2__story_service__["a" /* Story */]();
        this.errorDescription = "";
        this.parentStory.title = "";
        this.parentStory.author = "";
        this.parentStory.content = "";
        this.parentStory.genre = "";
        this.parentStory.date = 0;
        this.parentStory.summary = "";
        this.parentStory.page = 1;
        this.route.params.subscribe(function (params) {
            storyService.getStory(params.parentStoryId).then(function (story) {
                _this.parentStory = story;
            });
        });
    }
    WriteNextPageComponent.prototype.ngOnInit = function () {
    };
    WriteNextPageComponent.prototype.validateContact = function (stepper) {
        this.errorDescription = "";
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(this.contactEmail)) {
            this.errorDescription = "Please enter a valid contact e-mail address.";
            return false;
        }
        if (stepper != undefined)
            stepper.next();
        return true;
    };
    WriteNextPageComponent.prototype.validateParagraph = function (stepper) {
        this.errorDescription = "";
        if (this.paragraph.length < 200 || this.paragraph.length > 3000) {
            this.errorDescription = "Your page must be between 200 and 3000 characters long.";
            return false;
        }
        if (stepper != undefined)
            stepper.next();
        return true;
    };
    WriteNextPageComponent.prototype.publishStory = function (stepper) {
        var _this = this;
        if (!this.validateContact()) {
            stepper.previous();
            stepper.previous();
            return;
        }
        if (!this.validateParagraph()) {
            stepper.previous();
            return;
        }
        var story = new __WEBPACK_IMPORTED_MODULE_2__story_service__["a" /* Story */]();
        story.title = this.parentStory.title;
        story.author = this.contactEmail;
        story.content = this.paragraph;
        story.genre = this.parentStory.genre;
        story.date = Math.round((new Date()).getTime() / 1000);
        story.parent = this.parentStory.id;
        story.page = this.parentStory.page + 1;
        story.summary = this.parentStory.summary;
        story.score = 0;
        this.storyService.saveStory(story).then(function () {
            _this.router.navigateByUrl("/home/" + _this.parentStory.id);
        }).catch(function () {
            alert("Unable to submit story!.");
        });
    };
    WriteNextPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-write-next-page',
            template: __webpack_require__("../../../../../src/app/write-next-page/write-next-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/write-next-page/write-next-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__story_service__["b" /* StoryService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WriteNextPageComponent);
    return WriteNextPageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map