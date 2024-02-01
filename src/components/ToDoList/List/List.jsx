import './List.scss'
import { ListItem } from '../../ListItem/ListItem'

export const List = ({ items, removeListItem, changeListItemState }) => {
  return (
    <div className={'list'}>
      {items
        ? items.map((toDoItem) => (
            <ListItem
              key={toDoItem.id}
              id={toDoItem.id}
              text={toDoItem.name}
              isDone={toDoItem.isDone}
              removeListItem={removeListItem}
              changeListItemState={changeListItemState}
            />
          ))
        : null}
    </div>
  )
}
