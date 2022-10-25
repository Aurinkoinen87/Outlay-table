import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, dataSelector } from '../redux/slices/dataSlice'
import { AppDispatch } from '../redux/store'
import styles from './Table.module.scss'



// {
//   "child": [
//     null
//   ],
//   "equipmentCosts": 0,
//   "estimatedProfit": 0,
//   "id": 0,
//   "machineOperatorSalary": 0,
//   "mainCosts": 0,
//   "materials": 0,
//   "mimExploitation": 0,
//   "overheads": 0,
//   "rowName": "string",
//   "salary": 0,
//   "supportCosts": 0,
//   "total": 0
// }




export default function Table() {

  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector(dataSelector)

  const { id } = useParams()

    
  useEffect(()=> {
    dispatch(fetchData())
  },[])

  return (
    <div className={styles.table_screen}>
      <table>

        <caption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. {id}</caption>

        <tr>
          <th>Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

    </div>
  )
}
