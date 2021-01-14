import React from 'react'

const makanans = [
  {
    nama : "soto",
    harga : 12000
  },
  {
    nama : "bakso",
    harga : 15000
  },
  {
    nama : "bubur",
    harga : 8000
  },
  {
    nama : "nasi goreng",
    harga : 10000
  },

]

//reduce
const totalBayar = makanans.reduce((totalHarga, makanan) => totalHarga + makanan.harga
, 0)

const App = () => {
  
  return (
    <div>
      <h2>map</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>{index+1} . {makanan.nama} - Harga : {makanan.harga}</li>
        ))}
      </ul>

      <h2>Filter diatas 10000</h2>
        <ul>
        {makanans.filter((makanan) => (makanan.harga > 10000)).map((makanan, index) => (
          <li>{index+1} . {makanan.nama} - Harga : {makanan.harga}</li>
        ))}
      </ul>
      <h3>Total Harga : {totalBayar}</h3>
    </div>
  )
}

export default App

