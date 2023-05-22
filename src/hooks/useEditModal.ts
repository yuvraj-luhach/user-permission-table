// import {useState} from 'react';

import { create } from "zustand";

interface EditModalStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// const useEditModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

// //   const [userId, setUserId] = useState(-1)
  
//   const openModal = (id : number) => {
//     setIsOpen(true)
//     console.log(id)
//     // setUserId(id)
//     // console.log('open edit model');
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return { isOpen, openModal, closeModal };
// };

const useEditModal = create<EditModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({isOpen: true}),
    closeModal: () => set({isOpen: false})
}))
 

export default useEditModal;