import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"Servers",
	"Clients",
	"Schema Builders",
	"Combining Schemas",
	"Misc",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "DGS",
		author: "Netflix",
		gitHubRepo: "https://github.com/netflix/dgs-framework",
		npmPackage: "",
		href: "https://netflix.github.io/dgs/",
		description:
			"Build a full-featured GraphQL server with Java or Kotlin in record time",
		image: "https://netflix.github.io/dgs/images/logo--blue.svg",
		tags: ["Servers"],
	},
	{
		name: "Absinthe",
		author: "Christian Meunier & Mauro Gabriel Titimoli",
		gitHubRepo: "https://github.com/absinthe-graphql/absinthe",
		npmPackage: "",
		href: "http://absinthe-graphql.org/",
		description: "The GraphQL toolkit for Elixir",
		image: "https://github.com/absinthe-graphql.png",
		tags: ["Servers"],
	},
	{
		name: "GraphQL.js",
		author: "Meta",
		gitHubRepo: "https://github.com/graphql/graphql-js",
		npmPackage: "graphql",
		href: "https://graphql.org/graphql-js/",
		description:
			"The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.",
		image: "https://github.com/graphql.png",
		tags: ["Servers"],
	},
	{
		name: "Mercurius",
		author: "Pablo Sáez",
		gitHubRepo: "https://github.com/mercurius-js/mercurius",
		npmPackage: "mercurius",
		href: "https://mercurius.dev/",
		description: "Mercurius is a GraphQL adapter for Fastify",
		image: "https://github.com/mercurius-js.png",
		tags: ["Servers"],
	},
	{
		name: "Apollo Server",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/apollo-server",
		npmPackage: "@apollo/server",
		href: "https://www.apollographql.com/docs/apollo-server/",
		description:
			"Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.",
		image: "https://github.com/apollographql.png",
		tags: ["Servers"],
	},
	{
		name: "Helix",
		author: "Contra",
		gitHubRepo: "https://github.com/contra/graphql-helix",
		npmPackage: "graphql-helix",
		href: "https://www.graphql-helix.com/",
		description:
			"Build your own extensible and framework-agnostic GraphQL Server",
		image:
			"https://raw.githubusercontent.com/contra/graphql-helix/main/logo.svg",
		tags: ["Servers"],
	},
	{
		name: "Express-GraphQL",
		author: "Meta",
		gitHubRepo: "https://github.com/graphql/express-graphql",
		npmPackage: "express-graphql",
		href: "https://github.com/graphql/express-graphql",
		description:
			"Create a GraphQL HTTP server with any HTTP web framework that supports connect styled middleware, including Connect itself, Express and Restify.",
		image: "https://github.com/graphql.png",
		tags: ["Servers"],
	},
	{
		name: "GraphQL-Go",
		author: "graph-gophers",
		gitHubRepo: "https://github.com/graph-gophers/graphql-go",
		npmPackage: "",
		href: "https://github.com/graph-gophers/graphql-go",
		description:
			"The goal of this project is to provide full support of the GraphQL draft specification with a set of idiomatic, easy to use Go packages.",
		image: "https://github.com/graph-gophers.png",
		tags: ["Servers"],
	},
	{
		name: "Yoga",
		author: "Dotan Simha",
		gitHubRepo: "https://github.com/dotansimha/graphql-yoga",
		npmPackage: "graphql-yoga@three",
		href: "https://www.the-guild.dev/graphql/yoga-server",
		description:
			"Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience",
		image: "",
		tags: ["Servers"],
	},
	{
		name: "GraphQL .NET",
		author: "",
		gitHubRepo: "https://github.com/graphql-dotnet/graphql-dotnet",
		npmPackage: "",
		href: "https://graphql-dotnet.github.io/",
		description: "This is an implementation of Facebook's GraphQL in .NET.",
		image: "https://github.com/graphql-dotnet.png",
		tags: ["Servers"],
	},
	{
		name: "GraphQL Hooks",
		author: "NearForm",
		gitHubRepo: "https://github.com/nearform/graphql-hooks",
		npmPackage: "",
		href: "https://github.com/nearform/graphql-hooks",
		description: "Minimal hooks-first GraphQL client.",
		image: "graphql-hooks",
		tags: ["Clients"],
	},
	{
		name: "GraphQL-request",
		author: "Prisma Labs",
		gitHubRepo: "https://github.com/prisma-labs/graphql-request",
		npmPackage: "graphql-request",
		href: "https://github.com/prisma-labs/graphql-request",
		description:
			"Minimal GraphQL client supporting Node and browsers for scripts or simple apps",
		image: "",
		tags: ["Clients"],
	},
	{
		name: "React Query",
		author: "TanStack",
		gitHubRepo: "https://github.com/tanstack/query",
		npmPackage: "@tanstack/react-query",
		href: "https://tanstack.com/query/v4/",
		description:
			"Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte",
		image: "https://github.com/TanStack.png",
		tags: ["Clients"],
	},
	{
		name: "URQL",
		author: "Formidable",
		gitHubRepo: "https://github.com/FormidableLabs/urql",
		npmPackage: "urql",
		href: "https://formidable.com/open-source/urql/",
		description: "A highly customisable and versatile GraphQL client",
		image:
			"https://raw.githubusercontent.com/FormidableLabs/urql/main/packages/site/src/assets/sidebar-badge.svg",
		tags: ["Clients"],
	},
	{
		name: "Apollo Kotlin",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/apollo-kotlin",
		npmPackage: "",
		href: "https://www.apollographql.com/docs/kotlin/",
		description:
			"A strongly-typed, caching GraphQL client for Java and Kotlin multiplatform",
		image: "https://github.com/apollographql.png",
		tags: ["Clients"],
	},
	{
		name: "Apollo Client",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/apollo-client",
		npmPackage: "@apollo/client",
		href: "https://www.apollographql.com/docs/react/",
		description:
			"Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.",
		image: "https://github.com/apollographql.png",
		tags: ["Clients"],
	},
	{
		name: "Apollo iOS",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/apollo-ios",
		npmPackage: "",
		href: "https://www.apollographql.com/docs/ios/",
		description:
			"Apollo iOS is a strongly-typed, caching GraphQL client, written in Swift.",
		image: "https://github.com/apollographql.png",
		tags: ["Clients"],
	},
	{
		name: "Swift GraphQL",
		author: "Matic Zavadlal",
		gitHubRepo: "https://github.com/maticzav/swift-graphql",
		npmPackage: "",
		href: "swift-graphql.com",
		description:
			"SwiftGraphQL comes with a lightweight client that supports queries, mutations and subscriptions. And they all work the same way.",
		image: "",
		tags: ["Clients"],
	},
	{
		name: "Relay",
		author: "Meta",
		gitHubRepo: "https://github.com/facebook/relay",
		npmPackage: "react-relay",
		href: "https://relay.dev/",
		description: "The GraphQL client that scales with you.",
		image: "",
		tags: ["Clients"],
	},
	{
		name: "Graph Code Generator",
		author: "Dotan Simha",
		gitHubRepo: "https://github.com/dotansimha/graphql-code-generator",
		npmPackage: "@graphql-codegen/cli",
		href: "https://www.the-guild.dev/graphql/codegen",
		description:
			"GraphQL Code Generator is a tool that generates code out of your GraphQL schema.",
		image:
			"https://raw.githubusercontent.com/dotansimha/graphql-code-generator/master/logo.svg",
		tags: ["Schema Builders"],
	},
	{
		name: "gqlgen",
		author: "99designs",
		gitHubRepo: "https://github.com/99designs/gqlgen",
		npmPackage: "",
		href: "https://gqlgen.com/",
		description:
			"gqlgen is a Go library for building GraphQL servers without any fuss.",
		image:
			"https://user-images.githubusercontent.com/980499/133180111-d064b38c-6eb9-444b-a60f-7005a6e68222.png",
		tags: ["Schema Builders"],
	},
	{
		name: "Pothos",
		author: "Michael Hayes",
		gitHubRepo: "https://github.com/hayes/pothos",
		npmPackage: "@pothos/core",
		href: "https://pothos-graphql.dev/",
		description:
			"Pothos is a plugin based GraphQL schema builder for typescript.",
		image: "",
		tags: ["Schema Builders"],
	},
	{
		name: "GraphQL Java",
		author: "GraphQL Java",
		gitHubRepo: "https://github.com/graphql-java/graphql-java",
		npmPackage: "",
		href: "https://www.graphql-java.com/",
		description: "GraphQL server implementation for Java/JVM",
		image: "https://github.com/graphql-java.png",
		tags: ["Schema Builders"],
	},
	{
		name: "TypeGraphQL",
		author: "Michał Lytek",
		gitHubRepo: "https://github.com/MichalLytek/type-graphql",
		npmPackage: "type-graphql",
		href: "https://typegraphql.com/",
		description: "Modern framework for GraphQL API in Node.js",
		image:
			"https://raw.githubusercontent.com/MichalLytek/type-graphql/master/img/logo.png",
		tags: ["Schema Builders"],
	},
	{
		name: "Nexus",
		author: "GraphQL Nexus",
		gitHubRepo: "https://github.com/graphql-nexus/nexus",
		npmPackage: "nexus",
		href: "https://nexusjs.org/",
		description:
			"Declarative, code-first and strongly typed GraphQL schema construction for TypeScript & JavaScript.",
		image: "https://github.com/graphql-nexus.png",
		tags: ["Schema Builders"],
	},
	{
		name: "Strawberry",
		author: "Strawberry GraphQL",
		gitHubRepo: "https://github.com/strawberry-graphql/strawberry",
		npmPackage: "",
		href: "https://strawberry.rocks/",
		description:
			"Strawberry is a new GraphQL library for Python 3, inspired by dataclasses.",
		image: "https://github.com/strawberry-graphql.png",
		tags: ["Schema Builders"],
	},
	{
		name: "Genql",
		author: "Tommaso De Rossi",
		gitHubRepo: "https://github.com/remorses/genql",
		npmPackage: "@genql/cli",
		href: "https://genql.vercel.app/",
		description: "Generate your own graphql SDK in seconds",
		image: "",
		tags: ["Schema Builders"],
	},
	{
		name: "Sangria",
		author: "Sangria",
		gitHubRepo: "https://github.com/sangria-graphql/sangria",
		npmPackage: "",
		href: "https://sangria-graphql.github.io/",
		description: "Sangria is a scala GraphQL library.",
		image: "https://github.com/sangria-graphql.png",
		tags: ["Schema Builders"],
	},
	{
		name: "GraphQL Zeus",
		author: "GraphQL Editor",
		gitHubRepo: "https://github.com/graphql-editor/graphql-zeus",
		npmPackage: "graphql-zeus",
		href: "https://zeus.graphqleditor.com/",
		description: "Strongly Typed GraphQL from the team at GraphQL Editor",
		image:
			"https://raw.githubusercontent.com/graphql-editor/graphql-zeus/master/images/zeus-logo.png",
		tags: ["Schema Builders"],
	},
	{
		name: "Apollo Federation",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/federation",
		npmPackage: "",
		href: "https://www.apollographql.com/docs/federation/",
		description: "Combine GraphQL APIs into a unified supergraph",
		image: "https://github.com/apollographql.png",
		tags: ["Combining Schemas"],
	},
	{
		name: "Schema Stitching - GraphQL Tools",
		author: "Arda TANRIKULU",
		gitHubRepo: "https://github.com/ardatan/graphql-tools",
		npmPackage: "@graphql-tools/schema",
		href: "https://www.the-guild.dev/graphql/tools",
		description:
			"GraphQL Tools is a set of NPM packages and an opinionated structure for how to build a GraphQL schema and resolvers in JavaScript, following the GraphQL-first development workflow.",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "GraphQL Modules",
		author: "Uri Goldshtein",
		gitHubRepo: "https://github.com/Urigo/graphql-modules",
		npmPackage: "graphql-modules",
		href: "https://www.the-guild.dev/graphql/modules",
		description:
			"GraphQL Modules is a toolset of libraries and guidelines dedicated to create reusable, maintainable, testable and extendable modules out of your GraphQL server.",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "Hasura Data Federation",
		author: "Hasura",
		gitHubRepo: "https://github.com/hasura/graphql-engine",
		npmPackage: "",
		href: "https://hasura.io/docs/latest/data-federation/index/",
		description:
			"Hasura's data federation capabilities allow you to compose data from different sources that reside in independent data stores but are semantically related.",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "GraphQL Mesh",
		author: "Uri Goldshtein",
		gitHubRepo: "https://github.com/Urigo/graphql-mesh",
		npmPackage: "@graphql-mesh/cli",
		href: "https://www.the-guild.dev/graphql/mesh",
		description:
			"The Graph of Everything Federated architecture for any API service",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "WunderGraph",
		author: "WunderGraph",
		gitHubRepo: "https://github.com/wundergraph/wundergraph",
		npmPackage: "@wundergraph/sdk",
		href: "https://wundergraph.com/",
		description:
			"WunderGraph is the Serverless API Developer Platform with a focus on Developer Experience.",
		image: "https://github.com/wundergraph.png",
		tags: ["Combining Schemas"],
	},
	{
		name: "StepZen",
		author: "StepZen",
		gitHubRepo: "https://github.com/steprz/stepzen-schemas",
		npmPackage: "",
		href: "https://stepzen.com/",
		description:
			"Build GraphQL Easily Optimize & Scale GraphQL Automatically, The only declarative approach for federated access to data!",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "MuleSoft",
		author: "salesforce",
		gitHubRepo: "",
		npmPackage: "",
		href: "https://www.mulesoft.com/",
		description:
			"Deliver end-to-end automation and orchestrate across all of your systems to deliver connected customer experiences, faster.",
		image: "",
		tags: ["Combining Schemas"],
	},
	{
		name: "GraphQL ESLint",
		author: "Dimitri POSTOLOV",
		gitHubRepo: "https://github.com/B2o5T/graphql-eslint",
		npmPackage: "@graphql-eslint/eslint-plugin",
		href: "https://github.com/B2o5T/graphql-eslint",
		description:
			"This project integrates GraphQL and ESLint, for a better developer experience.",
		image: "https://github.com/B2o5T/graphql-eslint/raw/master/logo.png",
		tags: ["Misc"],
	},
	{
		name: "GraphQL Scalars",
		author: "Uri Goldshtein",
		gitHubRepo: "https://github.com/urigo/graphql-scalars",
		npmPackage: "graphql-scalars",
		href: "https://www.the-guild.dev/graphql/scalars",
		description: "Data Integrity and Strict Validations on GraphQL",
		image: "",
		tags: ["Misc"],
	},
	{
		name: "Apollo Data Sources",
		author: "Apollo GraphQL",
		gitHubRepo: "https://github.com/apollographql/apollo-server/tree/version-2",
		npmPackage: "apollo-server-<integration>",
		href: "https://www.apollographql.com/docs/apollo-server/v2/data/data-sources/",
		description:
			"Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API. ",
		image: "",
		tags: ["Misc"],
	},
	{
		name: "GraphQL Shield",
		author: "Dmitry Til",
		gitHubRepo: "https://github.com/dimatill/graphql-shield",
		npmPackage: "graphql-shield",
		href: "https://www.the-guild.dev/graphql/shield",
		description:
			"Implement your server permissions in a clear and deterministic way and let it guard access to your schema.",
		image:
			"https://github.com/dimatill/graphql-shield/raw/master/media/shield.jpg",
		tags: ["Misc"],
	},
	{
		name: "Envelop",
		author: "Laurin Quast",
		gitHubRepo: "https://github.com/n1ru4l/envelop",
		npmPackage: "@envelop/core",
		href: "https://www.the-guild.dev/graphql/envelop",
		description:
			"Develop and share plugins that are usable with any GraphQL server framework or schema.",
		image: "https://github.com/n1ru4l/envelop/raw/main/logo.png",
		tags: ["Misc"],
	},
	{
		name: "Dataloader",
		author: "Meta",
		gitHubRepo: "https://github.com/graphql/dataloader",
		npmPackage: "dataloader",
		href: "https://github.com/graphql/dataloader",
		description:
			"DataLoader is a generic utility to be used as part of your application's data fetching layer to provide a simplified and consistent API over various remote data sources such as databases or web services via batching and caching.",
		image: "https://github.com/graphql.png",
		tags: ["Misc"],
	},
	{
		name: "Prisma",
		author: "Prisma",
		gitHubRepo: "https://github.com/prisma/prisma",
		npmPackage: "@prisma/client",
		href: "https://www.prisma.io/graphql",
		description:
			"Simple Database Access in GraphQL servers Query data from MySQL, PostgreSQL & SQL Server databases in GraphQL with Prisma - a better ORM for JavaScript and TypeScript.",
		image: "https://github.com/prisma.png",
		tags: ["Misc"],
	},
]
