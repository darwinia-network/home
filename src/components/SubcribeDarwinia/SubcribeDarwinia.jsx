import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const Component = ({ placeholder, btnText, btnClassName, inputClassName, responseClassName }) => (
  <Form
    action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
  >
    <InputGroup className={inputClassName}>
      <div className="mc-field-group">
        <FormControl
          type="email"
          className="required email"
          defaultValue=""
          id="mce-EMAIL"
          name="EMAIL"
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby={placeholder}
        />
        <div
          htmlFor="mce-EMAIL"
          style={{ display: "none" }}
          className={`mce_inline_error text-muted ${responseClassName}`}
        ></div>
      </div>
      <InputGroup.Append>
        <Button type="submit" className={btnClassName}>
          {btnText}
        </Button>
      </InputGroup.Append>
    </InputGroup>
    <Form.Text
      id="mce-error-response"
      className={`text-muted ${responseClassName}`}
      style={{ display: "none" }}
    ></Form.Text>
    <Form.Text
      id="mce-success-response"
      className={`text-muted ${responseClassName}`}
      style={{ display: "none" }}
    ></Form.Text>
  </Form>
);

export const SubcribeDarwinia = React.memo(Component);
