import React from 'react'
import '../styles/App.scss'

import Title from './title'
import Content from './content'

const list: React.FC = () => {

	return (
		<div className="table">
			<Title />
			<Content />

		</div>
	)
}

export default list
