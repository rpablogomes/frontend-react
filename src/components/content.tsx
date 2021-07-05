import React from 'react'
import '../styles/App.scss'

const list: React.FC = () => {

    return (
        <table className="content">
            <tr className="titleTable">
                <th>Titulo</th>
                <th>Conteúdo</th>
            </tr>
            <tr>
                <td>teste</td>
                <td>teste</td>
            </tr>
            <tr>
                <td>teste</td>
                <td>teste</td>
            </tr>

            
            {/* Loop será construído aqui 
           
            */}
        </table>
    )
}

export default list
