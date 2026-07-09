
import React from 'react'
import NavigationBar from './NavigationBar'

const ViewAllBooks = () => {
    const books = [
  {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 450,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      price: 350,
      image: "https://m.media-amazon.com/images/I/71KKZlVjbwL.jpg"
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      price: 600,
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 550,
      image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 400,
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 500,
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 375,
      image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 480,
      image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      title: "Ikigai",
      author: "Hector Garcia",
      price: 420,
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 390,
      image: "https://m.media-amazon.com/images/I/61Ij8nLooNL.jpg"
    }
  ]
    return (
        <div>
            <NavigationBar />
            <h1><center><u>View All Books</u></center></h1>
    <div className="row">
      {books.map((book, index) => (
        <div className="col-md-4 col-lg-3 mb-4" key={index}>
          <div className="card h-100">
             <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  height="250"
                />

            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>

              <p className="card-text">
                Author: {book.author}
                <br />
                Price: ₹{book.price}
              </p>
 
              <button className="btn btn-primary">
                Add to Cart
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}
export default ViewAllBooks
  


  

 

        