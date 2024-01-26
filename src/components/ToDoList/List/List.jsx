import './List.scss'
import { ListItem } from '../../ListItem/ListItem'

export const List = ({ items, removeListItem, changeListItemState }) => {
  return (
    <div className={'list'}>
      {items?.map((toDoItem) => (
        <ListItem
          id={toDoItem.id}
          text={toDoItem.name}
          isDone={toDoItem.isDone}
          removeListItem={removeListItem}
          changeListItemState={changeListItemState}
        />
      ))}
    </div>
  )
}
