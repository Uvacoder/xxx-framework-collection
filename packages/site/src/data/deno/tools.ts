import { Tool } from "@framework/system/src/models/tool"

export const toolTags = ["vscode"] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Deno VSCode",
		description:
			"This extension adds support for using Deno with Visual Studio Code, powered by the Deno language server",
		author: "DenoLand",
		href: "https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno",
		image:
			"https://denoland.gallerycdn.vsassets.io/extensions/denoland/vscode-deno/3.14.1/1668177865958/Microsoft.VisualStudio.Services.Icons.Default",
		tags: ["vscode"],
	},
]
