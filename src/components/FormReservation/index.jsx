import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/formReservation.css";

function FormReservation({ selectedDate, setOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      date: selectedDate
        ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
        : ""
    }
  });
  const [date, setDate] = useState(selectedDate);

  const onSubmit = (data) => {
    console.log("submit", data);
    setOpen(false);
  };

  const messagelength = watch("message")?.length;

  return (
    <div className="formReservation">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ textTransform: "capitalize" }}
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          {...register("name", {
            required: "Nome é um campo obrigátorio"
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="alert">{errors.name.message}</p>}

        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          {...register("email", { required: "E-mail é um campo obrigatório" })}
        />
        {errors.email && <p className="alert">{errors.email.message}</p>}

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Celular"
          {...register("phone", { required: "Celular é um campo obrigatório" })}
        />
        {errors.phone && <p className="alert">{errors.phone.message}</p>}

        <input
          type="date"
          id="date"
          name="date"
          placeholder="Data"
          value={date.toISOString().slice(0, 10)}
          onChange={(e) => setDate(new Date(e.target.value))}
          {...register("date", { required: true })}
          disabled
        />

        <input
          type="time"
          id="time"
          name="time"
          placeholder="Horário de Início"
          {...register("time", { required: "Horário é um campo obrigatório" })}
        />
        {errors.time && <p className="alert">{errors.time.message}</p>}

        <input
          type="number"
          id="people"
          name="people"
          placeholder="Quantidade de pessoas"
          {...register("people", {
            required: "Quantidade de pessoas é um item obrigatório",
            min: { value: 1, message: "Mínimo de 1 pessoa" },
            max: { value: 15, message: "Máximo de 15 pessoas" }
          })}
        />
        {errors.people && <p className="alert">{errors.people.message}</p>}

        <label htmlFor="message">
          Insira os dados dos convidados (Nome completo e RG)
        </label>
        <textarea
          id="message"
          name="message"
          {...register("message", {
            required: "Insira os dados dos convidados (Nome completo e RG)",
            minLength: { value: 50, message: "Mínimo de 50 caracteres" }
          })}
        />
        <p style={{ fontFamily: "Roboto", fontSize: "Small" }}>
          Caracteres:{messagelength}
        </p>
        {errors.message && <p className="alert">{errors.message.message}</p>}

        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          sx={{
            background: "green",
            ":hover": { background: "darkgreen" }
          }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default FormReservation;
