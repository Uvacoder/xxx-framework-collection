import { Story, Meta } from "@storybook/react"
import { exampleTags } from "../../util/example-content"
import { TagFilter as TagFilterComponent, TagFilterProps } from "./tag-filter"

export default {
	title: "Tag Filter",
	component: TagFilterComponent,
	args: {
		options: new Set(exampleTags),
		value: ["accessibility"],
	},
	argTypes: {
		onUpdate: { action: "update" },
	},
} as Meta

const Template: Story<TagFilterProps<string>> = (args) => (
	<TagFilterComponent {...args} />
)

export const TagFilter = Template.bind({})
