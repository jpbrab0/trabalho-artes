import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function HeaderPost(props) {
  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <header>
        <i class="material-icons"><Link to="/">arrow_back</Link></i>
        <h1>{props.title}</h1>
      </header>
    </>
  )
}