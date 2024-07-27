import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const books = [
  {
    id: 1,
    title: 'Book One',
    category: 'Fiction',
    price: '$10',
    author: 'Author One',
    image: 'https://images.randomhouse.com/cover/9780593540480',
    available: true
  },
  {
    id: 2,
    title: 'Book Two',
    category: 'Non-Fiction',
    price: '$15',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/81jfDTSLQ9L.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 3,
    title: 'Book Three',
    category: 'Non-Fiction',
    price: '$15',
    author: 'Author Two',
    image: 'https://www.thoughtco.com/thmb/_akQQwYmnmgbzTjH6_fMZ-TqeKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Night-Circus-white-edtion-589ba2765f9b58819cd1d40b.jpg',
    available: true
  },
  {
    id: 4,
    title: 'Book Four',
    category: 'Non-Fiction',
    price: '$15',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/91lslnZ-btL.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 5,
    title: 'Book Five',
    category: 'Non-Fiction',
    price: '$15',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/81J6APjwxlL.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 6,
    title: 'Book Six',
    category: 'Non-Fiction',
    price: '$15',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/71-4MkLN5jL.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 7,
    title: 'Book Seven',
    category: 'Non-Fiction',
    price: '$50',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/713jIoMO3UL.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 8,
    title: 'Book Eight',
    category: 'Non-Fiction',
    price: '$25',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/81F90H7hnML.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 9,
    title: 'Book Nine',
    category: 'Non-Fiction',
    price: '$40',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/91JGwQlnu7L.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 10,
    title: 'Book Ten',
    category: 'Non-Fiction',
    price: '$350',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/81ICvbFe2+L.AC_UF1000,1000_QL80.jpg',
    available: true
  },
  {
    id: 11,
    title: 'Book Eleven',
    category: 'Non-Fiction',
    price: '$400',
    author: 'Author Two',
    image: 'https://m.media-amazon.com/images/I/71BCCd79xgL.AC_UF1000,1000_QL80.jpg',
    available: true
  },

  // Add more books as needed
];


   
const GlobalStyle = createGlobalStyle`
body {
  background-image: url('/src/assets/components/butterfly.jpg');
  background-size: contain;
  background-repeat: repeat;
}
`;


const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 6rem;
  color: black; /* Ensures text color in the container is black */
  padding-top: 75rem; /* Added padding to top to avoid navbar overlap */
`;

const Card = styled.div`
  border: 3px solid #ddd;
  background-color: rgba(233, 237, 201, 0.8); /* Semi-transparent background color */
  border-radius: 12px;
  margin: 1rem;
  width: 200px;
  height: 450px; /* Adjust height to fit all content */
  box-shadow:0 10px 20px rgba(37, 82, 52, 0.741), 0 6px 6px rgba(40, 72, 42, 0.889); ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px; /* Increased height to show image better */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed to 'contain' to ensure the image fits perfectly inside the card */
`;

const Info = styled.div`
  flex-grow: 1;
  text-align: center;
  margin: 0.2rem 0; /* Reduced margin to decrease spacing between fields */
`;

const Title = styled.h3`
  margin: 0.5rem 0; /* Reduced margin for title */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem; /* Added margin to create space between buttons and book info */
`;

const Button = styled.button`
  background-color: #606c38;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const HeartButton = styled.button`
  background: none;
  
  cursor: pointer;
  font-size: 1.7rem;
  color: ${props => (props.liked ? 'red' : '#606c38')};
`;


const Booklist = () => {
  const [likedBooks, setLikedBooks] = useState([]);

  const handleLike = (id) => {
    if (!likedBooks.includes(id)) {
      setLikedBooks([...likedBooks, id]);
    } else {
      setLikedBooks(likedBooks.filter(bookId => bookId !== id));
    }
  };

  const handleRentalRequest = (id) => {
    alert(`Rental request sent for book id: ${id}`);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {books.map((book) => (
          <Card key={book.id}>
            <ImageContainer>
              <Image src={book.image} alt={book.title} />
            </ImageContainer>
            <Info>
              <Title>{book.title}</Title>
              <p>{book.category}</p>
              <p>{book.price.startsWith('$') ? book.price : `$${book.price}`}</p>
              <p>{book.author}</p>
              <p>{book.available ? 'Available' : 'Checked Out'}</p>
            </Info>
            <ButtonContainer>
              <HeartButton onClick={() => handleLike(book.id)} liked={likedBooks.includes(book.id)} aria-label={`Like ${book.title}`}>
                {likedBooks.includes(book.id) ? <FaHeart /> : <FaRegHeart />}
              </HeartButton>
              <Button onClick={() => handleRentalRequest(book.id)} disabled={!book.available} aria-label={`Rent ${book.title}`}>
                Rent
              </Button>
            </ButtonContainer>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Booklist;
