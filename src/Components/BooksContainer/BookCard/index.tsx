import * as S from "./bookCards.style";

interface BookCardProps {
  img?: string;
  title?: string;
  author?: string;
  description?: string;
  gender?: string;
  date?: string;
}

export const BookCard = ({
  img,
  title,
  author,
  description,
  gender,
  date,
}: BookCardProps) => {
  return (
    <S.BookCard>
      <S.ImageContainer>
        <img src={img} width="227" height="400" />
      </S.ImageContainer>
      <h4>{title}</h4>
      <span>{author}</span>
      <p>{description}</p>

      <div className="genderDate">
        <span className="gender">{gender}</span>
        <span>{date}</span>
      </div>
    </S.BookCard>
  );
};
