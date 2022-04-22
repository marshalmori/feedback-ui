import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
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
          <button className="btn btn-secondary" type="submit">
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

FeedbackForm.propType = {
  text: PropTypes.string.isRequired,
};

export default FeedbackForm;
