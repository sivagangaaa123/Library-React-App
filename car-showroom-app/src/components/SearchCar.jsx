import React from 'react'
import NavigationBar from './NavigationBar'

const SearchCar = () => {
  return (
    <div>
        <NavigationBar/>
        <h1><center>Search Car</center></h1>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="row g-3">
                        <div className="col col-12 text-center">
                            <label htmlFor="" className="form-label">Car ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-warning">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCar