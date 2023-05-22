// import { useState } from "react";
import { create } from "zustand";

interface DeleteModalStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// const useConfirmModal = () => {

//     const [isOpen, setIsOpen] = useState(false)
//     // const [userId, setUserId] = useState(-1)

//     const openModal = (id : number) =>{
//         setIsOpen(true);
//         console.log(id);
//         // setUserId(id)
//         // console.log('open confirm model');
//     }

//     const closeModal = () =>{
//         setIsOpen(false)
//     }

//     return {isOpen, openModal, closeModal};
// }

const useConfirmModal = create<DeleteModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({isOpen: true}),
    closeModal: () => set({isOpen: false})
}))
 
export default useConfirmModal;