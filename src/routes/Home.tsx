import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaCheck, FaPlus } from "react-icons/fa";
import React, { useState } from "react";

function Home() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const validateInput = () => {
    if (task === "") {
      setError("This field cannot be empty");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInput()) {
      setTodoList((oldTodoList) => [...oldTodoList, task]);
      setTask("");
    }
  };

  const handleCompleteTask = (taskToComplete: string) => {
    setTodoList((oldTodoList) =>
      oldTodoList.filter((todo) => todo !== taskToComplete),
    );
  };

  return (
    <section className="flex min-h-screen flex-col items-center space-y-12 bg-stone-100">
      <div className="mt-12 w-full max-w-xs md:max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle className="text-center font-Poppins text-4xl font-black text-stone-900 md:text-4xl">
              TODO LIST
            </CardTitle>
            <CardDescription className="text-center">
              The best way to manage your tasks.
            </CardDescription>
          </CardHeader>
          <CardContent className="mx-auto md:max-w-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row space-x-1">
                <Input
                  placeholder="Add a task"
                  onChange={(event) => setTask(event.target.value)}
                  value={task}
                  className={error ? 'border-error' : ''}
                />
                <Button type="submit">
                  <FaPlus />
                </Button>
              </div>
              {error && (
                <p className="ml-3 mt-2 text-sm text-red-500">{error}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="grid w-full max-w-sm grid-cols-1 rounded-xl bg-gradient-to-b from-stone-200 via-stone-100 to-stone-100 md:max-w-3xl md:grid-cols-3 lg:max-w-6xl lg:grid-cols-4">
        {todoList.map((todo) => (
          <Card key={todo} className="m-4 flex flex-col justify-between md:m-2">
            <CardHeader>
              <CardDescription className="text-xs">
                Mon, Sep 10, 2024 - 12:00 AM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="font-Poppins text-xl">{todo}</CardTitle>
            </CardContent>
            <CardFooter className="flex justify-center space-x-2">
              <Button
                aria-label="complete task button"
                onClick={() => handleCompleteTask(todo)}
              >
                <FaCheck />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Home;
