import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDragableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
const DragableCard = ({ toDoId, toDoText, index }: IDragableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(provider, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragableCard);
