import { Formik, Form, Field } from "formik";
import { UseTodo } from "../../hooks";
import React from "react";

const Todo = () => {
  const { tasks, deleteTask, addTask, setDoneTask } = UseTodo([
    {
      id: Date.now(),
      body: "test",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="add" />
        </Form>
      </Formik>
      <h2>tasks list</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.body}
           <button onClick={() => { deleteTask(task.id); }}> X</button>
          </li>
        ))}
        {tasks.map((task) => (
          <span key={task.id}>
            {task.body}
            <button onClick={() => {setDoneTask(task.id); }} >
              <span class="material-icons-outlined">done</span></button>
            </span>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
