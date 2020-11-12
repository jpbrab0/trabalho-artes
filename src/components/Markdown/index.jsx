import React from 'react'
import ReactMarkDown from 'react-markdown';
import './styles.css'

export default function Markdown(props) {
    return (
        <>
            <main>
                <ReactMarkDown source={props.source} allowDangerousHtml={true}/>
            </main>
            
        </>
    )
}