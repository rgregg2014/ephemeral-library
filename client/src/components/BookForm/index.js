import "./bookform.css";
import { Button, Form } from "semantic-ui-react";

const BookForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <label>Author</label>
        <input placeholder="Author" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default BookForm;
