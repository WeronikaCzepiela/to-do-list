import Trash from './image/Trash.png'

export const ListItem = (id, text, isDone, removeListItem) => {
  return (
    <div className={'list'}>
      <div className={'text'}>
        <p></p>
      </div>
      <div className={'trash'}>
        <img src={Trash} />
      </div>
    </div>
  )
}
