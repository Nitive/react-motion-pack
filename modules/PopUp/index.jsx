import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import { wrapper, content } from './styles'


export default class PopUp extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		show: PropTypes.bool,
		position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
		className: PropTypes.string,
		style: PropTypes.object,
	}

	static defaultProps = {
		show: true,
		position: 'fixed',
	}


	render() {
		const {
			show,
			style,
			className,
			position,
		} = this.props

		const enterConfig = [120, 11]
		const leaveConfig = [300, 28]

		const getContent = interpolated => (
				<div style={{...wrapper, position}}>
					<div
						{...this.props}
						className={className}
						style={{...content, ...style, ...{transform: `scale(${interpolated.scale})`}}}
					>
						{this.props.children}
					</div>
				</div>
		)

		return (
			<Motion
				defaultStyle={{scale: spring(show ? 0 : 1)}}
				style={{scale: spring(show ? 1 : 0, show ? enterConfig : leaveConfig)}}
			>
				{interpolated => getContent(interpolated)}
			</Motion>
		)
	}
}
