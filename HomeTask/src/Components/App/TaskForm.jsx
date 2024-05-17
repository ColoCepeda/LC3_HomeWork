import { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="New task..."
      />
    </form>
  );
}

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;
