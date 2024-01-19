import { useForm } from "react-hook-form";
import ButtonSample from "../components/Button/button.jsx";
import Header from "../components/Header/index.jsx";
import api from "../services/api";

export function VisitorsRegister() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        const { visitor_photo, ...rest } = data;
        const formData = new FormData();

        formData.append("visitor_photo", data.visitor_photo[0]);

        try {
            const response = await api.post("/visitors", rest, formData, {
                headers: {
                    "Content-Type": `multipart/form-data`,
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error.response.data.error);
        }
    };

    return (
        <div className="mainContainer">
            <Header />
            <div className="formContainer">
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Cadastro de visitantes</h1>
                    <input
                        type="text"
                        placeholder="Cpf do visitante"
                        name="cpf"
                        {...register("cpf", { required: true })}
                    />
                    {
                        errors.cpf && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        name="name"
                        placeholder="Nome do visitante"
                        {...register("name", { required: true })}
                    />
                    {
                        errors.name && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        placeholder="Motivo da visita"
                        {...register("visit_reason", { required: true })}
                    />
                    {
                        errors.visit_reason && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        placeholder="Nome do residente visitado"
                        {...register("resident_name", { required: true })}
                    />
                    {
                        errors.resident_name && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="number"
                        placeholder="Número da residência"
                        {...register("door_visited", { required: true })}
                    />
                    {
                        errors.door_visited && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="text"
                        placeholder="Torre do residente"
                        {...register("tower_visited", { required: true })}
                    />
                    {
                        errors.tower_visited && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <input
                        type="file"
                        placeholder="Foto do visitante"
                        {...register("visitor_photo", { required: true })}
                    />
                    {
                        errors.visitor_photo && <span style={{ color: "red" }} role="alert">
                            Este campo é obrigatório
                        </span>
                    }

                    <ButtonSample name="Cadastrar" type="submit" />
                </form>
            </div>
        </div>
    );
}