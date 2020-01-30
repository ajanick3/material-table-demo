import React from 'react'
import MaterialTable, { Column } from 'material-table'

interface Row {
  name: string
  surname: string
  birthYear: number
  birthCity: number
}

interface Props {
  columns: Column<Row>[]
  data: Row[]
}

export default function Table(props: Props) {
  const { columns, data } = props
  if (columns.length !== Object.keys(data[0]).length) {
    console.log('not valid')
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

// export default function MaterialTableDemo() {
//   // const columns = [
//   //   { title: "Name", field: "name" },
//   //   { title: "Surname", field: "surname" },
//   //   { title: "Birth Year", field: "birthYear", type: "numeric" },
//   //   {
//   //     title: "Birth Place",
//   //     field: "birthCity",
//   //     lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
//   //   }
//   // ];

//   // const data = [
//   //   { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
//   //   {
//   //     name: "Zerya Betül",
//   //     surname: "Baran",
//   //     birthYear: 2017,
//   //     birthCity: 34
//   //   }
//   // ];

//   return (
//     <>
//       <Table columns={columns} data={data} />
//     </>
//   );
// }
