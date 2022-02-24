import { BookCard } from "Components/BooksContainer/BookCard";
import { BooksContainer } from "Components/BooksContainer";
import { Header } from "Components/Header";
import { AppWrapper } from "./styles/app.style";
import { Footer } from "Components/Footer";

function App() {
  return (
    <>
      <Header />
      <AppWrapper className="App">
        <BooksContainer />
      </AppWrapper>
      <Footer />
    </>
  );
}

export default App;
