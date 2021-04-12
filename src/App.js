import { useState } from 'react';
import './App.css';

const startbook = {
  Title: '', Author: '', Price: ''
};
function App() {
  
    const [book, setBook] = useState(startbook);
    const [showBooks, setshowBooks] = useState([]);

    function Bookinput(event){
      const { name, value} = event.target;
      setBook((prevBook) => {
        return {
          ...prevBook,
          [name]: value
        }
      })
    } 

    function onBooksubmit(event){
      event.preventDefault();
      setshowBooks((setBook) => {
        const newBook = {...book};
        newBook.id = Date.now().toString();
        return [newBook, ...setBook]
      })
      setBook(startbook);

    }
    function onbookdelete(bookID){
      setshowBooks((setBook) =>{
        return setBook.filter((Book) =>{
          return Book.id !== bookID;
        });
      });
    }

    const bookshow = showBooks.map((Book ,index) => {
      return (
        <tr >
          <td>{Book.Title}</td>
          <td >{Book.Author}</td>
          <td>{Book.Price}</td>
          <td><button onClick={() => {onbookdelete(Book.id)}} ><span className="material-icons">delete</span></button></td>

        </tr>
      )
    })

  return (
    <div className="App">
      <div className='container'>
      <form onSubmit={onBooksubmit}>
      <div className='head-box'>
          <p> Add New Book</p>
      </div>
      <div className="body-box">
        <div className='content'>

          <p>Title :</p>
          <div className='editinput'>

          <input type='text' name="Title" value={book.Title} onChange={Bookinput}/>
          </div>

          <p>Author :</p>
          <div className='editinput'>

          <input type='text' name="Author" value={book.Author} onChange={Bookinput}/>
          </div>
          <p>Price :</p>
          <div className='editinput'>

          <input type='text' name="Price" value={book.Price} onChange={Bookinput}/>
          </div>
          <p>
          <button className='btn-sub' type='submit'>Add Book</button>
          </p>
        </div>
      </div>

      </form>
      
      </div>
      <div className='container'>
        <div className='head-box'>
          <p>
            Book List
          </p>
        </div>
      <table className='table'>
        <tr>
          <td><b>Title</b></td>
          <td><b>Author</b></td>
          <td><b>Price</b></td>
          <td>       </td>
          
        </tr>
        {bookshow}
      </table>
      </div>
    </div>
  );
}

export default App;
