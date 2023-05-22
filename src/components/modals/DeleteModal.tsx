import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Select from '../select/Select';

import Input from '../inputs/Input';
import { toast } from 'react-hot-toast'
import { User } from '../../interfaces/User';
import { useDeleteUser } from '../../hooks/useDeleteUser';

interface DeleteModalProps{
    user?: User
    isOpen: boolean
    closeModal: () => void
    onConfimation: () => void
}

const DeleteModal:React.FC<DeleteModalProps> = ({user, isOpen, closeModal, onConfimation}) =>{

    const { mutate, isSuccess, isError } = useDeleteUser(user?.id)

    const deleteUser = (id?:number) =>{
        mutate()
    }

    useEffect(() => {
        if(isSuccess){ 
            toast.success("User deleted" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        isError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [isSuccess, isError])
    

    const handleConfirmation = () => {
        deleteUser(user?.id)
        closeModal()
    }
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="name" label="Name" type="text" value={user?.name} disabled required/>
             <Input id="email" label="Email" type="email" value={user?.email} disabled required/>
             {/* <Select list={["Active","Invited"]} disabled text="Status" value={user?.status}/> */}
             <Select id="role" list={["Admin","Sales Leader", "Sales Rep"]} disabled text="Role" value={user?.role}/>
        </div>
    )

    return (
        <Modal disabled={false} isOpen={isOpen} title="Delete User" label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/>
    )
}

export default DeleteModal;