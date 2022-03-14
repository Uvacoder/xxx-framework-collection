import { Book } from "@framework/system/src/models/book"

export const bookTags = [
	"graphQL",
	"redux",
	"routing",
	"projects",
	"recipes",
	"accessibility",
	"authentication",
	"typescript",
	"testing",
	"material UI",
	"nextJS",
	"flow",
] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "The Road To Enterprise",
		authors: ["Thomas Findlay"],
		image: "https://theroadtoenterprise.com/images/react-book-cover-large.png",
		description: '"React - The Road To Enterprise" is an advanced book that revolves around best practices, advanced patterns and techniques for the development of React and Next applications in TypeScript. It\'s a one-stop resource for many crucial concepts that should help you solve and avoid many pain-points when developing React applications. This book covers many advanced topics to help you build maintainable, scalable and performant React applications, such as scalable project architecture, useful techniques for handling async operations and API states, advanced component patterns, performance optimisation, local and global state management patterns, static site generation (SSG) and server side rendering (SSR) with Next.js and more.',
		yearOfPublication: 2022,
		numberOfPages: 433,
		level: 'advanced',
		href: 'https://theroadtoenterprise.com/books/react-the-road-to-enterprise',
		tags: ['projects', 'typescript', 'recipes', 'testing', 'routing', 'nextJS', 'redux']
	},
	{
		title: "Learning React",
		authors: ["Eve Porcello", "Alex Banks"],
		image: "https://www.oreilly.com/library/cover/9781492051718/",
		description:
			"If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code.",
		yearOfPublication: 2020,
		numberOfPages: 358,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/",
		tags: ["projects"],
	},
	{
		title: "React Cookbook",
		authors: ["David Griffiths", "Dawn Griffiths"],
		image: "https://www.oreilly.com/library/cover/9781492085836/",
		description:
			"Many books teach you how to get started, understand the framework, or use a component library with React, but very few provide examples to help you solve particular problems. This easy-to-use cookbook includes the example code developers need to unravel the most common problems when using React, categorized by topic area and problem.",
		yearOfPublication: 2021,
		numberOfPages: 577,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-cookbook/9781492085836/",
		tags: ["recipes", "authentication", "accessibility", "graphQL"],
	},
	{
		title: "Full-Stack React, TypeScript, and Node",
		authors: ["David Choi"],
		image: "https://www.oreilly.com/library/cover/9781839219931/",
		description:
			"This book takes a hands-on approach to implementing modern web technologies and the associated methodologies for building full-stack apps using Node.js, Express, and GraphQL.",
		yearOfPublication: 2020,
		numberOfPages: 627,
		level: "advanced",
		href: "https://www.oreilly.com/library/view/full-stack-react-typescript/9781839219931/",
		tags: ["typescript", "graphQL"],
	},
	{
		title: "React Hooks in Action",
		authors: ["John Larsen"],
		image: "https://www.oreilly.com/library/cover/9781617297632/",
		description:
			"React Hooks in Action teaches you to write fast and reusable React components using Hooks. You’ll start by learning to create component code with Hooks. Next, you’ll implement a resource booking application that demonstrates managing local state, application state, and side effects like fetching data. Code samples and illustrations make learning Hooks easy.",
		yearOfPublication: 2021,
		numberOfPages: 516,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-hooks-in/9781617297632/",
		tags: ["projects"],
	},
	{
		title: "React 17 Design Patterns and Best Practices",
		authors: ["Carlos Santana Roldan"],
		image: "https://www.oreilly.com/library/cover/9781800560444/",
		description:
			"This book will help you to use React effectively to make your applications more flexible, easier to maintain, and improve their performance, while giving your workflow a huge boost by improving speed without affecting quality.",
		yearOfPublication: 2021,
		numberOfPages: 353,
		level: "advanced",
		href: "https://www.oreilly.com/library/view/react-17-design/9781800560444/",
		tags: ["graphQL", "recipes"],
	},
	{
		title: "React: Up & Running",
		authors: ["Stoyan Stefanov"],
		image: "https://www.oreilly.com/library/cover/9781492051459/",
		description:
			"Through the course of this book, author Stoyan Stefanov helps web developers and programmers build a complete single-page application. You'll quickly learn why some developers consider React the key to the web app development puzzle. If you're familiar with JavaScript syntax, you're ready to get started.",
		yearOfPublication: 2021,
		numberOfPages: 221,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-up/9781492051459/",
		tags: ["projects"],
	},
	{
		title: "Practical Enterprise React",
		authors: ["Devlin Basilan Duldulao", "Ruby Jane Leyva Cabagnot"],
		image: "https://www.oreilly.com/library/cover/9781484269756/",
		description:
			"Knowing the basics of React is important, but what is more important is knowing the common third-party libraries and how to use them. The book is perfect for intermediate to experienced React developers or busy React developers who would like to get things done and have maintainable React code.",
		yearOfPublication: 2021,
		numberOfPages: 383,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/practical-enterprise-react/9781484269756/",
		tags: ["routing", "authentication", "typescript"],
	},
	{
		title: "Simplify Testing with React Testing Library",
		authors: ["Scottie Crump"],
		image: "https://www.oreilly.com/library/cover/9781800564459/",
		description:
			"React Testing Library (RTL) is a lightweight and easy-to-use tool for testing the document object model (DOM) output of components. This book will show you how to use this modern, user-friendly tool to test React components, reducing the risk that your application will not work as expected in production.",
		yearOfPublication: 2021,
		numberOfPages: 261,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/simplify-testing-with/9781800564459/",
		tags: ["testing"],
	},
	{
		title: "Test-Driven Development with React",
		authors: ["Juntao Qiu"],
		image: "https://www.oreilly.com/library/cover/9781484269725/",
		description:
			"Learn to use accelerated test-driven development (TDD) to build a React application from scratch. This book explains how your React components will be integrated, and how to refactor code to make it more concise and flexible.",
		yearOfPublication: 2021,
		numberOfPages: 166,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/test-driven-development-with/9781484269725/",
		tags: ["testing"],
	},
	{
		title: "Full-Stack React Projects",
		authors: ["Shama Hoque"],
		image: "https://www.oreilly.com/library/cover/9781839215414/",
		description:
			"Full-Stack React Projects will take you through the process of preparing the development environment for MERN stack-based web development, creating a basic skeleton app, and extending it to build six different web apps.",
		yearOfPublication: 2020,
		numberOfPages: 987,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/full-stack-react-projects/9781839215414/",
		tags: ["projects"],
	},
	{
		title: "The React Workshop",
		authors: [
			"Brandon Richey",
			"Ryan Yu",
			"Endre Vegh",
			"Theofanis Despoudis",
			"Anton Punith",
			"Florian Sloot",
		],
		image: "https://www.oreilly.com/library/cover/9781838645564/",
		description:
			"Work through engaging exercises and activities and gain practical skills to make your web applications function effortlessly with the help of React",
		yearOfPublication: 2020,
		numberOfPages: 665,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/the-react-workshop/9781838645564/",
		tags: ["projects"],
	},
	{
		title: "React Material-UI Cookbook",
		authors: ["Adam Boduch"],
		image: "https://www.oreilly.com/library/cover/9781789615227/",
		description:
			"This book will show you how you can create impressive and captivating modern-day web apps by implementing Material Design considerations. The book is designed to help you use a variety of Material-UI components to enhance UI functionality, along with guiding you through React best practices.",
		yearOfPublication: 2019,
		numberOfPages: 774,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-material-ui-cookbook/9781789615227/",
		tags: ["material UI"],
	},
	{
		title: "Test-Driven React",
		authors: ["Trevor Burnham"],
		image: "https://www.oreilly.com/library/cover/9781680507058/",
		description:
			"Test-Driven React helps you refine your React workflow to give you the feedback you need as quickly as possible. Write strong tests and run them continuously as you work, split complex code up into manageable pieces, and stay focused on what's important by automating away mundane, trivial tasks.",
		yearOfPublication: 2019,
		numberOfPages: 209,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/test-driven-react/9781680507058/",
		tags: ["testing"],
	},
	{
		title:
			"Hands-On Full Stack Development with Spring Boot 2 and React - Second Edition",
		authors: ["Juha Hinkula"],
		image: "https://www.oreilly.com/library/cover/9781838822361/",
		description:
			"A comprehensive guide to building full stack applications covering frontend and server-side programming, data management, and web security.",
		yearOfPublication: 2019,
		numberOfPages: 377,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/hands-on-full-stack/9781838822361/",
		tags: [],
	},
	{
		title: "React and Libraries",
		authors: ["Elad Elrom"],
		image: "https://www.oreilly.com/library/cover/9781484266960/",
		description:
			"Harness the power of React and the related libraries that you need to know to deliver successful front-end implementations. Whether you are a beginner getting started or an existing React developer, this book will provide you with the must-have knowledge you need in your toolbox  to build a complete app.",
		yearOfPublication: 2021,
		numberOfPages: 379,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-and-libraries/9781484266960/",
		tags: ["typescript", "routing", "testing", "material UI"],
	},
	{
		title: "Pro MERN Stack",
		authors: ["Vasan Subramanian"],
		image: "https://www.oreilly.com/library/cover/9781484243916/",
		description:
			"Assemble the complete stack required to build a modern web app using MongoDB, Express, React, and Node. This book also covers many other complementary tools: React Router, GraphQL, React-Bootstrap, Babel, and Webpack.",
		yearOfPublication: 2019,
		numberOfPages: 779,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/pro-mern-stack/9781484243916/",
		tags: ["routing"],
	},
	{
		title: "Learn React with TypeScript 3",
		authors: ["Carl Rippon"],
		image: "https://www.oreilly.com/library/cover/9781789610253/",
		description:
			"In this book, you'll learn how to create well structured and reusable react components that are easy to read and maintain by leveraging modern web development techniques.",
		yearOfPublication: 2018,
		numberOfPages: 541,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/learn-react-with/9781789610253/",
		tags: ["typescript", "graphQL", "routing", "redux"],
	},
	{
		title: "Pro React 16",
		authors: ["Adam Freeman"],
		image: "https://www.oreilly.com/library/cover/9781484244517/",
		description:
			"Best-selling author Adam Freeman explains how to get the most from React. He begins by describing the React architecture and the benefits it offers and then shows you how to use React and its associated tools and libraries in your projects.",
		yearOfPublication: 2019,
		numberOfPages: 966,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/pro-react-16/9781484244517/",
		tags: ["graphQL"],
	},
	{
		title: "Learn React Hooks",
		authors: ["Daniel Bugl"],
		image: "https://www.oreilly.com/library/cover/9781838641443/",
		description:
			"This React book starts by introducing you to React Hooks. You will then get to grips with building a complex UI in React while keeping the code simple and extensible. Next, you will quickly move on to building your first applications with React Hooks.",
		yearOfPublication: 2019,
		numberOfPages: 617,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/learn-react-hooks/9781838641443/",
		tags: [],
	},
	{
		title: "React Projects",
		authors: ["Roy Derks"],
		image: "https://www.oreilly.com/library/cover/9781789954937/",
		description:
			"React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools such as GraphQL, Expo, and React 360. You'll start building a real-world project right from the first chapter and get hands on with developing scalable applications as you advance to building more complex projects.",
		yearOfPublication: 2019,
		numberOfPages: 525,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-projects/9781789954937/",
		tags: ["projects", "testing", "routing"],
	},
	{
		title: "Building React Apps with Server-Side Rendering",
		authors: ["Mohit Thakkar"],
		image: "https://www.oreilly.com/library/cover/9781484258699/",
		description:
			"Leverage the benefits of both client-side and server-side rendering to get the most out of your React applications. By the end of this book you will be able to build and deploy React applications using the Next.js framework to fully render server-side HTML on every Web page.",
		yearOfPublication: 2020,
		numberOfPages: 194,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/building-react-apps/9781484258699/",
		tags: ["nextJS"],
	},
	{
		title: "Learning React",
		authors: ["Kirupa Chinnathambi"],
		image: "https://www.oreilly.com/library/cover/9780134843582/",
		description:
			"Learning React is chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show you how to apply what you learn.",
		yearOfPublication: 2018,
		numberOfPages: 436,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/learning-react-a/9780134843582/",
		tags: ["redux"],
	},
	{
		title: "React in Action",
		authors: ["Mark Thomas"],
		image: "https://www.oreilly.com/library/cover/9781617293856/",
		description:
			"React. This practical book gets you up and running quickly with hands-on examples in every chapter. You'll master core topics like rendering, lifecycle methods, JSX, data flow, forms, routing, integrating with third-party libraries, and testing.",
		yearOfPublication: 2018,
		numberOfPages: 643,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-in-action/9781617293856/",
		tags: ["routing", "testing"],
	},
	{
		title: "React Quickly",
		authors: ["Azat Mardan"],
		image: "https://www.oreilly.com/library/cover/9781617293344/",
		description:
			"React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
		yearOfPublication: 2017,
		numberOfPages: 829,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-quickly-painless/9781617293344/",
		tags: ["testing", "routing", "projects"],
	},
	{
		title: "Full-Stack React Projects",
		authors: ["Shama Hoque"],
		image: "https://www.oreilly.com/library/cover/9781788835534/",
		description:
			"This book guides you through preparing the development environment for MERN stack-based web development, to creating a basic skeleton application and extending it to build four different web applications.",
		yearOfPublication: 2018,
		numberOfPages: 726,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/full-stack-react-projects/9781788835534/",
		tags: ["projects", "authentication"],
	},
	{
		title: "React Router Quick Start Guide",
		authors: ["Sagar Ganatra"],
		image: "https://www.oreilly.com/library/cover/9781789532555/",
		description:
			"The book starts with an introduction to React Router and teaches you how to create your first route using the React component. You will then learn about configuring your routes, passing parameters, and creating nested routes.",
		yearOfPublication: 2018,
		numberOfPages: 181,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-router-quick/9781789532555/",
		tags: ["routing"],
	},
	{
		title: "Create React App 2 Quick Start Guide",
		authors: ["Brandon Richey"],
		image: "https://www.oreilly.com/library/cover/9781789952766/",
		description:
			"This book will help you use CRA to write React programs without significant configuration-related difficulties. With this quick start guide, you will integrate your applications with React to build efficient professional web services.",
		yearOfPublication: 2019,
		numberOfPages: 251,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/create-react-app/9781789952766/",
		tags: [],
	},
	{
		title: "What React Is and Why It Matters",
		authors: ["Eric Baer"],
		image: "https://www.oreilly.com/library/cover/9781491996744/",
		description:
			"Many excellent resources will teach you how to use React, but few get into just why this library matters. In this ebook, author Eric Baer examines React’s core innovations with as little jargon as possible to help promote a diverse set of views in your conversations about technology.",
		yearOfPublication: 2018,
		numberOfPages: 63,
		level: "advanced",
		href: "https://www.oreilly.com/library/view/what-react-is/9781491996744/",
		tags: [],
	},
	{
		title: "React Cookbook",
		authors: ["Carlos Santana Roldan"],
		image: "https://www.oreilly.com/library/cover/9781783980727/",
		description:
			"Over 66 hands-on recipes that cover UI development, animations, component architecture, routing, databases, testing, and debugging with React",
		yearOfPublication: 2018,
		numberOfPages: 579,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-cookbook/9781783980727/",
		tags: ["recipes"],
	},
	{
		title: "Isomorphic Web Applications",
		authors: ["Elyse Kolker Gordon"],
		image: "https://www.oreilly.com/library/cover/9781617294396/",
		description:
			"This book teaches you to build production-quality web apps using isomorphic architecture. You'll learn to create and render views for both server and browser, optimize local storage, streamline server interactions, and handle data serialization.",
		yearOfPublication: 2018,
		numberOfPages: 532,
		level: "advanced",
		href: "https://www.oreilly.com/library/view/isomorphic-web-applications/9781617294396/",
		tags: ["redux"],
	},
	{
		title: "Beginning React",
		authors: ["Andrea Chiarelli"],
		image: "https://www.oreilly.com/library/cover/9781789530520/",
		description:
			"This book includes helpful guidance on how to consider key user requirements within the development process, and also shows you how to work with advanced concepts such as state management, data-binding, routing, and the popular component markup that is JSX.",
		yearOfPublication: 2018,
		numberOfPages: 112,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/beginning-react/9781789530520/",
		tags: ["routing"],
	},
	{
		title: "React 16 Essentials",
		authors: ["Artemij Fedosejev", "Adam Boduch"],
		image: "https://www.oreilly.com/library/cover/9781787126046/",
		description:
			"This book will take you on a fast-paced, hands-on journey through building your own maintainable React 16 applications.",
		yearOfPublication: 2017,
		numberOfPages: 249,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-16-essentials/9781787126046/",
		tags: ["redux", "testing"],
	},
	{
		title: "React for Real",
		authors: ["Ludovico Fischer"],
		image: "https://www.oreilly.com/library/cover/9781680502817/",
		description:
			"Craft isolated components that make your apps easier to develop and maintain, with plenty of guidance on best practices. Set up automated tests, and make pages render fast for your users. See how to use your React skills to integrate with other front-end technologies when needed.",
		yearOfPublication: 2017,
		numberOfPages: 146,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-for-real/9781680502817/",
		tags: ["redux"],
	},
	{
		title: "React 16 Tooling",
		authors: ["Adam Boduch"],
		image: "https://www.oreilly.com/library/cover/9781788835015/",
		description:
			"This book covers React tools that help developers with the most relevant challenges they face today. Each chapter begins by defining the challenge faced by developers and why the tool is required, then shows how to fix the problem using React tooling.",
		yearOfPublication: 2018,
		numberOfPages: 343,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-16-tooling/9781788835015/",
		tags: ["testing", "flow"],
	},
	{
		title: "React: Tools & Resources",
		authors: [
			"Ahmed Bouchefra",
			"Jack Franklin",
			"Swizec Teller",
			"Michael Wanyoike",
			"Manjunath M",
		],
		image: "https://www.oreilly.com/library/cover/9781492065364/",
		description:
			"This book is a collection of in-depth guides to some some of the tools and resources most used with React, such as Jest and React Router, as well as a discussion about how React works well with D3, and a look at Preact, a lightweight React alternative.",
		yearOfPublication: 2017,
		numberOfPages: 70,
		level: "intermediate",
		href: "https://www.oreilly.com/library/view/react-tools/9781492065364/",
		tags: ["testing", "routing", "redux"],
	},
	{
		title: "ReactJS by Example",
		authors: ["Vipul A M", "Prathamesh Sonpatki"],
		image: "https://www.oreilly.com/library/cover/9781785289644/",
		description:
			"An easy-to-follow program to learn ReactJS with the help of real world projects. Each topic is explained within the context of a project and provides plenty of tips and tricks for using ReactJS.",
		yearOfPublication: 2016,
		numberOfPages: 268,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/reactjs-by-example/9781785289644/",
		tags: ["projects", "redux"],
	},
	{
		title: "React: Building Modern Web Applications",
		authors: [
			"Jonathan Hayward",
			"Artemij Fedosejev",
			"Narayan Prusty",
			"Adam Horton",
			"Ryan Vice",
			"Ethan Holmes",
			"Tom Bray",
		],
		image: "https://www.oreilly.com/library/cover/9781786462268/",
		description:
			"Consisting of five separate modules, journey from the fundamentals of reactive programming to the exciting possibilities of React Native. Each module builds on each other, helping you to incrementally develop your skills and knowledge.",
		yearOfPublication: 2016,
		numberOfPages: 991,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/react-building-modern/9781786462268/",
		tags: ["testing"],
	},
	{
		title: "Introduction to React",
		authors: ["Cory Gackenheimer"],
		image: "https://www.oreilly.com/library/cover/9781484212455/",
		description:
			"Get to know the React API and it’s specific JavaScript extension, JSX, which makes authoring React components easier and maintainable. You will also learn how to test your React applications and about the tools you can use while building.",
		yearOfPublication: 2015,
		numberOfPages: 157,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/introduction-to-react/9781484212455/",
		tags: [],
	},
	{
		title: "Pro React",
		authors: ["Cássio de Sousa Antonio"],
		image: "https://www.oreilly.com/library/cover/9781484212608/",
		description:
			"This book teaches you how to successfully structure increasingly complex front-end applications and interfaces. You'll explore the React library in depth, as well as detailing additional tools and libraries in the React ecosystem, enabling you to create complete, complex applications.",
		yearOfPublication: 2015,
		numberOfPages: 341,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/pro-react/9781484212608/",
		tags: [],
	},
	{
		title: "The Road to React",
		authors: ["Robin Wieruch"],
		href: "https://www.roadtoreact.com/",
		image: "https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX384_BO1,204,203,200_.jpg",
		description: "In this book you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature.",
		yearOfPublication: 2021,
		numberOfPages: 250,
		level: "beginner",
		tags: ["testing", "typescript", "projects"]
	},
	{
		title: "React Explained",
		authors: ["Zac Gordon"],
		href: "https://www.ostraining.com/books/react/",
		image: "https://www.ostraining.com/cdn/images/books-club/react.jpg",
		description: "React Explained is a fun and enjoyable introduction to React, which is the Javascript framework of choice for WordPress, Drupal, Magento, and thousands of developers.",
		yearOfPublication: 2018,
		numberOfPages: 212,
		level: "beginner",
		tags: ["projects", "authentication"]
	}
]
