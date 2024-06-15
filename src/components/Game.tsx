import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding-bottom: 24px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  overflow: auto;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

type CardDetail = {
  value: Number;
  hidden: boolean;
};

function Game() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState<CardDetail[]>();
  const [revealedCard, setRevealedCard] = useState<CardDetail | undefined>();
  const [searchParams] = useSearchParams();

  function shuffleArray(array: CardDetail[]): CardDetail[] {
    // Create a copy of the array to avoid mutating the original array
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices i and j
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const setupGame = () => {
    // setup array of cards
    const cardTotal = searchParams.get("cards");

    if (!cardTotal) return;

    let cardArray = [];

    for (let index = 1; index <= +cardTotal; index++) {
      cardArray.push({ value: index, hidden: true } as CardDetail);
      cardArray.push({ value: index, hidden: true } as CardDetail);
    }

    const shuffledCards = shuffleArray(cardArray);

    setCards(shuffledCards);
  };

  const checkGameEnd = () => {
    // TODO: check logic here for game win
    if (!cards?.find((card) => card.hidden === true)) {
      console.log("you won");
    }
  };

  const onCardClick = (card: CardDetail) => {
    // if the card is already revealed, return
    if (!card.hidden || loading) return;

    card.hidden = false;
    setScore(score + 1);

    if (revealedCard && revealedCard.value !== card.value) {
      setLoading(true);

      setTimeout(() => {
        revealedCard.hidden = true;
        card.hidden = true;
        setRevealedCard(undefined);
        setLoading(false);
      }, 1000);

      return;
    }

    if (revealedCard && revealedCard.value === card.value) {
      setRevealedCard(undefined);
      return;
    }

    if (!revealedCard) {
      setRevealedCard(card);
    }
  };

  useEffect(() => {
    setupGame();
  }, []);

  useEffect(() => {
    checkGameEnd();
  }, [score]);

  if (!cards) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ScoreBoard>
        <Button onClick={() => navigate("/")}>Restart</Button>
        <Text>Number of cards: {searchParams.get("cards")}</Text>
        <Text>Score: {score}</Text>
      </ScoreBoard>
      <Text>Match all the cards to win!</Text>
      <Content>
        {cards?.map((card, index) => (
          <Card
            key={index}
            onClick={() => onCardClick(card)}
            hidden={card.hidden}
          >
            {card.value}
          </Card>
        ))}
      </Content>
    </>
  );
}

export default Game;
