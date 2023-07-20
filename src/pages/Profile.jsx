import '../styles/profile.css';
import Header from "../components/Header/index.jsx";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import Alert from "../components/Alert/index.jsx";
import api from '../services/api';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';



function Profile() {
    const navigate = useNavigate();
    const user = jwtDecode(localStorage.getItem('token'));
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [concluded, setConcluded] = useState(false);
    const [alertMessage, setAlertMessage] = useState({
        message: "",
        severity: ""
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const onlyNumbers = new RegExp("^[0-9]+$");

        if (!onlyNumbers.test(data.door)) {
            setAlert(true);
            setAlertMessage({
                message: "O campo N° da porta só aceita números",
                severity: "warning"
            });
        }

        if (data.door.length > 4) {
            setAlert(true);
            setAlertMessage({
                message: "O campo N° da porta só aceita no máximo 4 números",
                severity: "warning"
            });
        }

        try {
            const sendData = {
                name: data.name,
                email: data.email,
                door: data.door,
                tower: data.tower
            };

            setLoading(true);

            await api.patch(`/users/${user.id}`, sendData)
            setLoading(false);
            setConcluded(true);
        } catch (error) {
            setAlert(true);
            setAlertMessage({
                message: error.response.data.error.message,
                severity: "error"
            });
        }
    }

    useEffect(() => {

    }, []);

    return (
        <>
            {concluded ? (
                <div className="container">
                    <div className="concluded">
                        <div className="concludedContent">
                            <h1>Atualização concluída com sucesso!</h1>
                            <button
                                type="button"
                                className="buttonBase"
                                onClick={() => navigate('/home')}
                            >
                                Voltar para a página inicial
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="containerProfile">
                    <Header />
                    <div className="formContainer">
                        <h1>Atualizar Conta</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Nome"
                                defaultValue={user.name}
                                {...register("name", {
                                    required: "Nome é um campo obrigátorio"
                                })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name && (
                                <p style={{ color: "red" }} role="alert">
                                    {errors.name?.message}
                                </p>
                            )}
                            <input
                                type="email"
                                placeholder="E-mail"
                                defaultValue={user.email}
                                {...register("email", {
                                    required: "E-mail é um campo obrigátorio"
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && (
                                <p style={{ color: "red" }} role="alert">
                                    {errors.email?.message}
                                </p>
                            )}
                            <input
                                type="text"
                                placeholder="N° da porta"
                                defaultValue={user.door}
                                {...register("door", {
                                    required: "N° da porta é um campo obrigátorio"
                                })}
                                aria-invalid={errors.door ? "true" : "false"}
                            />
                            {errors.door && (
                                <p style={{ color: "red" }} role="alert">
                                    {errors.door?.message}
                                </p>
                            )}
                            <input
                                type="text"
                                placeholder="Torre"
                                defaultValue={user.tower}
                                {...register("tower", {
                                    required: "Torre é um campo obrigátorio"
                                })}
                                aria-invalid={errors.tower ? "true" : "false"}
                            />
                            {errors.tower && (
                                <p style={{ color: "red" }} role="alert">
                                    {errors.tower?.message}
                                </p>
                            )}
                            <button type="submit">Atualizar</button>
                        </form>
                        {alert && (
                            <Alert
                                top={"53rem"}
                                bottom={"0"}
                                left={"center"}
                                right={"center"}
                                setOpen={setAlert}
                                open={alert}
                                message={alertMessage.message}
                                severity={alertMessage.severity}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile;