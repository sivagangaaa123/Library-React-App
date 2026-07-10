import React from 'react'
import NavigationBar from './NavigationBar'

const DeleteCar = () => {
  return (
    <div>
        <NavigationBar/>
        <h1><center>Delete Car</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 text-center">
                           <label htmlFor="" className="form-label">Car ID</label> 
                           <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteCar