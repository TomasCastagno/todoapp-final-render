const Categories = require("../models/categories.model");
const TasksCategories = require("../models/tasks-categories.model");
const Tasks = require("../models/tasks.model");

class TaskServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Tasks.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newTask) {
    try {
      const result = await Tasks.create(newTask);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Tasks.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Tasks.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategories(id) {
    try {
      const result = Tasks.findOne({
        where: { id },
        include: {
          model: TasksCategories,
          as: "categories",
          attributes: ["id"],
          include: {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskServices;
