import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Content = styled.div`
  margin-top: 32px;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const ErrorMessage = styled.span`
  size: 8px;
  color: red;
  margin-left: 8px;
`;

const StyledInput = styled.input`
  font-size: 32px;
  height: 64px;
  background-color: #373a40;
  color: white;
  border: 1px solid black;
  text-align: center;
  border-radius: 4px;
`;

const FormSchema = () =>
  z.object({
    cards: z.coerce.number().min(2),
  });

type FormSchemaType = z.infer<ReturnType<typeof FormSchema>>;

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <span>
          Enter a number to set the highest card value. We'll create a deck with
          cards numbered from 1 up to your chosen number:
        </span>
        <div>
          <StyledInput type="text" defaultValue="5" {...register("cards")} />
          {errors.cards && <ErrorMessage>{errors.cards.message}</ErrorMessage>}
        </div>
        <div>
          <Button>Begin</Button>
        </div>
      </Content>
    </form>
  );
}

export default Home;
