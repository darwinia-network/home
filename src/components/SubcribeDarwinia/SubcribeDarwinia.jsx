import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const Component = ({ placeholder, btnText, btnClassName, inputClassName, responseClassName }) => (
  <Form
    action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    className="position-relative"
  >
    <InputGroup className={`mc-field-group position-relative ${inputClassName}`}>
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
        style={{ display: "none", top: "40px" }}
        className={`mce_inline_error text-muted position-absolute ${responseClassName}`}
      ></div>
      <Button type="submit" className={btnClassName}>
        {btnText}
      </Button>
    </InputGroup>
    <Form.Text
      id="mce-error-response"
      className={`text-muted position-absolute ${responseClassName}`}
      style={{ display: "none", top: "36px" }}
    ></Form.Text>
    <Form.Text
      id="mce-success-response"
      className={`text-muted position-absolute ${responseClassName}`}
      style={{ display: "none", top: "36px" }}
    ></Form.Text>
  </Form>
);

export const SubcribeDarwinia = React.memo(Component);
