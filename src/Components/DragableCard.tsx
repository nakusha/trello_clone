import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

interface IDragableCardProps {
  toDo: string;
  index: number;
}
const DragableCard = ({ toDo, index }: IDragableCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provider) => (
        <Card
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragableCard);
