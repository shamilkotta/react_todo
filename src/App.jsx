/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="App">
      <div className="todo-task todo-container">
        <h3>Todo</h3>
        <div className="todo-data">
          {todoData.map((data, index) => (
            <div className="todo-card" key={index}>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="todo-container-add"
          onClick={() => {
            setOpenForm(true);
          }}
        >
          + Add item
        </button>
        {openForm && (
          <AddTodoItemForm
            onClose={() => {
              setOpenForm(false);
            }}
            onSubmit={(newdata) => {
              setTodoData((data) => [...data, newdata]);
            }}
          />
        )}
      </div>
      <div className="todo-progress todo-container">
        <div className="todo-container-head">
          <h3>Todo</h3>
          <div>+</div>
        </div>
      </div>
      <div className="todo-done todo-container">
        <div className="todo-container-head">
          <h3>Todo</h3>
          <div>+</div>
        </div>
      </div>
    </div>
  );
}

function AddTodoItemForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "" });
  };

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <button type="button" className="form-close" onClick={onClose}>
        X
      </button>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => {
          setFormData((data) => ({ ...data, title: e.target.value }));
        }}
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => {
          setFormData((data) => ({ ...data, description: e.target.value }));
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;
