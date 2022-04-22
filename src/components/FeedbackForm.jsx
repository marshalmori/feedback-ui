import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm(props) {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Text must be at least 10 characteres");
      setBtnDisable(true);
    } else {
      setMessage(null);
      setBtnDisable(false);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable} version="secondary">
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

FeedbackForm.propType = {
  text: PropTypes.string.isRequired,
};

export default FeedbackForm;
