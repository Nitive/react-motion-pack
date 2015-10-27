import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

const configs = {
	down: {
		origin: 'center top',
		axis: 'X',
		coef: -1,
	},
	up: {
		origin: 'center bottom',
		axis: 'X',
		coef: 1,
	},
	left: {
		origin: 'left center',
		axis: 'Y',
		coef: 1,
	},
	right: {
		origin: 'right center',
		axis: 'Y',
		coef: -1,
	},
}

export default class Plate extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		type: PropTypes.oneOf(['in', 'out']),
		side: PropTypes.oneOf(['left', 'right', 'up', 'down']),
		move: PropTypes.oneOf(['pull', 'push']),
		perspective: PropTypes.number,
	}

	static defaultProps = {
		type: 'in',
		side: 'down',
		move: 'pull',
		perspective: 300,
	}

	render() {
		const { type, side, move, perspective, children } = this.props

		const config = configs[side] || configs.down

		const getContent = ({ rotate }) => {
			const style = {
				backfaceVisibility: 'hidden',
				transformStyle: 'preserve-3d',
				transformOrigin: config.origin,
				transform: `perspective(${perspective}px)rotate${config.axis}(${rotate}deg)`,
			}
			return React.cloneElement(children, { style })
		}

		const hideStyle = {
			rotate: spring(120 * config.coef * (move !== 'push' ? 1 : -1)),
		}

		const showStyle = {
			rotate: spring(0, [80, 6]),
		}

		return (
			<Motion
				defaultStyle={type !== 'out' ? hideStyle : showStyle}
				style={type !== 'out' ? showStyle : hideStyle}
			>
				{interpolated => getContent(interpolated)}
			</Motion>
		)
	}
}
