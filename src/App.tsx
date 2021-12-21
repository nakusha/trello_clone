import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { hourSelector, minuteState } from "./atoms";

const App = () => {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provider) => (
            <ul ref={provider.innerRef} {...provider.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(provider) => (
                  <li ref={provider.innerRef} {...provider.draggableProps}>
                    <span {...provider.dragHandleProps}>CLICK</span>
                    ONE
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(provider) => (
                  <li
                    ref={provider.innerRef}
                    {...provider.dragHandleProps}
                    {...provider.draggableProps}
                  >
                    TWO
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
