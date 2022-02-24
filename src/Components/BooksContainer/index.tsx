import axios from "axios";
import { BookCard } from "Components/BooksContainer/BookCard";
import { useEffect, useState } from "react";

import * as S from "./booksContainer";

const baseURL = "https://fakerapi.it/api/v1/books";

interface BookProps {
  image: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  published: string;
  id: string;
}

export const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBooks(response.data.data);
    });
  }, []);

  console.log(books);

  return (
    <S.Container>
      {books.map(
        ({
          image,
          title,
          author,
          description,
          genre,
          published,
          id,
        }: BookProps) => {
          return (
            <BookCard
              key={id}
              title={title}
              author={author}
              description={description}
              gender={genre}
              date={published}
              img={image}
            />
          );
        },
      )}
    </S.Container>
  );
};
