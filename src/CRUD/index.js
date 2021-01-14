import React, { Component } from 'react'
import Navbar from './Navbar'
import Table from './Table'
import Folmulir from './Folmulir'


export class CRUD extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            makanans : [],
            nama : '',
            harga : 0,
            deskripsi : '',
            id : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.id === ''){
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id : this.state.makanans + 1,
                        nama : this.state.nama,
                        harga : this.state.harga,
                        deskripsi : this.state.deskripsi
                    }
                ]
            })
        } else {
            const makananYangTidakDipilih = this.state.makanans
            .filter((makanan) => makanan.id !== this.state.id)
            .map((filterMakanan) => { 
                return filterMakanan
            })
            this.setState({
                makanans: [
                    ...makananYangTidakDipilih,
                    {
                        id : this.state.makanans + 1,
                        nama : this.state.nama,
                        harga : this.state.harga,
                        deskripsi : this.state.deskripsi
                    }
                ]
            })
            }


        this.setState({
            nama : '',
            harga : 0,
            deskripsi : '',
            id : ''
        })
    }

    editData = (id) => {
        const makananYangDipilih = this.state.makanans
        .filter((makanan) => makanan.id === id)
        .map((filterMakanan) => { 
            return filterMakanan
        })

        this.setState({
            nama: makananYangDipilih[0].nama,
            harga: makananYangDipilih[0].harga,
            deskripsi: makananYangDipilih[0].deskripsi,
            id: makananYangDipilih[0].id
        })

    }

    render() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Table makanans={this.state.makanans} editData={this.editData}/>
                <Folmulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        </div>
    )
}
}

export default CRUD
