import axios from "./axios";

export const getTasksRequest = () => axios.get(`/tasks`);
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);
export const createTasksRequest = (task) => axios.get(`/task`, task);
export const updateTasksRequest = (task) => axios.get(`/tasks/${task._id}`, task);
export const deleteTasksRequest = (id) => axios.get(`/tasks/${id}`);
