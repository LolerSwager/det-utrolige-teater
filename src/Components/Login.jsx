import styled from "styled-components"
import appService from "../Appservices/Appservice"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useForm } from "react-hook-form"
import { useModalStore } from "./Modal/useModalStore"

export default function Login() {
    const { setLoggedIn } = useLoginStore()
    const { setToggleModal } = useModalStore()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (submitData) => {
        const fetchResults = async () => {
            try {
                const response = await appService.login(submitData.username, submitData.password)
                setLoggedIn(true, response.data)
                setToggleModal("none")
            } catch (error) {
                console.error(error)
            }
        }
        fetchResults()
    }
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        </StyledForm>
    )
}

const StyledForm = styled.form`
    background-color: #ad7a51;
    padding: 20px;

    input {
        padding: 0.5rem 1rem;
        margin: 0.1rem;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #61e692;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        margin: 0.1rem;
    }
`
