import React from 'react'
import MaterialTable, { Column } from 'material-table'

interface RowData {
  [key: string]: string | number
}

interface Props {
  title?: string
  columns: Column<RowData>[]
  data: RowData[]
}

export default function Table(props: Props) {
  const {
    title = 'Table',
    columns,
    data,
    //
  } = props
  if (data.length && Object.keys(data[0]).length === columns.length) {
    return (
      <MaterialTable
        title={title}
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
  return null
}
