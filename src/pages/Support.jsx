import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import ButtonSample from "../components/Button/button.jsx";
import Header from "../components/Header/index.jsx";

export default function Support() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="mainContainer">
            <Header />
            <div className="formContainer">
                <h1>Registrar suporte</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome *"
                        {...register("name", { required: true })}
                    />
                    {
                        errors.name && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="email"
                        placeholder="Email *"
                        {...register("email", { required: true })}
                    />
                    {
                        errors.email && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <InputMask
                        type="text"
                        mask={"(99) 99999-9999"}
                        placeholder="Telefone *"
                        {...register("phone", { required: true })}
                    />
                    {
                        errors.phone && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        placeholder="Torre *"
                        {...register("tower", { required: true })}
                    />
                    {
                        errors.tower && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="number"
                        placeholder="Número da residência"
                        {...register("door", { required: true })}
                    />
                    {
                        errors.door && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        placeholder="Motivo do suporte *"
                        {...register("title", { required: true })}
                    />
                    {
                        errors.title && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <Controller
                        control={control}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                placeholder="Descreva o problema *"
                            />
                        )}
                        name="text_area"
                        rules={{ required: true }}
                    />
                    {
                        errors.text_area && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <ButtonSample name="Registrar" type="submit" />
                </form>
            </div>
        </div>
    )
}