import React from 'react'
import { Link } from "react-router-dom"
import styles from './Header.module.scss'
import '../App.scss'
import SvgSelector from './SvgSelector'

export default function Header() {

 
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <SvgSelector name={'menu'} />
        </li>
        <li>
          <SvgSelector name={'arrow-back'} />     
        </li>
        <li className={styles.btn_active}>
        <Link to={'/'}>
           Просмотр
        </Link>
        </li>
        <li>
           Управление
        </li>
      </ul>
    </header>
  )
}
