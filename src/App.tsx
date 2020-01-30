import * as React from 'react'
import './styles.css'
import Table from './Table'

export default function App() {
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]

  const data = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
    },
  ]

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  )
}
