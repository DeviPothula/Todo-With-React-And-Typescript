export interface Todo {
    id: string,
    task:string
}
export type SetCurrentTodoType = React.Dispatch<React.SetStateAction<{ id: string , task: string  }>>;
