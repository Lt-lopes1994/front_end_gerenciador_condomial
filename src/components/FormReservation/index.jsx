import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/formReservation.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function FormReservation({ selectedDate }) {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      date: selectedDate
        ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
        : ""
    }
  });
  const [date, setDate] = useState(selectedDate);

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  console.log(watch({ ...register }));

  return (
    <div className="formReservation">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          {...register("name", { required: true })}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Celular"
          {...register("phone", { required: true })}
        />

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
          placeholder="Horario de Início"
          {...register("time", { required: true })}
        />

        <input
          type="number"
          min={1}
          max={15}
          id="people"
          name="people"
          placeholder="Quantidade de pessoas"
          {...register("people", { required: true, min: 1, max: 15 })}
        />

        <label htmlFor="message">
          Insira os dados dos convidados (Nome completo e RG)
        </label>
        <textarea
          id="message"
          name="message"
          {...register("message", { required: true })}
        />

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
