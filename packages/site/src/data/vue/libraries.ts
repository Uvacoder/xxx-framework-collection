import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"Vue 2",
	"Vue 3",
	"3D",
	"a11y",
	"state management",
	"data fetching",
	"graphQL",
	"HTTP client",
	"styling",
	"CSS in JS",
	"utility-first CSS",
	"CSS processor",
	"CSS modules",
	"webpack",
	"component library",
	"forms",
	"redux",
	"framework",
	"static site generation",
	"server side rendering",
	"documentation",
	"testing",
	"storybook",
	"routing",
	"animation",
	"component",
	"internationalization",
	"nuxt",
] as const

// The default image here for use
// on libraries that don't have an image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultImage =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png"

// TODO: Update the language fields to contain the correct language for package lookup

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Quasar",
		author: "Razvan Stoenescu",
		repo: "https://www.github.com/quasarframework/quasar",
		package: "https://www.npmjs.com/package/quasar",
		href: "https://quasar.dev",
		description:
			"Effortlessly build high-performance & high-quality Vue.js 3 and Vue.js 2 user interfaces in record time",
		image: "https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png",
		tags: ["component library", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Element UI",
		author: "ElemeFE",
		repo: "https://www.github.com/ElemeFE/element",
		package: "https://www.npmjs.com/package/element-ui",
		href: "https://element.eleme.io/",
		description: "A Vue.js 2.0 UI Toolkit for Web.",
		image: "https://iconape.com/wp-content/png_logo_vector/element-ui.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Element Plus",
		author: "Element Plus",
		repo: "https://www.github.com/element-plus/element-plus",
		package: "https://www.npmjs.com/package/element-plus",
		href: "https://element-plus.org/",
		description: "A Vue 3 based component library for designers and developers",
		image: "https://element-plus.org/images/element-plus-logo.svg",
		tags: ["component library", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vuetify",
		author: "John Jeremy Leider",
		repo: "https://www.github.com/vuetifyjs/vuetify",
		package: "https://www.npmjs.com/package/vuetify",
		href: "https://vuetifyjs.com/",
		description:
			"Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.",
		image: "https://iconape.com/wp-content/png_logo_vector/vuetify-logo.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Vuesax",
		author: "lusaxweb",
		repo: "https://www.github.com/lusaxweb/vuesax-next",
		package: "https://www.npmjs.com/package/vuesax",
		href: "https://vuesax.com/",
		description:
			"Components for Vuejs. We love what we do. Let us help you do what You love.",
		image: "https://vuesax.com/logos/logo-vuesax-svg-7.svg",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Bootstrap vue",
		author: "BootstrapVue",
		repo: "https://www.github.com/bootstrap-vue/bootstrap-vue",
		package: "https://www.npmjs.com/package/bootstrap-vue",
		href: "https://bootstrap-vue.org/",
		description:
			"BootstrapVue provides one of the most comprehensive implementations of the Bootstrap v4.5 component and grid system available for Vue.js v2.6, complete with extensive and automated WAI-ARIA accessibility markup.",
		image:
			"https://github.com/bootstrap-vue/bootstrap-vue/raw/master/static/banner.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Keen UI",
		author: "Josephus Paye II",
		repo: "https://www.github.com/JosephusPaye/Keen-UI",
		package: "https://www.npmjs.com/package/keen-ui",
		href: "https://josephuspaye.github.io/Keen-UI",
		description:
			"Keen UI is a Vue 2 UI library with a simple API, inspired by Google's Material Design.",
		image:
			"https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/1157/keen.jpg",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Ant Design Vue",
		author: "ant-design-vue",
		repo: "https://www.github.com/vueComponent/ant-design-vue",
		package: "https://www.npmjs.com/package/ant-design-vue",
		href: "https://www.antdv.com/docs/vue/introduce/",
		description:
			"Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.",
		image:
			"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
		tags: ["component library", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Fish UI",
		author: "myliang",
		repo: "https://www.github.com/myliang/fish-ui",
		package: "https://www.npmjs.com/package/fish-ui",
		href: "https://myliang.github.io/fish-ui/#/components/index",
		description: "A Vue 2 UI Toolkit for Web.",
		image:
			"https://github.com/myliang/fish-ui/raw/master/static/logo.png?raw=true",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Equal",
		author: "quatrochan",
		repo: "https://www.github.com/quatrochan/Equal",
		package: "https://www.npmjs.com/package/equal-vue",
		href: "https://quatrochan.github.io/Equal/",
		description:
			"Equal UI is a Vue 3 components library with 30+ components based on TypeScript and personal design system.",
		image: "https://quatrochan.github.io/Equal/eqqqual.png",
		tags: ["component library", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Buefy",
		author: "Rafael Beraldo",
		repo: "https://www.github.com/vueComponent/ant-design-vue",
		package: "https://www.npmjs.com/package/buefy",
		href: "https://buefy.org/",
		description:
			"Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.",
		image: "https://buefy.org/static/img/buefy.1d65c18.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "PrimeVUE",
		author: "PrimeTek",
		repo: "https://www.github.com/primefaces/primevue",
		package: "https://www.npmjs.com/package/primevue",
		href: "https://www.primefaces.org/primevue/",
		description:
			"PrimeVue is a rich set of open source UI Components for Vue. See PrimeVue homepage for live showcase and documentation.",
		image:
			"https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg",
		tags: ["component library", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vuikit",
		author: "Miljan Aleksic",
		repo: "https://www.github.com/vuikit/vuikit",
		package: "https://www.npmjs.com/package/vuikit",
		href: "https://vuikit.js.org/",
		description:
			"A responsive Vue 2 UI library for web site interfaces based on the UIkit 3 framework.",
		image: "https://vuikit.js.org/img/vuikit-logo-large.1eeb1a0a.svg",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Chakra UI",
		author: "Jonathan Bakebwa",
		repo: "https://www.github.com/chakra-ui/chakra-ui-vue",
		package: "https://www.npmjs.com/package/@chakra-ui/vue",
		href: "https://vue.chakra-ui.com/",
		description:
			"Chakra UI gives you a set of accessible and composable Vue components that you can use to build your favourite applications and sites. Made for Vue 2.X",
		image: "",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},

	{
		name: "Vue Material",
		author: "Marcos Moura, Creative Tim & Community",
		repo: "https://www.github.com/vuematerial/vue-material",
		package: "https://www.npmjs.com/package/vue-material",
		href: "https://vuematerial.io/",
		description:
			"Vue Material is Simple, lightweight and built exactly according to the Google Material Design specs",
		image:
			"https://camo.githubusercontent.com/046e9e47577f961eb9a8468ca73de80a0f3e8de2d15796db2797ae5211a88245/68747470733a2f2f7777772e63726561746976652d74696d2e636f6d2f7675656d6174657269616c2f6173736574732f6c6f676f2d636f6c6f722e706e67",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Mint UI",
		author: "mint-ui",
		repo: "https://www.github.com/ElemeFE/mint-ui",
		package: "https://www.npmjs.com/package/mint-ui",
		href: "http://mint-ui.github.io/#!/en",
		description: "Mobile UI elements for Vue 2.0",
		image: "https://i.ibb.co/sR3BGbk/mint-ui-logo.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},

	{
		name: "Semantic UI Vue",
		author: "Mario Lamacchia",
		repo: "https://www.github.com/Semantic-UI-Vue/Semantic-UI-Vue",
		package: "https://www.npmjs.com/package/semantic-ui-vue",
		href: "https://semantic-ui-vue.github.io/",
		description:
			"Semantic UI Vue is the Vue integration for Semantic UI. It is highly inspired on Semantic UI React If you have used it already, you will find Semantic UI Vue's API to be almost the same.",
		image:
			"https://raw.githubusercontent.com/Semantic-UI-Vue/Semantic-UI-Vue/master/docs/public/static/images/logo.png",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Vectre",
		author: "Vadim Tiukov",
		repo: "https://www.github.com/vectrejs/vectre",
		package: "https://www.npmjs.com/package/@vectrejs/vectre",
		href: "https://vectrejs.github.io/docs/",
		description: "A Lightweight, Simple and Responsive Component Framework",
		image: "https://vectrejs.github.io/docs/img/logo.3b9b2fe3.svg",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Vant UI",
		author: "Youzan",
		repo: "https://www.github.com/youzan/vant",
		package: "https://www.npmjs.com/package/vant",
		href: "https://vant-contrib.gitee.io/vant/#/en-US/",
		description: "Mobile UI Components built on Vue",
		image: "https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",
		tags: ["component library", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Naive UI",
		author: "TuSimple",
		repo: "https://www.github.com/TuSimple/naive-ui",
		package: "https://www.npmjs.com/package/naive-ui",
		href: "https://www.naiveui.com/",
		description:
			"A Vue 3 Component Library. Fairly Complete, Customizable Themes, Uses TypeScript, Not Too Slow. Kinda Interesting.",
		image: "https://www.naiveui.com/assets/naivelogo.93278402.svg",
		tags: ["component library", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vuestic UI",
		author: "Epicmax",
		repo: "https://www.github.com/epicmaxco/vuestic-ui",
		package: "https://www.npmjs.com/package/vuestic-ui",
		href: "https://vuestic.dev/",
		description: "Vue 3.0 UI Framework",
		image: "https://vuestic.dev/favicon-16x16.png",
		tags: ["component library", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Agnostic UI",
		author: "AgnosticUI",
		repo: "https://www.github.com/AgnosticUI/agnosticui",
		package: "https://www.npmjs.com/package/agnostic-vue",
		href: "https://www.agnosticui.com/",
		description:
			"AgnosticUI is a set of UI primitives that start their lives in clean HTML and CSS. These standards compliant components are then copied to our framework implementations in: React, Vue 3, Svelte, and Angular (experimental).",
		image:
			"https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/graphics/AgnosticUI%20Logo%20300x300.png",
		tags: ["component library", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "AT-UI",
		author: "O2Team",
		repo: "https://www.github.com/at-ui/at-ui",
		package: "https://www.npmjs.com/package/at-ui",
		href: "https://github.com/at-ui/at-ui",
		description:
			"AT-UI is a modular front-end UI framework for developing fast and powerful web interfaces based on Vue.js.",
		image:
			"https://camo.githubusercontent.com/1c853ebd899a4287544a0c9268ff5455f6ea42af19f38ce47a68ac1c05552a25/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d6174313530323731383232313638362e737667",
		tags: ["component library", "Vue 2"],
		language: libraryTags[0],
	},
	{
		name: "Pinia",
		author: "Eduardo San Martin Morote",
		repo: "https://www.github.com/vuejs/pinia",
		package: "https://www.npmjs.com/package/pinia",
		href: "https://pinia.vuejs.org/",
		description: "The Vue Store that you will enjoy using",
		image: "https://pinia.vuejs.org/logo.svg",
		tags: ["state management", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vuex",
		author: "Evan You",
		repo: "https://www.github.com/vuejs/vuex",
		package: "https://www.npmjs.com/package/vuex",
		href: "https://vuex.vuejs.org/",
		description:
			"Vuex is a state management pattern + library for Vue.js applications.",
		image: "https://github.com/vuejs.png",
		tags: ["state management", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vue Apollo",
		author: "Apollo GraphQL, Guillaume Chau",
		repo: "https://www.github.com/vuejs/apollo",
		package: "https://www.npmjs.com/package/@vue/apollo-composable",
		href: "https://v4.apollo.vuejs.org/",
		description: "Integrate GraphQL in your Vue.js apps!",
		image: "https://github.com/apollographql.png",
		tags: ["state management", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "XState",
		author: "David Khourshid",
		repo: "https://www.github.com/statelyai/xstate",
		package: "https://www.npmjs.com/package/xstate",
		href: "https://xstate.js.org/docs/packages/xstate-vue/#xstate-vue",
		description:
			"JavaScript and TypeScript finite state machines and statecharts for the modern web.",
		image: "https://github.com/statelyai.png",
		tags: ["state management", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Swrv",
		author: "Kong",
		repo: "https://www.github.com/Kong/swrv",
		package: "https://www.npmjs.com/package/swrv",
		href: "https://xstate.js.org/docs/packages/xstate-vue/#xstate-vue",
		description: "Stale-while-revalidate data fetching for Vue.",
		image: "https://raw.githubusercontent.com/Kong/swrv/master/logo.png",
		tags: ["data fetching", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "TailwindCSS",
		author: "Adam Wathan & Jonathan Reinink",
		repo: "https://www.github.com/tailwindlabs/tailwindcss",
		package: "https://www.npmjs.com/package/tailwindcss",
		href: "https://tailwindcss.com/docs/guides/vite",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: ["styling", "utility-first CSS", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Sass",
		author: "Google",
		repo: "https://www.github.com/sass/dart-sass",
		package: "https://www.npmjs.com/package/sass",
		href: "https://sass-lang.com/",
		description:
			"Sass is a very mature, stable, and powerful professional grade CSS extension language. It provides a superset of CSS with features like nesting, variables, imports and mixins.",
		image: "https://github.com/sass.png",
		tags: ["styling", "CSS processor", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vanilla Extract",
		author: "SEEK",
		repo: "https://www.github.com/seek-oss/vanilla-extract",
		package: "https://www.npmjs.com/package/@vanilla-extract/css",
		href: "https://vanilla-extract.style/",
		description:
			"Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.",
		image: "https://github.com/seek-oss.png",
		tags: [
			"styling",
			"CSS processor",
			"CSS in JS",
			"CSS modules",
			"Vue 2",
			"Vue 3",
		],
		language: libraryTags[0],
	},
	{
		name: "styled-components",
		author: "Glen Maddern & Maximilian Stoiber",
		repo: "https://www.github.com/styled-components/styled-components",
		package: "https://www.npmjs.com/package/styled-components",
		href: "https://www.styled-components.com/",
		description:
			"Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!",
		image: "https://github.com/styled-components.png",
		tags: ["styling", "CSS in JS", "Vue 2", "Vue 3"],
		language: libraryTags[0],
	},
	{
		name: "Vuelidate",
		author: "Vuelidate",
		repo: "https://www.github.com/vuelidate/vuelidate",
		package: "https://www.npmjs.com/package/vuelidate",
		href: "https://vuelidate-next.netlify.app/",
		description:
			"Vuelidate 2 is a simple, but powerful, lightweight model-based validation for Vue.js 3 and 2.",
		image: "https://github.com/vuelidate.png",
		tags: ["forms"],
		language: libraryTags[0],
	},
	{
		name: "FormKit",
		author: "FormKit, Inc",
		repo: "https://www.github.com/formkit/formkit",
		package: "https://www.npmjs.com/package/@formkit/vue",
		href: "https://formkit.com/",
		description:
			"A Vue form building framework that simplifies form structure, generation, validation, theming, submission, error handling, and more.",
		image: "https://github.com/formkit.png",
		tags: ["forms"],
		language: libraryTags[0],
	},
	{
		name: "Astro",
		author: "Fred K. Schott",
		repo: "https://www.github.com/withastro/astro",
		package: "https://www.npmjs.com/package/astro",
		href: "https://astro.build/",
		image: "https://github.com/withastro.png",
		tags: ["framework", "static site generation"],
		description:
			"Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.",
		language: libraryTags[0],
	},

	{
		name: "NuxtJs",
		author: "Nuxt Team",
		repo: "https://www.github.com/nuxt",
		package: "https://www.npmjs.com/package/nuxt",
		href: "https://nuxtjs.org/",
		image: "https://github.com/nuxt.png",
		tags: ["framework", "server side rendering", "static site generation"],
		description:
			"Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.",
		language: libraryTags[0],
	},
	{
		name: "Vue I18n",
		author: "Kazuya Kawaguchi",
		repo: "https://www.github.com/kazupon/vue-i18n",
		package: "https://www.npmjs.com/package/vue-i18n",
		href: "https://kazupon.github.io/vue-i18n/",
		image: "https://kazupon.github.io/vue-i18n/vue-i18n-logo.png",
		tags: ["internationalization"],
		description: "Vue I18n is internationalization plugin for Vue.js",
		language: libraryTags[0],
	},
	{
		name: "Harlem",
		author: "Andrew Courtice",
		repo: "https://www.github.com/andrewcourtice/harlem",
		package: "https://www.npmjs.com/package/@harlem/core",
		href: "https://harlemjs.com/",
		image: "https://harlemjs.com/assets/images/logo-192.svg",
		tags: ["state management", "Vue 3"],
		description:
			"Simple, unopinionated, lightweight and extensible state management for Vue 3",
		language: libraryTags[0],
	},
	{
		name: "Vue Testing Library",
		author: "testing-library",
		repo: "https://www.github.com/testing-library/vue-testing-library",
		package: "https://www.npmjs.com/package/@testing-library/vue",
		href: "https://testing-library.com/docs/vue-testing-library/intro",
		image: "https://github.com/testing-library.png",
		tags: ["testing", "Vue 2", "Vue 3"],
		description:
			"Simple and complete Vue.js testing utilities that encourage good testing practices.",
		language: libraryTags[0],
	},
	{
		name: "Vitest",
		author: "Vitest",
		repo: "https://www.github.com/vitest-dev/vitest",
		package: "https://www.npmjs.com/package/vitest",
		href: "https://vitest.dev/",
		image: "https://github.com/vitest-dev.png",
		tags: ["testing", "Vue 2", "Vue 3"],
		description: "A blazing fast unit test framework powered by Vite.",
		language: libraryTags[0],
	},
	{
		name: "Cypress",
		author: "Cypress",
		repo: "https://www.github.com/cypress-io/cypress",
		package: "https://www.npmjs.com/package/cypress",
		href: "https://www.cypress.io/",
		image: "https://github.com/cypress-io.png",
		tags: ["testing", "Vue 2", "Vue 3"],
		description:
			"Fast, easy and reliable testing for anything that runs in a browser.",
		language: libraryTags[0],
	},
	{
		name: "Jest",
		author: "Meta",
		repo: "https://www.github.com/facebook/jest",
		package: "https://www.npmjs.com/package/jest",
		href: "https://jestjs.io/",
		image:
			"https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest.png",
		tags: ["testing", "Vue 2", "Vue 3"],
		description:
			"Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
		language: libraryTags[0],
	},
	{
		name: "Cypress IndexedDB helpers",
		author: "This Dot Labs",
		repo: "https://www.github.com/thisdot/open-source",
		package: "https://www.npmjs.com/package/@this-dot/cypress-indexeddb",
		href: "https://www.npmjs.com/package/@this-dot/cypress-indexeddb",
		image: "https://github.com/thisdot.png",
		tags: ["testing"],
		description:
			"Cypress IndexedDB helpers are a set of custom cypress commands that helps you handle indexedDB related operations in your Cypress tests.",
		language: libraryTags[0],
	},
	{
		name: "Vue Route Guard",
		author: "This Dot Labs",
		repo: "https://www.github.com/thisdot/open-source",
		package: "https://www.npmjs.com/package/@this-dot/vue-route-guard",
		href: "https://www.npmjs.com/package/@this-dot/vue-route-guard",
		image: "https://github.com/thisdot.png",
		tags: ["routing"],
		description:
			"Vue Route Guard is an Vue library that wraps around the vue-router and extends it to provide helpful methods to handle page guards via token authorization and permissions.",
		language: libraryTags[0],
	},
]
