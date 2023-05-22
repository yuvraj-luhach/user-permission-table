import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Select from '../select/Select';

import { toast } from 'react-hot-toast'
import { User } from '../../interfaces/User';
import { useEditUser } from '../../hooks/useEditUser';
import { useAddUser } from '../../hooks/useAddUser';

interface EditUserModalProps{
    user?: User
    isOpen: boolean
    title: string
    closeModal: () => void
    onConfimation: () => void
}

const EditUserModal:React.FC<EditUserModalProps> = ({user, isOpen, title, closeModal, onConfimation}) =>{

    const { mutate: eMutate, isSuccess: eSuccess, isError: eError } = useEditUser(user)
    const { mutate: aMutate, isSuccess: aSuccess, isError: aError } = useAddUser(user)

    const editUser = () =>{
        const updatedUser: User = {
            id: user?.id,
            name: (document.getElementById('name') as HTMLInputElement).value,
            img: user?.img,
            email: (document.getElementById('email') as HTMLInputElement).value,
            status: user?.status,
            role: (document.getElementById("role") as HTMLSelectElement).value,
            last_login: user?.last_login
        }

        eMutate(updatedUser)
    }

    useEffect(() => {
        if(eSuccess){ 
            toast.success("User updated" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        eError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [eSuccess, eError])

    const addUser = () =>{
        const newUser: User = {
            id: Math.floor(Math.random() * (400 - 40 + 1)) + 40,
            name: (document.getElementById('name') as HTMLInputElement).value,
            img: (document.getElementById('img') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            status: (document.getElementById("status") as HTMLSelectElement).value,
            role: (document.getElementById("role") as HTMLSelectElement).value,
            last_login: "--/--"
        }

        aMutate(newUser)
    }

    useEffect(() => {
        if(aSuccess){ 
            toast.success("User added" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        aError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [aSuccess, aError])
    

    const handleConfirmation = () => {
        if(title==="Edit user"){
            editUser()
        }else if(title==="Add user"){
            addUser()
        }
        closeModal()
    }
    

    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="name" label="Name" type="text" value={user? user.name: ""} required/>
             <Input id="email" label="Email" type="email" value={user? user.email: ""} required/>
             {title==="Add user" && <Input id="img" label="Image link" type="text" required/>}
             {title==="Add user" && <Select id="status" list={["Active","Invited"]} disabled={false} text="Status"/>}
             <Select id="role" list={["Admin","Sales Leader", "Sales Rep"]} disabled={false} text="Role" value={user?.role}/>
        </div>
    )

    return (
        <Modal isOpen={isOpen} title={title} label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/> 
    )
}

export default EditUserModal;