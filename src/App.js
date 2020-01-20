import React, { useState } from "react";
import "./App.css";

function App() {
  // 1. On va analyser les éléments qui vont être modifiés dans la page
  // On a donc la liste des tâches
  const [tasks, setTasks] = useState([]);
  // On a également le champ input
  const [inputTask, setInputTask] = useState("");

  return (
    <div className="wrapper">
      <h1>To-do list</h1>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span
                className="remove"
                onClick={() => {
                  // On crée une copie de tasks
                  const newTasks = [...tasks];
                  // On supprime un seul élément à l'index correspondant
                  newTasks.splice(index, 1);
                  // 'tasks' est maintenant égal à 'newTasks'
                  setTasks(newTasks);
                }}
              >
                X
              </span>
              <span
                className={task.isDone === true ? "done" : ""}
                onClick={() => {
                  // On créer une copie du tableau
                  const newTasks = [...tasks];
                  // task.isDone est égal à différent de task.isDone
                  task.isDone = !task.isDone;
                  setTasks(newTasks);
                }}
              >
                {task.name}
              </span>
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={event => {
          // Empêche le rechargement de la page
          event.preventDefault();
          // On va créer une copie de 'tasks' car la liste va être mise à jour
          const newTasks = [...tasks];
          // On va créer un objet qui contiendra une clé 'name' + ce que contiendra le champ 'inputTasks'
          newTasks.push({ name: inputTask, isDone: false });
          // On dit à React que 'newTasks' est maintenant égal à 'tasks'
          setTasks(newTasks);
          // On réinitialise la champ input à vide
          setInputTask("");
        }}
      >
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={inputTask}
          onChange={event => {
            setInputTask(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="Soumettre la tâche" />
      </form>
    </div>
  );
}

export default App;
