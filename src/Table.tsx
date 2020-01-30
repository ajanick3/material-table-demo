import React from 'react'
import MaterialTable, { Column } from 'material-table'

interface RowData {
  name: string
  surname: string
  birthYear: number
  birthCity: number
}

interface Props {
  columns: Column<RowData>[]
  data: RowData[]
}

export default function Table(props: Props) {
  const { columns, data } = props
  if (columns.length !== Object.keys(data[0]).length) {
    console.log('not valid', columns.length, Object.keys(data[0]).length)
    return <div>fail</div>
  }
  return (
    <MaterialTable
      title="Editable Example"
      columns={columns}
      data={data}
      options={{
        sorting: true,
        // search: true,
        // filtering: true
      }}
    />
  )
}
