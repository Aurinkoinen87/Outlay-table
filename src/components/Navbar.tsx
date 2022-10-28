import React from 'react'
import SvgSelector from './SvgSelector'
import NavItem from './NavItem'
import styles from './Navbar.module.scss'



const names: string[] = ['По проекту', 'Объекты', 'МД', 'РТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения', 'Бюджет', 'Финансирования', 'Панорамы', 'Камеры', 'Поручения', 'Контрагенты']



export default function Navbar() {

  let[current, setCurrent] = React.useState<number | null>(null)

  return (
    <div className={styles.navbar} >

      <div className={styles.navbar__header} >
        <div className={styles.text_block}>
          <div className={styles.text_block__lg}>Название проекта</div>
          <div className={styles.text_block__sm}>Аббревиатура</div>
        </div>
        <SvgSelector name={'select-arrow-down'} />
      </div>

      <div className={styles.navbar__select} >
        <ul className={styles.navbar__select_list} >
          {names.map((n, i)=> <NavItem key={i} name={n} id={i} current={current} setCurrent={setCurrent}/>)}
        </ul>
      </div>
      
    </div>
  )
}
