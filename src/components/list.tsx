import React from 'react'
import '../styles/App.scss'

import Title from './title'

const list: React.FC = () => {

	return (
		<div className="list">
			<Title />
			<div >
				{/* Loop será construído aqui */}
			</div>

		</div>
	)
}

export default list
