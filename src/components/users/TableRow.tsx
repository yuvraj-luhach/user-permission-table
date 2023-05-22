import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"

import Badge from "../Badge"
import Button from "../button/Button"

import { toast } from 'react-hot-toast'
// import EditUserModal from "../modals/EditUserModal"
// import DeleteModal from "../modals/DeleteModal"
// import useConfirmModal from "../../hooks/useConfirmModal"
// import useEditModal from "../../hooks/useEditModal"

interface TableRowProps{
    bgColor: string
    id?: number
    name?: string
    img?: string
    email?: string
    status?: string
    role?: string
    last_login?: string
    onEdit: ()=> void
    onDelete: ()=> void
}

const TableRow:React.FC<TableRowProps> = ({bgColor, id, name, img, email, status, role, last_login, onEdit, onDelete}) => {
    const date = last_login?.split("/")[0]
    const time = last_login?.split("/")[1]

    // const confirmDeleteModal = useConfirmModal()
    // const editUserModal = useEditModal()
    
    return (
        <tr className={`${bgColor}`}>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                        src={img}
                        alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 font-medium whitespace-no-wrap">
                            {name}
                        </p>
                        <p className="text-gray-500">{email}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                {status?.toLowerCase()==="active" && (
                    <Badge text={status} bg1="bg-green-100" bg2="bg-green-500" textColor="text-green-700"/>
                )}
                {status?.toLowerCase()==="invited" && (
                    <Badge text={status} bg1="bg-gray-200" bg2="bg-gray-500" textColor="text-gray-600"/>
                )}

            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <p className="text-gray-400 font-medium whitespace-no-wrap">{role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <p className="text-gray-900 font-[430] whitespace-no-wrap">{date}</p>
                <p className="text-gray-500 whitespace-no-wrap">{time}</p>
            </td>
            <td className="p-5 border-b border-gray-200 bg-transparent text-sm" >
                {/* button component */}
                <div className="flex justify-between">
                    <Button icon={RiDeleteBin6Line} classes="bg-slate-100 hover:bg-slate-200 transition rounded-full p-3" color="rgb(107 114 128)" onClick={()=> onDelete()} />
                    <Button icon={FiEdit2} color="rgb(107 114 128)" classes="bg-slate-100 hover:bg-slate-200 transition rounded-full p-3" onClick={()=> onEdit()} />
                </div>
            </td>
        </tr>
    )
}

export default TableRow;