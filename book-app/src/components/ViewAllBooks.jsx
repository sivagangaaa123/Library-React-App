import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllEmployee = () => {
   const [data,changeData]=useState(
        [
      {"title": "The Alchemist","author": "Paulo Coelho","price": 450,"image": "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"},
      {"title": "Wings of Fire","author": "A.P.J. Abdul Kalam", "price": 350,"image": "https://m.media-amazon.com/images/I/71KKZlVjbwL.jpg"},
      {"title": "Harry Potter","author": "J.K. Rowling","price": 600,"image": "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"},
      {"title": "The Hobbit","author": "J.R.R. Tolkien","price": 550,"image": "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"},
      {"title": "Rich Dad Poor Dad","author": "Robert Kiyosaki","price": 400,"image": "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"},
      {"title": "Atomic Habits","author": "James Clear","price": 500,"image": "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"},
      {"title": "Think and Grow Rich","author": "Napoleon Hill","price": 375,"image": "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"},
      {"title": "The Psychology of Money","author": "Morgan Housel","price": 480,"image": "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"},
      {"title": "Ikigai","author": "Hector Garcia","price": 420,"image": "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"},
      {"title": "The Power of Now","author": "Eckhart Tolle","price": 390,"image": "https://m.media-amazon.com/images/I/61Ij8nLooNL.jpg"}
    ]
  )
  return (
    <div>
      <NavigationBar />

      <div className="container mt-4">
        <div className="row border rounded-4 p-5 border-2 border-warning">
          <div className="col-12">
            <div className="row">

             
              {data.map(
                (value,index) => {
                  return (
 <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
                <div className="card h-100">
                  <img src={value.image} className="card-img-top" alt="Book 1" height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title:<strong>{value.title}</strong></h5>
                    <p className="card-text">Author:<strong>{value.author}</strong></p>
                    <p className="card-text">Price:<strong>{value.price}</strong> </p>
                    <button className="btn btn-success w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
                  )
                }
              )}

      


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewAllEmployee
