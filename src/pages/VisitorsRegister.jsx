import { useForm } from "react-hook-form";
import ButtonSample from "../components/Button/button.jsx";
import Header from "../components/Header/index.jsx";

export function VisitorsRegister() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="mainContainer">
            <Header />
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="cpf" style={{ marginBottom: 0, marginTop: '10px' }}>Cpf do visitante*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="name">Nome do visitante*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="visit_reason">Motivo da visita*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="resident_name">Nome do residente visitado*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="door_visited">Número da residência visitada*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="tower_visited">Torre do residente*</label>
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

                    <label style={{ marginBottom: 0, marginTop: '10px' }} htmlFor="visitor_photo">Foto do visitante</label>
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

                    <ButtonSample name="Registrar" type="submit" />
                </form>
            </div>
        </div>
    );
}