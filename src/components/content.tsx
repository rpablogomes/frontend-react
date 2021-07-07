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
type Page = number

const List: React.FC = () => {

    const token = "32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee"

    const [data, setData] = useState<Data[]>([])
    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        pages: 0,
        page: 0,
        limit: 0
    })

    const page = 1 // initial value

    const getData = useCallback(async (page) => {
        const response = await axios.get(
            `https://gorest.co.in/public-api/posts?_format=json&access-token=${token}}&page=${page || 1}`
        );
        setPagination(response.data.meta.pagination)
        setData(response.data.data);
    }, []);

    useEffect(() => {
        getData(page);
    }, [getData]);

    useEffect(() => {
        console.log(pagination)
    }, [pagination]);

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
                {
                    // Lógica da página 1
                    (pagination.page === 1 &&
                        <div className="pagination">
                            <div><img src="/img/left.png" alt="" className="seta" /></div>
                            <div className="paginationIndice">
                                <div className="selectedIndice">{pagination.page}</div>
                                <div onClick={() => getData(pagination.page + 1)}>{pagination.page + 1}</div>
                                <div onClick={() => getData(pagination.page + 2)}>{pagination.page + 2}</div>
                            </div>
                            <div onClick={() => getData(pagination.page + 1)}><img src='/img/right.png' alt="" className="seta" /></div>
                        </div>)

                    ||
                    // Lógica da última pagina
                    (pagination.page === pagination.pages &&
                        <div className="pagination">
                            <div onClick={() => getData(pagination.page - 1)}><img src="/img/left.png" alt="" className="seta" /></div>
                            <div className="paginationIndice">
                                <div onClick={() => getData(pagination.page - 1)}>{pagination.page - 1}</div>
                                <div className="selectedIndice">{pagination.page}</div>
                                <div></div>
                            </div>
                            <div><img src='/img/right.png' alt="" className="seta" /></div>
                        </div>)
                    ||
                    // Lógica da página
                    (<div className="pagination">
                        <div onClick={() => getData(pagination.page - 1)}><img src="/img/left.png" alt="" className="seta" /></div>
                        <div className="paginationIndice">
                            <div onClick={() => getData(pagination.page - 1)}>{pagination.page - 1}</div>
                            <div className="selectedIndice">{pagination.page}</div>
                            <div onClick={() => getData(pagination.page + 1)}>{pagination.page + 1}</div>
                        </div>
                        <div onClick={() => getData(pagination.page + 1)}><img src='/img/right.png' alt="" className="seta" /></div>
                    </div>)
                }
            </div>

        </div>

    )
}

export default List
