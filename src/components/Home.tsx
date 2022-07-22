import {Todo} from "../Todo";

type HomeProps={
    todos:Todo[]
}

export default function Home(props:HomeProps) {

    const getTodos=props.todos.map((e)=>{
        return(
            <div>
                <h1>{e.id}</h1>
                <h1>{e.description}</h1>

                <h1>{e.status}</h1>
            </div>
        )
    })
return(
    <div>



        {getTodos}

    </div>
)

}
