import React from 'react'
import '../styles/App.scss'

const header: React.FC = () => {
	const logoMoovin =
		'https://www.moovin.com.br/wp-content/uploads/2020/12/logo@2x-min.png'

	return (
		<header>
			<img alt='Logo da Moovin' src={logoMoovin} />
		</header>
	)
}

export default header
