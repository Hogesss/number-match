import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 10px;
`;

const ErrorMessage = styled.div`
  size: 8px;
  color: red;
`;

const FormSchema = () =>
  z.object({
    cards: z.coerce.number().min(2),
  });

export type FormSchemaType = z.infer<ReturnType<typeof FormSchema>>;

function Home() {
  const navigate = useNavigate();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    navigate(`/game?cards=${data.cards}`);
  };

  return (
    <>
      Welcome!!
      <form onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <div>
            Please enter the number of cards you would like to play with:
          </div>
          <div>
            <input type="text" {...register("cards")} />
            {errors.cards && (
              <ErrorMessage>{errors.cards.message}</ErrorMessage>
            )}
          </div>
          <Button>Begin</Button>
        </Content>
      </form>
    </>
  );
}

export default Home;
