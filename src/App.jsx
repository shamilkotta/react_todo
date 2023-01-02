/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="App">
      <div className="todo-task todo-container">
        <h3>Todo</h3>
        <div className="todo-data">
          {todoData.map(
            (data) =>
              data.status === "todo" && (
                <div className="todo-card" key={data.id}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  <div className="todo-actions">
                    <button
                      type="button"
                      onClick={() => {
                        setTodoData((arr) =>
                          arr.map((ele) =>
                            ele.id === data.id
                              ? { ...ele, status: "active" }
                              : ele
                          )
                        );
                      }}
                    >
                      In progress
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTodoData((arr) =>
                          arr.map((ele) =>
                            ele.id === data.id
                              ? { ...ele, status: "done" }
                              : ele
                          )
                        );
                      }}
                    >
                      Completed
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTodoData((arr) =>
                          arr.filter((ele) => ele.id !== data.id)
                        );
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
          )}
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
            currentId={todoData.length + 1}
          />
        )}
      </div>
      <div className="todo-progress todo-container">
        <div className="todo-container-head">
          <h3>In Progress</h3>
          <div className="todo-data">
            {todoData.map(
              (data) =>
                data.status === "active" && (
                  <div className="todo-card" key={data.id}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <div className="todo-actions">
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.map((ele) =>
                              ele.id === data.id
                                ? { ...ele, status: "todo" }
                                : ele
                            )
                          );
                        }}
                      >
                        Todo
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.map((ele) =>
                              ele.id === data.id
                                ? { ...ele, status: "done" }
                                : ele
                            )
                          );
                        }}
                      >
                        Completed
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.filter((ele) => ele.id !== data.id)
                          );
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="todo-done todo-container">
        <div className="todo-container-head">
          <h3>Done</h3>
          <div className="todo-data">
            {todoData.map(
              (data) =>
                data.status === "done" && (
                  <div className="todo-card" key={data.id}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <div className="todo-actions">
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.map((ele) =>
                              ele.id === data.id
                                ? { ...ele, status: "active" }
                                : ele
                            )
                          );
                        }}
                      >
                        In progress
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.map((ele) =>
                              ele.id === data.id
                                ? { ...ele, status: "todo" }
                                : ele
                            )
                          );
                        }}
                      >
                        Todo
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTodoData((arr) =>
                            arr.filter((ele) => ele.id !== data.id)
                          );
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AddTodoItemForm({ onClose, onSubmit, currentId }) {
  const [id, setId] = useState(currentId);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id,
    status: "todo",
  });

  useEffect(() => {
    setFormData({ title: "", description: "", id, status: "todo" });
  }, [id]);

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setId((currentValue) => currentValue + 1);
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
        required
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
