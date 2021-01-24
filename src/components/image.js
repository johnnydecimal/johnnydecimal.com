/* eslint-disable react/prop-types */
import React from "react"

export const Image = ({
	src,
	alt,
	caption = null,
	height = null,
	width = null,
}) => (
	<div className="text-center">
		<div className="inline-block w-auto max-w-xl p-2 mx-auto mb-2 border border-gray-500 rounded-sm shadow-md">
			<img src={src} alt={alt} height={height} width={width} />
			{caption ? (
				<div className="mt-2 text-xs italic text-center text-gray-600">
					{caption}
				</div>
			) : null}
		</div>
	</div>
)
