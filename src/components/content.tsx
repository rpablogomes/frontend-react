import React, { useState, useEffect, useCallback } from 'react'
import axios from "axios";
import '../styles/App.scss'

type Data = {
    title: string,
    body: string,
}

type Pagination = {
    total: number,
    pages: number, 
    page: number, 
    limit: number,
}

const List: React.FC = () => {

    const token = "32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee"

    const [data, setData] = useState<Data[]>([])
    const [pagination, setPagination] = useState<Pagination>()

    const getData = useCallback(async () => {
        const response = await axios.get(
            `https://gorest.co.in/public-api/posts?_format=json&access-token=${token}}&page=$1`
        );
        setPagination(response.data.meta.pagination)
        setData(response.data.data);
    }, []);

    useEffect(() => {
        console.log(pagination)
    }, [pagination]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="content">
            <table >
                <tr className="titleTable">
                    <th>Titulo</th>
                    <th>Conteúdo</th>
                </tr>
                {
                    data.map(e => {
                        return (
                            <tr className="tableItems">
                                <td>{e.title}</td>
                                <td>{e.body}</td>
                            </tr>)

                    }
                    )
                }

            </table>
            <div className="bottom">
            {!!pagination && <div >Exibindo {pagination.limit} postagens</div>}
            <div className="pagination">1 2 3 4 5 6 teste</div>
            </div>

        </div>

    )
}

export default List
