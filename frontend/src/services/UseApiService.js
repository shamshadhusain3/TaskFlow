import { useState } from "react";
import axios from "axios";

const UseApiService = () => {
  const employeeBaseURL = "http://localhost:8080/api/v1/employees";
  const taskBaseURL = "http://localhost:8080/api/v1/tasks";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Employee operations
  const getEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get(employeeBaseURL);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getEmployeeById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${employeeBaseURL}/${id}`);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createEmployee = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(employeeBaseURL, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateEmployee = async (id, payload) => {
    setLoading(true);
    try {
      const response = await axios.put(`${employeeBaseURL}/${id}`, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${employeeBaseURL}/${id}`);
      setData(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Task operations
  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(taskBaseURL);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getTaskById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${taskBaseURL}/${id}`);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(taskBaseURL, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, payload) => {
    setLoading(true);
    try {
      const response = await axios.put(`${taskBaseURL}/${id}`, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${taskBaseURL}/${id}`);
      setData(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default UseApiService;
