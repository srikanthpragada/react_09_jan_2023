import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { AUTHORS_URL } from './constants'

export default function ListAuthors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        $.get(AUTHORS_URL,
            (result) => {
                setAuthors(result)
            }
        ) // get
    }, []
    )

    return (
        <>
            <h3>Authors</h3>
            <div className="row align-items-center justify-content-center">
                {authors.map((author) =>
                    <div key={author.id} 
                        className="col-lg-3 border bg-light m-1" >
                        <div className="p-2 text-center">
                            <h5> {author.name} </h5>
                            <h5> {author.email}</h5>
                        </div>
                    </div>
                )
                }
            </div>

        </>
    )
}
