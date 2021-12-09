import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { exampleCodeExamples } from "../../util/example-content"
import {
	CodeExampleCard as CodeExampleCardComponent,
	CodeExampleCardProps,
} from "./code-example-card"

export default {
	title: "Cards/Code Example Card",
	component: CodeExampleCardComponent,
	args: {
		headingTag: "h1",
	},
	argTypes: {
		onTagClick: {
			action: "onTagClick",
		},
	},
} as Meta

const Template: Story<CodeExampleCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "titleFirstCardGrid",
				gap: 16,
			})}
		>
			{exampleCodeExamples.map((codeExample) => (
				<CodeExampleCardComponent
					key={codeExample.title}
					{...args}
					codeExample={codeExample}
				/>
			))}
		</div>
	</div>
)

export const CodeExampleCard = Template.bind({})