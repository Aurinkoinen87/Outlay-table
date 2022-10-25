import React from 'react'
import SvgSelector from './SvgSelector'
import { Link } from "react-router-dom"
import styles from './NavItem.module.scss'

type PropsType = {
  name: string
  id: number
  current: number
  setCurrent:(arg:number)=> void
}

export default function NavItem({ name, id, current, setCurrent }:PropsType) {


  return (
        <li className={`${styles.nav_item} ${id === current? styles.nav_item_active : ''}`}
        onClick={()=> setCurrent(id)}>
          <Link to={`project/${id}`} >
            <span>
            <SvgSelector name={'tiles'} />
            </span>
            {name}
          </Link>
        </li>

  )
}
