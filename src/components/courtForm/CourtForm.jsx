"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styles from "./CourtForm.module.css";

const inputs = [
    {
        id: "court-form-name",
        inputType: "input",
        label: "Tên",
        register: "courtName",
        validation: {
            required: "This input is required.",
            pattern: {
                value: /\d+/,
                message: "This input is number only."
            },
            minLength: {
                value: 8,
                message: "This input must exceed 10 characters"
            }
        }
    },
    {
        id: "court-form-description",
        inputType: "textarea",
        label: "Mô tả",
        register: "courtDescription",
        validation: {
            required: "This input is required.",
            pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Password with at least 8 characters, including at least one letter and one number."
            },
            minLength: {
                value: 8,
                message: "This input must exceed 10 characters"
            }
        }
    }
]

const CourtForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => console.log("data", data);

    return (
        <form className={styles["court-form-container"]} onSubmit={handleSubmit(onSubmit)}>
            {inputs.map(input => {
                return (<div className="" key={input.id}>
                    <label htmlFor={input.id}>{input.label}:</label>
                    <input
                        id={input.id}
                        // value={}
                        className={styles["court-form-input"]}
                        {...register(input.register, input.validation)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={input.register}
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p className={styles["error-messsage"]} key={type}>*{message}</p>
                                ))
                                : null;
                        }}
                    />
                </div>)
            })}

            <input className={`${styles["court-form-submit"]} button`} type="submit" />
        </form>
    );
}

export default CourtForm;