import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRef } from 'react'
import { FaPen, FaPlus } from 'react-icons/fa'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'

function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const errorRef = useRef<HTMLParagraphElement>(null)

  const validateInput = () => {
    if (!inputRef.current?.value) {
      if (errorRef.current) {
        errorRef.current.innerText = 'This field cannot be empty'
        inputRef.current?.classList.add('border-error')

        return false
      }
    } else {
      if (errorRef.current) {
        errorRef.current.innerText = ''
        inputRef.current?.classList.remove('border-error')

        return true
      }
    }
  }

  const handleSubmit = () => {
    if (validateInput() == false) {
      console.log('Error')
    } else {
      console.log('Submit')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <section className="flex flex-col space-y-6 min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="capitalize text-2xl font-bold">
            todo-list
          </CardTitle>

          <CardDescription>
            Create, edit and delete to-do tasks.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col">
          <div className="flex flex-row space-x-1">
            <Input
              ref={inputRef}
              placeholder="Add a task"
              onKeyUp={handleKeyPress}
            />
            <Button ref={buttonRef} type="submit" onClick={handleSubmit}>
              <FaPlus />
            </Button>
          </div>

          <p ref={errorRef} className="text-sm text-red-500"></p>
        </CardContent>
      </Card>

      <Card className="mx-4 md:mx-0">
        <CardHeader className="flex flex-row justify-between">
          <CardDescription>adicionado segunda-feira, às 19:19 </CardDescription>
          <button aria-label="edit task button" className="text-blue-500">
            <FaPen />
          </button>
        </CardHeader>
        <CardContent className="flex flex-row md:space-x-8 justify-end">
          <CardTitle className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </CardTitle>
          <aside className="flex flex-col justify-center items-center space-y-2">
            <button
              aria-label="remove task button"
              className="text-red-500 text-xl"
            >
              <FaCircleXmark />
            </button>
            <button
              aria-label="complete task button"
              className="text-green-500 text-xl"
            >
              <FaCircleCheck />
            </button>
          </aside>
        </CardContent>
      </Card>
    </section>
  )
}

export default Home
