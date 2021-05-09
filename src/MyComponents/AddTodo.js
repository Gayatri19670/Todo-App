import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can't be empty");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-5 text-left">
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            aria-describedby="emailHelp"
            placeholder="Todo Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            placeholder="Todo Description"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};
