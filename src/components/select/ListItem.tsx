interface ListItemProps{
    text: string
    selected?: boolean
}

const ListItem:React.FC<ListItemProps> = ({text, selected}) => {
    return ( 
        <option value={text} className="p-3" >
            {text}
        </option>
     );
}
 
export default ListItem;
// selected={selected}