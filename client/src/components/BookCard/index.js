import "./bookcard.css";
import { Card, Icon, Image } from "semantic-ui-react";

const extra = (
  <a href="/">
    <Icon name="user" />
    16 Friends
  </a>
);

const Bookcard = () => {
  return (
    <Card
      className="card"
      header="Book Title Here"
      meta="Author Name"
      description="This is a book summary I will pull from the Google Books API"
      extra={extra}
    />
  );
};

export default Bookcard;
