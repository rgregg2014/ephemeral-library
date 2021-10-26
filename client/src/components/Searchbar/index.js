import "./searchbar.css";
import { Form, Button } from "semantic-ui-react";

const Searchbar = () => {
  return (
    <Form className="database-search">
      <Form.Field>
        <label>Search For A Book</label>
        <input id="input-field" />
      </Form.Field>
      <Button className="ui button" id="search-button">
        Search
      </Button>
    </Form>
  );
};

export default Searchbar;
