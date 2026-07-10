import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewAllCars = () => {
    const [data,chageData]=useState([])
    const fetchData = () =>{
    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
        (Response) => {
            chageData(Response.data)
        }
    ).catch()
}

useEffect(
    () =>{
        fetchData()
    },[]
)
  return (
    <div>
        <NavigationBar/>
        <h1><center>View All Cars</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                    {data.map(
                        (value,index) => {
                            return(
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="card">
                                <img src={value.image}
                                    alt={value.model}
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}/>  
                                        <div className="card-body">
                                        <h5 className="card-title">AutoZone</h5>
                                        <p className="card-text">
                                            <strong>Car ID:</strong> {value.carId} <br />
                                            <strong>Brand:</strong>{value.brand}<br />
                                            <strong>Model:</strong> {value.model} <br />
                                            <strong>Fuel Type:</strong> {value.fuelType} <br />
                                            <strong>Transmission:</strong>{value.transmission}<br />
                                            <strong>Price:</strong> {value.price} <br />
                                            <strong>Color:</strong>{value.color} <br />
                                            <strong>Manufacturing Year:</strong> {value.year}<br />
                                            <strong>Description:</strong> {value.description}<br /></p>
                                        <button className="btn btn-primary">
                                            View Details
                                        </button>
                                        </div>
                                    </div>
                                    </div>)
                        }
                    )}
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllCars