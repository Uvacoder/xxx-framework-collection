import classNames from "classnames"
import React from "react"
import {
	featuredLibrariesStyle,
	featuredLibrariesHeadingStyle,
	featuredLibrariesListStyle,
	featuredLibrariesViewAllStyle,
} from "./featured-libraries.css"
import { Library } from "../../models/library"
import { LibraryCard } from "../cards/library-card"
import { ComparisonBox } from "./comparison-box"
import { generateRandomIndex } from "./utils"

export interface FeaturedLibrariesProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
	libraryTags: string[]
}

export function FeaturedLibraries({
	children,
	className,
	libraries,
	libraryTags,
	...props
}: FeaturedLibrariesProps) {
	const indices: number[] = []
	while (indices.length < 4) {
		const num = generateRandomIndex(libraries.length)
		if (!indices.includes(num)) indices.push(num)
	}
	const randomLibraries: Library<string>[] = indices.map((i) => libraries[i])
	return (
		<div className={classNames(className, featuredLibrariesStyle)} {...props}>
			<h2 className={featuredLibrariesHeadingStyle}>
				Featured React Libraries
			</h2>
			<div className={featuredLibrariesListStyle}>
				<>
					{randomLibraries.map((library, i) => (
						<LibraryCard
							key={`featured-library-${i}`}
							library={library}
							headingTag="h3"
							onTagClick={() => {
								return null
							}}
						/>
					))}
					<ComparisonBox
						style={{ gridArea: "compare" }}
						libraryTags={libraryTags}
					/>
				</>
			</div>
			<a href="/categories/libraries" className={featuredLibrariesViewAllStyle}>
				View all libraries
			</a>
		</div>
	)
}