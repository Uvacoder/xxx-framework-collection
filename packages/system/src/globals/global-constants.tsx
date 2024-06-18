import React from 'react';
import { type LinkCardProps } from '@framework/system/src/components/landing/link-card';
import { AngularIcon } from '../icons/angular-icon';
import { QwikIcon } from '../icons/qwik-icon';
import { NodejsIcon } from '../icons/nodejs-icon';
import { ReactIcon } from '../icons/react-icon';
import { SolidJSIcon } from '../icons/solidjs-icon';
import { SvelteIcon } from '../icons/svelte-icon';
import { VueIcon } from '../icons/vue-icon';
import { GraphQLIcon } from '../icons/graphql-icon';
import { DenoIcon } from '../icons/deno-icon';

export const FRAMEWORK_RESOURCES = (bigSize = false): LinkCardProps[] => [
	{
		title: 'Angular Resources',
		href: 'https://angular.xxx123.vercel.app/',
		Icon(props) {
			return <AngularIcon {...props} />;
		},
		backgroundColor: '#C3002F',
		bigSize,
	},
	{
		title: 'React Resources',
		href: 'https://react.xxx123.vercel.app/',
		Icon(props) {
			return <ReactIcon {...props} />;
		},
		backgroundColor: '#00BCDA',
		bigSize,
	},
	{
		title: 'Vue Resources',
		href: 'https://vue.xxx123.vercel.app/',
		Icon(props) {
			return <VueIcon {...props} />;
		},
		backgroundColor: '#41B883',
		bigSize,
	},
	{
		title: 'Qwik Resources',
		href: 'https://qwik.xxx123.vercel.app/',
		Icon(props) {
			return <QwikIcon {...props} />;
		},
		backgroundColor: '#AC7EF4',
		bigSize,
	},
	{
		title: 'SolidJS Resources',
		href: 'https://solidjs.xxx123.vercel.app/',
		Icon(props) {
			return <SolidJSIcon {...props} />;
		},
		backgroundColor: '#446b9e',
		bigSize,
	},
	{
		title: 'GraphQL Resources',
		href: 'https://graphql.xxx123.vercel.app/',
		Icon(props) {
			return <GraphQLIcon {...props} />;
		},
		backgroundColor: '#E10098',
		bigSize,
	},
	{
		title: 'NodeJS Resources',
		href: 'https://nodejs.xxx123.vercel.app/',
		Icon(props) {
			return <NodejsIcon {...props} />;
		},

		backgroundColor: '#539e43',
		bigSize,
	},
	{
		title: 'Svelte Resources',
		href: 'https://svelte.xxx123.vercel.app/',
		Icon(props) {
			return <SvelteIcon {...props} />;
		},
		backgroundColor: '#ff3e00',
		bigSize,
	},

	{
		title: 'Deno Resources',
		href: 'https://deno.xxx123.vercel.app/',
		Icon(props) {
			return <DenoIcon {...props} />;
		},
		backgroundColor: '#12124B',
		bigSize,
	},
];
