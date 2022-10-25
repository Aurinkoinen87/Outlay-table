import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { outlayApi } from '../../api/application-api'
import { RowType } from '../../api/application-api'






type StateType = {
  data: RowType[]
  loading: 'idle' | 'pending' | 'succeeded'
}

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await outlayApi.getTreeRows()
    return response.data
  }
)

const initialState = {
  data: [
    {
      "child": [
        null
      ],
      "equipmentCosts": 0,
      "estimatedProfit": 0,
      "id": 0,
      "machineOperatorSalary": 0,
      "mainCosts": 0,
      "materials": 0,
      "mimExploitation": 0,
      "overheads": 0,
      "rowName": "string",
      "salary": 0,
      "supportCosts": 0,
      "total": 0
    }
  ],
  loading: 'idle', 
} as StateType


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading(state, action){
      state.loading = action.payload
    }
    },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if(action.payload.length){
      state.data = action.payload
      }
      state.loading = 'succeeded'
    })
    builder.addCase(fetchData.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = 'idle'
    })
  },
})

export const dataSelector = (state: RootState) => state.data



export const { setLoading } = dataSlice.actions

export default dataSlice.reducer