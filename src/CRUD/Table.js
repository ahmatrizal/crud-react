import React from 'react'
import { Table } from 'react-bootstrap'

const TableComponent = ({ makanans }) => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            </tr>
        </thead>
        <tbody>
            {makanans.map((makanan, index) => {
                return(
            <tr>
            <td>{index + 1}</td>
            <td>{makanan.nama}</td>
            <td>Rp {makanan.harga}</td>
            <td>{makanan.deskripsi}</td>
            </tr>

                )
            })}
        </tbody>
        </Table>
    )
}

export default TableComponent

