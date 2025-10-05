import { createFileRoute } from "@tanstack/react-router"
import logo from "../logo.svg"
import Header from "@/components/Header"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div>
      <Header />
      <div className='global-margin'>
        {/* "Hi I'm Gonzalo" section */}
        <section className="flex justify-center items-center w-full flex-col ">
          <text className="big-title">Hi I'm Gonzalo</text>
          <h4>I like to do things</h4>
        </section>
      </div>
    </div>
  )
}
