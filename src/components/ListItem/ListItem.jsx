import Trash from './image/Trash.png'
import './ListItem.scss'

export const ListItem = ({ id, text, isDone, removeListItem, changeListItemState }) => {
  const handleChangeListItemState = () => {
    changeListItemState(id)
  }
  const handleOnRemove = () => {
    removeListItem(id)
  }

  return (
    <div className={isDone ? 'item item-done' : 'item'}>
      <div className={'text'} onClick={handleChangeListItemState}>
        <p>{text}</p>
      </div>
      <div className={'trash'} onClick={handleOnRemove}>
        <img src={Trash} />
      </div>
    </div>
  )
}
