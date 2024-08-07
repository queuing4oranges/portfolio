import React from 'react'

export function Ticked({ width, height, fill }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='Iconly/Curved/Tick Square'>
				<g id='Tick Square'>
					<path
						id='Stroke 1'
						d='M8.44019 12L10.8142 14.373L15.5602 9.62695'
						stroke='#130F26'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						id='Stroke 2'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2.74976 12C2.74976 18.937 5.06276 21.25 11.9998 21.25C18.9368 21.25 21.2498 18.937 21.2498 12C21.2498 5.063 18.9368 2.75 11.9998 2.75C5.06276 2.75 2.74976 5.063 2.74976 12Z'
						stroke='#130F26'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
			</g>
		</svg>
	)
}

