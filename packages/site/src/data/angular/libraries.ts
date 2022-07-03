import { Library } from "@framework/system/src/models/library"
import { Tags } from "../../models/tags"

export const libraries: Library<Tags[number]>[] = [
	{
		name: "Angular CLI",
		author: "Google",
		gitHubRepo: "angular/angular-cli",
		npmPackage: "@angular/cli",
		href: "https://angular.io/cli",
		description:
			"The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell",
		image: "https://github.com/angular.png",
		tags: ["framework"],
	},
	{
		name: "NgRx Store",
		author: "NgRx",
		gitHubRepo: "ngrx/platform",
		npmPackage: "@ngrx/store",
		href: "https://ngrx.io/guide/store",
		description:
			"Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.",
		image: "https://github.com/ngrx.png",
		tags: ["state management"],
	},
	{
		name: "NgRx Effects",
		author: "NgRx",
		gitHubRepo: "ngrx/platform",
		npmPackage: "@ngrx/effects",
		href: "https://ngrx.io/guide/effects",
		description:
			"Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.",
		image: "https://github.com/ngrx.png",
		tags: ["state management"],
	},
	{
		name: "RxJS",
		author: "ReactiveX",
		gitHubRepo: "reactivex/rxjs",
		npmPackage: "rxjs",
		href: "https://rxjs.dev/guide/overview",
		description:
			"RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
		image:
			"https://raw.githubusercontent.com/ReactiveX/rxjs/master/docs_app/src/assets/images/logos/Rx_Logo_S.png",
		tags: ["state management"],
	},
	{
		name: "Transloco",
		author: "Transloco",
		gitHubRepo: "ngneat/transloco",
		npmPackage: "@ngneat/transloco",
		href: "https://ngneat.github.io/transloco/docs/getting-started/installation",
		description: "The internationalization (i18n) library for Angular",
		image: "https://raw.githubusercontent.com/ngneat/transloco/master/logo.svg",
		tags: ["internationalization"],
	},
	{
		name: "Nx",
		author: "Nrwl",
		gitHubRepo: "nrwl/nx",
		npmPackage: "@nrwl/nx",
		href: "https://nx.dev/getting-started/intro",
		description:
			"Nx is an open source build system featuring a lot of monorepo features that help enterprise teams develop Angular at scale.",
		image: "https://raw.githubusercontent.com/nrwl/nx/master/images/nx.png",
		tags: ["framework"],
	},
	{
		name: "Angular Material",
		author: "Google",
		gitHubRepo: "angular/components",
		npmPackage: "@angular/material",
		href: "https://material.angular.io/guide/getting-started",
		description: "Material Design UI components for Angular applications.",
		image: "https://github.com/angular.png",
		tags: ["styling", "components"],
	},
	{
		name: "Compodoc",
		author: "Compodoc",
		gitHubRepo: "compodoc/compodoc",
		npmPackage: "@compodoc/compodoc",
		href: "https://compodoc.app/guides/getting-started.html",
		description:
			"A documentation tool for Angular applications, that can generate static documentation of your application.",
		image: "https://github.com/compodoc.png",
		tags: ["documentation"],
	},
	{
		name: "Scully",
		author: "HeroDevs, LLC",
		gitHubRepo: "scullyio/scully",
		npmPackage: "@scullyio/scully",
		href: "https://scully.io/",
		description: "Static site generator for Angular",
		image: "https://github.com/scullyio.png",
		tags: ["framework"],
	},
	{
		name: "lumberjack",
		author: "@ng-worker",
		gitHubRepo: "ngworker/lumberjack",
		npmPackage: "lumberjack",
		href: "https://github.com/ngworker/lumberjack",
		description:
			"Lumberjack is a versatile Angular logging library, specifically designed to be extended and customized. It provides a few simple log drivers (logging mechanisms, transports, log drivers) out-of-the-box.",
		image:
			"https://raw.githubusercontent.com/ngworker/lumberjack/main/logo.svg",
		tags: ["logging"],
	},
	{
		name: "RxAngular",
		author: "rx-angular",
		gitHubRepo: "rx-angular/rx-angular",
		npmPackage: "rx-angular",
		href: "https://github.com/rx-angular/rx-angular",
		description:
			"RxAngular offers a comprehensive toolset for handling fully reactive Angular applications. It includes packages for state management, component development, and fully reactive rendering in Angular.",
		image: "https://github.com/rx-angular.png",
		tags: ["state management", "performance tools"],
	},
	{
		name: "Akita",
		author: "Salesforce",
		gitHubRepo: "salesforce/akita",
		npmPackage: "@datorama/akita",
		href: "https://opensource.salesforce.com/akita/",
		description:
			"State management library, built on top of RxJS, based on the ideas introduced by Flux and Redux.",
		image: "https://opensource.salesforce.com/akita/img/akita.svg",
		tags: ["state management", "RxJS"],
	},
	{
		name: "NGXS",
		author: "NGXS",
		gitHubRepo: "ngxs/store",
		npmPackage: "@ngxs/store",
		href: "https://www.ngxs.io/",
		description:
			"State management patter and library for Angular, modeled after the CQRS pattern popularly implemented in libraries like Redux and NgRx. Reduces boilerplate by using modern TypeScript features such as classes and decorators.",
		image: "https://github.com/ngxs.png",
		tags: ["state management", "redux"],
	},
	{
		name: "mobx-angular",
		author: "MobX",
		gitHubRepo: "mobxjs/mobx-angular",
		npmPackage: "mobx-angular",
		href: "https://github.com/mobxjs/mobx-angular",
		description:
			"This is a relatively simple connector to the popular MobX library for state management.  MobX automatically knows what properties your components use from the stores and listens to changes, allowing you to automatically react to changes and update only the parts of the UI that need to be updated.",
		image: "https://github.com/mobxjs.png",
		tags: ["state management"],
	},
	{
		name: "Angular Model",
		author: "Tomas Trajan",
		gitHubRepo: "angular-extensions/model",
		npmPackage: "@angular-extensions/model",
		href: "https://tomastrajan.github.io/angular-model-pattern-example#/about",
		description:
			"Simple state management with minimalistic API, one way data flow, multiple models support and immutable data exposed as RxJS Observable.",
		image: "https://github.com/angular-extensions.png",
		tags: ["state management"],
	},
	{
		name: "Angular Redux",
		author: "Angular Redux",
		gitHubRepo: "angular-redux/store",
		npmPackage: "@angular-redux/store",
		href: "https://github.com/angular-redux/ng-redux",
		description:
			"This library provides Angular bindings for Redux, allowing you to easily connect your Angular components with Redux.",
		image: "https://github.com/angular-redux.png",
		tags: ["state management", "redux"],
	},
	{
		name: "Xstate",
		author: "Stately",
		gitHubRepo: "statelyai/xstate",
		npmPackage: "xstate",
		href: "https://xstate.js.org/",
		description:
			"Generic JavaScript and TypeScript finite state machines and statecharts for the modern web.",
		image: "https://xstate.js.org/docs/logo.svg",
		tags: ["state management"],
	},
	{
		name: "AngularFire",
		author: "Google",
		gitHubRepo: "angular/angularfire",
		npmPackage: "@angular/fire",
		href: "https://firebaseopensource.com/projects/angular/angularfire2/",
		description: "The official Angular library for Firebase.",
		image: "https://github.com/firebase.png",
		tags: ["firebase", "data fetching"],
	},
	{
		name: "Apollo Angular",
		author: "Kamil Kisiela",
		gitHubRepo: "kamilkisiela/apollo-angular",
		npmPackage: "apollo-angular",
		href: "https://apollo-angular.com/",
		description:
			"GraphQL client for Angular. Simple to set up, and may be used in any context that Angular may be used.",
		image: "https://landscape.graphql.org/logos/apollo-angular.svg",
		tags: ["GraphQL", "data fetching"],
	},
	{
		name: "Tailwind CSS",
		author: "Adam Wathan & Jonathan Reinink",
		gitHubRepo: "tailwindlabs/tailwindcss",
		npmPackage: "tailwindcss",
		href: "https://tailwindcss.com/",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: ["styling", "Utility-First CSS"],
	},
	{
		name: "Emotion",
		author: "emotion",
		gitHubRepo: "emotion-js/emotion",
		npmPackage: "emotion",
		href: "https://emotion.sh/",
		description:
			"A framework-agnostic library for writing CSS styles using JavaScript.",
		image: "https://github.com/emotion-js.png",
		tags: ["styling", "CSS in JS"],
	},
	{
		name: "NG Bootstrap",
		author: "ng-bootstrap",
		gitHubRepo: "ng-bootstrap/ng-bootstrap",
		npmPackage: "@ng-bootstrap/ng-bootstrap",
		href: "https://ng-bootstrap.github.io/#/home",
		description:
			"Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.",
		image: "https://github.com/ng-bootstrap.png",
		tags: ["component library", "bootstrap"],
	},
	{
		name: "ngx-bootstrap",
		author: "Valor Software",
		gitHubRepo: "valor-software/ngx-bootstrap",
		npmPackage: "ngx-bootstrap",
		href: "https://valor-software.com/ngx-bootstrap/#/",
		description:
			"Provides a collection of Bootstrap components, all powered by Angular.",
		image:
			"https://valor-software.com/ngx-bootstrap/assets/images/logos/ngx-bootstrap-logo.svg",
		tags: ["component library", "bootstrap"],
	},
	{
		name: "Onsen UI",
		author: "Onsen UI",
		gitHubRepo: "OnsenUI/OnsenUI",
		npmPackage: "ngx-onsenui",
		href: "https://onsen.io/",
		description:
			"A set of components to build HTML5 hybrid and mobile web apps. Supports many frameworks, including Angular.",
		image: "https://github.com/OnsenUI.png",
		tags: ["component library"],
	},
	{
		name: "PrimeNG",
		author: "PrimeFaces",
		gitHubRepo: "primefaces/primeng",
		npmPackage: "primeng",
		href: "https://primefaces.org/primeng/",
		description:
			"Over 80 Angular UI Components with top-notch quality to help you implement all your UI requirements in style.",
		image:
			"https://www.primefaces.org/primeng/assets/showcase/images/primeng-logo-dark.svg",
		tags: ["component library"],
	},
	{
		name: "Carbon Components Angular",
		author: "IBM",
		gitHubRepo: "IBM/carbon-components-angular",
		npmPackage: "carbon-components-angular",
		href: "https://angular.carbondesignsystem.com/documentation/index.html",
		description: "An Angular implementation of the Carbon Design System",
		image: "https://github.com/IBM.png",
		tags: ["component library"],
	},
	{
		name: "NG-ZORRO",
		author: "NG-ZORRO",
		gitHubRepo: "NG-ZORRO/ng-zorro-antd",
		npmPackage: "ng-zorro-antd",
		href: "https://ng-zorro.gitee.io/docs/introduce/en",
		description:
			"An enterprise-class Angular UI component library based on Ant Design, all components are open source and free to use under MIT license.",
		image: "https://github.com/NG-ZORRO.png",
		tags: ["component library"],
	},
	{
		name: "Kendo UI",
		author: "Telerik",
		gitHubRepo: "telerik/kendo-angular",
		npmPackage: "@progress/kendo-angular-intl",
		href: "https://www.telerik.com/kendo-angular-ui",
		description:
			"100+ fully native components for building high-quality modern Angular UI in no time.",
		image:
			"https://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/2020-revamp/a_kendo_mascot.svg?sfvrsn=eb49ba02_2",
		tags: ["component library"],
	},
	{
		name: "Formly",
		author: "ngx-formly",
		gitHubRepo: "ngx-formly/ngx-formly",
		npmPackage: "@ngx-formly/core",
		href: "https://formly.dev/",
		description: "Formly is a dynamic (JSON-powered) form library for Angular.",
		image: "https://github.com/ngx-formly.png",
		tags: ["forms", "reactive forms"],
	},
	{
		name: "Reactive Forms",
		author: "ngneat",
		gitHubRepo: "ngneat/reactive-forms",
		npmPackage: "@ngneat/reactive-forms",
		href: "https://github.com/ngneat/reactive-forms",
		description:
			"This library extends every Angular AbstractControl, and provides features that don't exist in the original one. It adds types, reactive queries, and helper methods.",
		image: "https://github.com/ngneat.png",
		tags: ["forms", "reactive forms"],
	},
	{
		name: "Ngx Sub Form",
		author: "cloudnc",
		gitHubRepo: "cloudnc/ngx-sub-form",
		npmPackage: "ngx-sub-form",
		href: "https://github.com/cloudnc/ngx-sub-form",
		description:
			"Utility library to improve the robustness of your Angular forms.",
		image:
			"https://user-images.githubusercontent.com/4950209/53812385-45f48900-3f53-11e9-8687-b57cd335f26e.png",
		tags: ["forms", "reactive forms"],
	},
	{
		name: "JSONForms",
		author: "EclipseSource",
		gitHubRepo: "eclipsesource/jsonforms",
		npmPackage: "@jsonforms/core",
		href: "https://jsonforms.io/",
		description: "More forms. Less code. Complex forms in the blink of an eye.",
		image: "https://jsonforms.io/img/logo.svg",
		darkImageBackground: true,
		tags: ["forms"],
	},
	{
		name: "Ngx Schema Form",
		author: "guillotinaweb",
		gitHubRepo: "guillotinaweb/ngx-schema-form",
		npmPackage: "ngx-schema-form",
		href: "https://github.com/guillotinaweb/ngx-schema-form",
		description:
			"Ngx Schema Form is an Angular 2+ module allowing you to instanciate an HTML form from a JSON schema.",
		image: "https://github.com/guillotinaweb.png",
		tags: ["forms"],
	},
	{
		name: "ngrx-forms.",
		author: "Jonathan Ziller",
		gitHubRepo: "MrWolfZ/ngrx-forms",
		npmPackage: "ngrx-forms",
		href: "https://github.com/MrWolfZ/ngrx-forms",
		description:
			"ngrx-forms brings the strengths of the redux state management model to the world of forms in applications that are using Angular and ngrx.",
		image: "https://github.com/MrWolfZ.png",
		tags: ["forms"],
	},
	{
		name: "Angular",
		author: "Google",
		gitHubRepo: "angular/angular",
		npmPackage: "@angular/core",
		href: "https://angular.io/guide/developer-guide-overview",
		description:
			"Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.",
		image: "https://github.com/angular.png",
		tags: ["framework"],
	},
	{
		name: "Ionic",
		author: "Ionic",
		gitHubRepo: "ionic-team/ionic-framework",
		npmPackage: "@ionic/angular",
		href: "https://ionicframework.com/docs/angular/overview",
		description:
			"@ionic/angular combines the core Ionic experience with the tooling and APIs that are tailored to Angular Developers.",
		image: "https://github.com/ionic-team.png",
		tags: ["framework"],
	},
	{
		name: "NativeScript",
		author: "NativeScript",
		gitHubRepo: "NativeScript/NativeScript",
		npmPackage: "nativescript",
		href: "https://nativescript.org/",
		description:
			"NativeScript empowers you to access native APIs from JavaScript directly. The framework currently provides iOS and Android runtimes for rich mobile development and can be utilized in a number of diverse use cases.",
		image: "https://github.com/NativeScript.png",
		tags: ["framework"],
	},
	{
		name: "NGX-Translate",
		author: "ngx-translate",
		gitHubRepo: "ngx-translate/core",
		npmPackage: "@ngx-translate/core",
		href: "http://www.ngx-translate.com/",
		description:
			"Modular internationalization library for Angular. It gives you access to a service, a directive and a pipe to handle any dynamic or static content.",
		image: "https://github.com/ngx-translate.png",
		tags: ["internationalization"],
	},
	{
		name: "Observer-Spy",
		author: "HiRez.io",
		gitHubRepo: "hirezio/observer-spy",
		npmPackage: "@hirez_io/observer-spy",
		href: "https://github.com/hirezio/observer-spy",
		description: "This library makes RxJS Observables testing easy!",
		image: "https://github.com/hirezio.png",
		tags: ["testing", "RxJS"],
	},
	{
		name: "Protractor",
		author: "Julie Ralph",
		gitHubRepo: "angular/protractor",
		npmPackage: "protractor",
		href: "http://www.protractortest.org/#/",
		description:
			"Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.",
		image: "https://protractor.angular.io/images/protractor.png",
		tags: ["testing"],
	},
	{
		name: "AG Grid",
		author: "AG Grid",
		gitHubRepo: "ag-grid/ag-grid",
		npmPackage: "ag-grid-community",
		href: "https://ag-grid.com/angular-data-grid/getting-started/",
		description:
			"AG Grid is a fully-featured and highly customizable JavaScript data grid.",
		image: "https://github.com/ag-grid.png",
		tags: ["components"],
	},
	{
		name: "AGM - Angular Google Maps",
		author: "Sebastian Holstein",
		gitHubRepo: "SebastianM/angular-google-maps",
		npmPackage: "@agm/core",
		href: "https://angular-maps.com/guides/getting-started/",
		description: "Angular components for Google Maps.",
		image:
			"https://raw.githubusercontent.com/SebastianM/angular-google-maps/master/assets/images/angular-google-maps-logo.png",
		tags: ["components"],
	},
	{
		name: "NGX Skeleton loader",
		author: "Will Mendes",
		gitHubRepo: "willmendesneto/ngx-skeleton-loader",
		npmPackage: "ngx-skeleton-loader",
		href: "https://github.com/willmendesneto/ngx-skeleton-loader",
		description:
			"Make beautiful, animated loading skeletons that automatically adapt to your Angular apps.",
		image: "https://github.com/willmendesneto.png",
		tags: ["components"],
	},
]
