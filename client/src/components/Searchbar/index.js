import "./searchbar.css";
import { Form } from "semantic-ui-react";

const Searchbar = () => {
  return (
    <Form>
      <Form.Field>
        <label>Search For A Book</label>
        <input />
      </Form.Field>
    </Form>
  );
};

export default Searchbar;
