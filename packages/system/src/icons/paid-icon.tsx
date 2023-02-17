import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const PaidIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function PaidIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 18 18"
				fill="currentColor"
				ref={ref}
				{...props}
			>
				<path d="M9.00012 1.5C4.86012 1.5 1.50012 4.86 1.50012 9C1.50012 13.14 4.86012 16.5 9.00012 16.5C13.1401 16.5 16.5001 13.14 16.5001 9C16.5001 4.86 13.1401 1.5 9.00012 1.5ZM9.00012 15C5.69262 15 3.00012 12.3075 3.00012 9C3.00012 5.6925 5.69262 3 9.00012 3C12.3076 3 15.0001 5.6925 15.0001 9C15.0001 12.3075 12.3076 15 9.00012 15ZM9.23262 8.355C7.90512 8.0175 7.47762 7.65 7.47762 7.1025C7.47762 6.4725 8.07012 6.03 9.05262 6.03C10.0876 6.03 10.4776 6.525 10.5076 7.26H11.7901C11.7526 6.255 11.1376 5.3325 9.92262 5.0325V3.75H8.17512V5.0175C7.04262 5.2575 6.13512 5.9925 6.13512 7.125C6.13512 8.4675 7.25262 9.1425 8.88012 9.5325C10.3426 9.8775 10.6351 10.395 10.6351 10.935C10.6351 11.3325 10.3426 11.9775 9.06012 11.9775C7.86012 11.9775 7.38762 11.4375 7.32012 10.7475H6.03012C6.10512 12.0225 7.05012 12.7425 8.17512 12.975V14.25H9.93012V12.9975C11.0701 12.78 11.9701 12.1275 11.9776 10.92C11.9701 9.27 10.5526 8.7 9.23262 8.355Z" />
			</svg>
		)
	}
)
