const db = require('../utils/database');
const Users = require('../models/users.model');
const Tasks = require('../models/tasks.model');
const Categories = require('../models/categories.model');
const TasksCategories = require('../models/tasks-categories.model');


const users = [
  {username: 'Tomas', email: 'tomas@gmail.com', password: '1234'},
  {username: 'Pablo', email: 'pablo@gmail.com', password: '1234'},
  {username: 'Bianca', email: 'bianca@gmail.com', password: '1234'},
];

const tasks = [
  {title: "Estudiar Node", description: "shalala1", userId: 1 },
  {title: "Pasear al perro", description: "shalala2", userId: 1 },
  {title: "Lavar los platos", userId: 2 },
  {title: "Ir a chequeo mensual", description: "porque node no me deja", userId: 3 },
];

const categories = [
  {name: 'personal'},
  {name: 'educacion'},
  {name: 'salud'},
  {name: 'trabajo'},
  {name: 'hogar'},
  {name: 'cocina'},
  {name: 'deporte'},
  {name: 'ocio'},
  {name: 'financiero'},
  {name: 'entretenimiento'}

];

const tasksCategories = [
  {categoryId: 1, taskId: 1},
  {categoryId: 2, taskId: 1},
  {categoryId: 4, taskId: 1},
  {categoryId: 1, taskId: 2},
  {categoryId: 7, taskId: 2},
  {categoryId: 10, taskId: 2},
  {categoryId: 3, taskId: 2},
  {categoryId: 5, taskId: 3},
  {categoryId: 6, taskId: 3},
  {categoryId: 1, taskId: 4},
  {categoryId: 3, taskId: 4},



];

db.sync({force: true})
  .then(() => {
    console.log('Sembrado exitoso');
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      tasks.forEach((task) => Tasks.create(task))
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    }, 250);

    setTimeout(() => {
    tasksCategories.forEach((tc) => TasksCategories.create(tc))
  }, 400);

  })
  .catch((error) => console.log(error));

 

