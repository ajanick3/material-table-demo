import * as React from 'react'
import './styles.css'
import Table from './Table'
import { columns, data } from './sampleData'

export default function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  )
}
