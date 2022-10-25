import { default as axios } from 'axios'

const URL = 'http://185.244.172.108:8081/v1/outlay-rows/entity'

const createEntity = async () => {
  const response = await axios.post(`${URL}/create`)
  localStorage.setItem('baseId', response.data.id)
  return response.data.id
}


const baseId = localStorage.getItem('baseId') || createEntity() || null


const instance = axios.create({
    baseURL: `${URL}/${baseId}/row/`,
    headers: {
      'Content-Type': 'application/json'
    }
})

export type RowType = {
  "child": number[] | null[]
  "equipmentCosts": number
  "estimatedProfit": number
  "id": number
  "machineOperatorSalary": number
  "mainCosts": number
  "materials": number
  "mimExploitation": number
  "overheads": number
  "rowName": string
  "salary": number
  "supportCosts": number
  "total": number
}


export const outlayApi = {
    getTreeRows() {
        return instance.get<RowType[]>('list')
    },
    // deleteTodoList(todolistId: string) {
    //     return instance.delete<ResponseType>(`/todo-lists/${todolistId}`)
    // },
    // updateTodolist(todolistId: string, title: string) {
    //     return instance.put<ResponseType>(`/todo-lists/${todolistId}`, { title })
    // },
    // createTask(todolistId: string, title: string) {
    //     return instance.post<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistId}/tasks`, { title })
    // },
    // getTasks(todolistId: string) {
    //     return instance.get<TaskCommonType>(`/todo-lists/${todolistId}/tasks`)
    // },
    // deleteTask(todolistId: string, taskId: string) {
    //     return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    // },
    // updateTaskStatus(todolistId: string, taskId: string, model: TaskModelType) {
    //     return instance.put<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
    // }
}