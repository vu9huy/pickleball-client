"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styles from "./CourtForm.module.css";

const CourtForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form className={styles["court-form-container"]} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={styles["court-form-input"]}
                {...register("multipleErrorInput", {
                    required: "This input is required.",
                    pattern: {
                        value: /\d+/,
                        message: "This input is number only."
                    },
                    minLength: {
                        value: 11,
                        message: "This input must exceed 10 characters"
                    }
                })}
            />
            <ErrorMessage
                errors={errors}
                name="multipleErrorInput"
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className={styles["error-messsage"]} key={type}>{message}</p>
                        ))
                        : null;
                }}
            />

            <input className={`${styles["court-form-submit"]} button`} type="submit" />
        </form>
    );
}

export default CourtForm;