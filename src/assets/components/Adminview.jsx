import React, { useState, useEffect } from 'react';
import './Adminview.css';

function Adminview() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', status: 'available' });
 
  useEffect(() => {
    // Fetch the list of books from the backend API
    // For demonstration, using a static list
    setBooks([
      { id: 1, title: 'Book 1', author: 'Author 1', status: 'available' },
      { id: 2, title: 'Book 2', author: 'Author 2', status: 'rented' },
      // Add more books as needed
    ]);

    // Fetch the list of users from the backend API
    // For demonstration, using a static list
    setUsers([
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
      // Add more users as needed
    ]);
  }, []);

  const handleStatusChange = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, status: book.status === 'available' ? 'rented' : 'available' } : book
    ));
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
    setNewBook({ title: '', author: '', status: 'available' });
  };

  return (
    <div className="admin-view">
      <h2 className="Booklist">☆.´ . ☽¸.☆, 𝗕𝗼𝗼𝗸 𝗟𝗶𝘀𝘁 ,☆.¸☽ . ´.☆</h2>
      <div className="book-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.status}</td>
                <td>
                  <button onClick={() => handleStatusChange(book.id)}>
                    {book.status === 'available' ? 'Mark as Rented' : 'Mark as Available'}
                  </button>
                  <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className='addbooks'>Add New Book</h2>
      <form onSubmit={handleAddBook} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input 
            type="text" 
            value={newBook.title} 
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input 
            type="text" 
            value={newBook.author} 
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select 
            value={newBook.status} 
            onChange={(e) => setNewBook({ ...newBook, status: e.target.value })} 
          >
            <option value="available">Available</option>
            <option value="rented">Rented</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Add Book</button>
        </div>
      </form>

      <h2 className="Userlist">☆.´ . ☽¸.☆, 𝗨𝘀𝗲𝗿 𝗟𝗶𝘀𝘁 ,☆.¸☽ . ´.☆</h2>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminview;