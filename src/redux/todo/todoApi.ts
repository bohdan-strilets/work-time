import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'api/axiosBaseQuery';
import { CreateTodoDto } from 'types/dto/CreateTodoDto';
import { UpdateCompletedDto } from 'types/dto/UpdateCompletedDto';
import { UpdateTodoDto } from 'types/dto/UpdateTodoDto';
import { TodoType } from 'types/types/TodoType';
import { TodosResponseType } from 'types/types/TodosResponseType';

const tags = { Todos: 'todos' };

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: [tags.Todos],
  baseQuery: axiosBaseQuery('todos'),
  endpoints(build) {
    return {
      getAllTodo: build.query<TodosResponseType<TodoType[]>, void>({
        query: () => ({ url: 'all-todos', method: 'GET' }),
        providesTags: [tags.Todos],
      }),
      getOneTodo: build.query<TodosResponseType<TodoType>, string>({
        query: todoId => ({ url: `one-todo/${todoId}`, method: 'GET' }),
        providesTags: [tags.Todos],
      }),
      createTodo: build.mutation<TodosResponseType<TodoType>, CreateTodoDto>({
        query: createTodoDto => ({
          url: 'create-todo',
          method: 'POST',
          data: createTodoDto,
        }),
        invalidatesTags: [tags.Todos],
      }),
      updateTodo: build.mutation<TodosResponseType<TodoType>, UpdateTodoDto>({
        query: ({ todoId, updateTodoDto }) => ({
          url: `update-todo/${todoId}`,
          method: 'PATCH',
          data: updateTodoDto,
        }),
        invalidatesTags: [tags.Todos],
      }),
      deleteTodo: build.mutation<TodosResponseType, string>({
        query: todoId => ({
          url: `delete-todo/${todoId}`,
          method: 'DELETE',
        }),
        invalidatesTags: [tags.Todos],
      }),
      updateCompleted: build.mutation<TodosResponseType<TodoType>, UpdateCompletedDto>({
        query: ({ todoId, updateCompletedDto }) => ({
          url: `update-completed/${todoId}`,
          method: 'PUT',
          data: updateCompletedDto,
        }),
        invalidatesTags: [tags.Todos],
      }),
      getTodosByDate: build.query<TodosResponseType<TodoType[]>, string>({
        query: dayId => ({ url: `get-todos-by-date/${dayId}`, method: 'GET' }),
        providesTags: [tags.Todos],
      }),
    };
  },
});

export const {
  useGetAllTodoQuery,
  useGetOneTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useUpdateCompletedMutation,
  useGetTodosByDateQuery,
} = todosApi;
