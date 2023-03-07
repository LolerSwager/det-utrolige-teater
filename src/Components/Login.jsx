import appService from "../Appservices/Appservice"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useForm } from "react-hook-form"

export default function Login() {
    const { loggedIn, setLoggedIn} = useLoginStore()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (submitData) => {
        const fetchResults = async () => {
            try {
                const response = await appService.login(submitData.username, submitData.password)
                setLoggedIn(true, response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchResults()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
            {errors.username?.type === "required" && (
                <p className="alert" role="alert">
                    {errors.username?.message}
                </p>
            )}
            <input
                {...register("username", {
                    required: "Brugernavn er påkrævet",
                })}
                type="text"
                autoComplete="username"
                placeholder="Brugernavn"
            />
            {errors.password?.type === "required" && (
                <p className="alert" role="alert">
                    {errors.password?.message}
                </p>
            )}
            <input
                {...register("password", {
                    required: "kodeord er påkrævet",
                })}
                type="password"
                autoComplete="password"
                placeholder="Adgangskode"
            />
            <button>Login</button>
            <button onClick={() => reset()}>Anuller</button>
        </form>
    )
}
