import './List.scss'

export const List = ({ items, removeListItem, changeListItemState }) => {
  return (
    <>
      items.map((toDoItem) =>
      <ListItem
        id={toDoItem.id}
        text={toDoItem.name}
        isDone={toDoItem.isDone}
        removeListItem={removeListItem}
        changeListItemState={changeListItemState}
      />
      )
    </>
  )
}
