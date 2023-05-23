import { MdOutlineAdd } from "react-icons/md"
import { BsCloudDownload } from "react-icons/bs"
import { TbArrowsSort } from "react-icons/tb"
import { IoMdArrowBack  , IoMdArrowForward} from "react-icons/io"

import TableRow from "./TableRow";
import { User } from "../../interfaces/User"
import Badge from "../Badge";

import { useState, useEffect } from "react"

import DeleteModal from "../modals/DeleteModal";
import EditUserModal from "../modals/EditUserModal";
import Button from "../button/Button";
import { toast } from "react-hot-toast";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetTotalUser } from "../../hooks/useGetTotalUsers"

const UserTable= () => {

    const [sort, setSort] = useState("")
    const [query, setQuery] = useState("_page=1&_limit=5")
    const [pageNo, setPageNo] = useState(1)
    const [val, setVal] = useState(1)
    const [user, setUser] = useState<User | undefined>(undefined)
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const { data: paginatedData, refetch } = useGetUsers(query)
    const { data: total, refetch: getTotalRefetch } = useGetTotalUser()

    useEffect(() => {
        setTimeout(() => {
            // console.log("latestquery "+ query);
            refetch()
            getTotalRefetch()
            // console.log('refetch');
        }, 500);
    }, [query,editModalOpen,deleteModalOpen])

    useEffect(()=>{
        setTimeout(() => {
            toggleOrder(sort,pageNo)
        }, 700);
    }, [pageNo, val])
   
    function toggleOrder(sortBy:string, pageNo: number) {
        // console.log(sortBy, pageNo, val);
        if(sortBy==="" && val==1){
            setQuery(`_page=${pageNo}&_limit=5`)
        }else if(val==2 && sortBy!==""){
            setQuery(`_sort=${sortBy}&_order=asc&_page=${pageNo}&_limit=5`)
        }
        //     // setSort(sortBy)
        // }else if(val==3 && sortBy!==""){
        //     setQuery(`_sort=${sortBy}&_order=asc&_page=${pageNo}&_limit=5`)
        // }else if(sortBy===sort && val===3){
        //     setQuery(`_page=${pageNo}&_limit=5`)
        //     setVal(1)
        //     setSort("")
        // }
        refetch()
    }

    function newPage(pageNo: number){
        setPageNo(pageNo)
    }

    return (
        <>
            <DeleteModal user={user} isOpen={deleteModalOpen} onConfimation={refetch} closeModal={() => setDeleteModalOpen(false)} />
            
            <EditUserModal user={user} title={user?"Edit user": "Add user"} isOpen={editModalOpen} 
            onConfimation={refetch} 
            closeModal={() => setEditModalOpen(false)} />

            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-indigo-500/40 min-w-full rounded-lg overflow-hidden">
                        <div className="p-5 border-b flex flex-row justify-between border-gray-200">
                            <div className="">
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-2xl font-semibold leading-tight ">Users</h2>
                                    <Badge text={total?.length + " users"} px="px-2" bg1="bg-green-100" textColor="text-green-700"/>
                                </div>
                                <div className="text-neutral-400">Manage your team members and their account permissions here.</div>
                            </div>
                            <div className="gap-4 flex flex-row h-fit">
                                <Button text="Download CSV" icon={BsCloudDownload} classes="gap-2 text-center flex flex-row border-gray-200 border-[2px] text-slate-600 bg-slate-100 rounded-lg px-4 items-center font-semibold hover:bg-slate-100 p-2 " onClick={()=> {toast.error(`This functionality is not yet implemented`, {duration: 4000, style:{background:"rgb(254 205 211)"}})}} />
                                <Button text="Add user" icon={MdOutlineAdd} classes="gap-2 items-center px-4 justify-center flex flex-row  text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-400 p-2 " 
                                onClick={()=> {setUser(undefined); setEditModalOpen(true)}} />
                            </div>
                        </div>
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 items-center justify-center border-gray-200 text-left text-sm font-semibold text-gray-500 tracking-wider">
                                        <div className="flex gap-3">
                                            <span>Name</span>
                                            <Button icon={TbArrowsSort} 
                                            onClick={()=> {
                                                if(sort!=="name"){
                                                    // console.log("ascending");
                                                    setVal(2)
                                                    setSort("name")
                                                    toggleOrder("name",pageNo)
                                                }else{
                                                    setVal(1)
                                                    setSort("")
                                                    toggleOrder("",pageNo)
                                                }
                                                }} />
                                        </div>
                                    </th>
                                    <th className="px-5 py-3 items-center justify-center border-gray-200 text-left text-sm font-semibold text-gray-500 tracking-wider">
                                        <div className="flex gap-3">
                                            <span>Status</span>
                                            <Button icon={TbArrowsSort} 
                                            onClick={()=> {
                                                if(sort!=="status"){
                                                    setVal(2)
                                                    setSort("status")
                                                    toggleOrder("status",pageNo)
                                                }else{
                                                    setVal(1)
                                                    setSort("")
                                                    toggleOrder("",pageNo)
                                                }
                                                }} />
                                        </div>
                                    </th>
                                    <th className="px-5 py-3 items-center justify-center border-gray-200 text-left text-sm font-semibold text-gray-500 tracking-wider">
                                        <div className="flex gap-3">
                                            <span>Role</span>
                                            <Button icon={TbArrowsSort} 
                                            onClick={()=> {
                                                if(sort!=="role"){
                                                    setVal(2)
                                                    setSort("role")
                                                    toggleOrder("role",pageNo)
                                                }else{
                                                    setVal(1)
                                                    setSort("")
                                                    toggleOrder("",pageNo)
                                                }
                                                }} />
                                        </div>
                                    </th>
                                    <th className="px-5 py-3 border-gray-200 text-left text-sm font-semibold text-gray-500 tracking-wider">
                                        Last Login
                                    </th>
                                    <th className="px-5 py-3 border-gray-200 text-left text-sm font-semibold text-gray-500 tracking-wider">Actions</th>
                                </tr>
                            </thead>

                            {paginatedData && 
                                <tbody>  
                                    {paginatedData.map((user, index)=>(
                                        <TableRow key={index} bgColor={index%2===0 ? "bg-transparent": "bg-slate-50"} id={user?.id} name={user.name} img={user?.img} email={user.email} status={user.status} role={user.role} last_login={user.last_login} 
                                        onDelete={()=>{setUser(user); setDeleteModalOpen(true);}} onEdit={()=> {setUser(user); setEditModalOpen(true)}}/>
                                    ))}                                            
                                </tbody>
                            }
                        </table>
                        <div className="p-5 w-full flex flex-row justify-between border-gray-200">
                            <div className="gap-4 flex flex-row justify-between w-full h-fit">
                                <Button text="Previous" icon={IoMdArrowBack} classes="gap-2 text-center flex flex-row border-gray-200 border-[2px] text-slate-600 bg-transparent rounded-lg px-4 items-center font-semibold hover:bg-slate-100 p-2" onClick={()=> {if(pageNo>1) newPage(pageNo-1)} } />
                                
                                {total && 
                                    <div className="flex gap-2">
                                        {Array.from({ length: Math.ceil(total.length/5) }).map((_, index) => (
                                            <Button key={index} text={(index+1).toString()} classes={`gap-2 text-center flex flex-row border-gray-200 border-[1px] text-slate-600 ${pageNo==index+1 && `bg-slate-200`}  rounded-lg px-4 items-center font-semibold hover:bg-slate-100 p-2`} 
                                            onClick={()=> {newPage(index+1)}} />
                                        ))}
                                    </div>
                                }
                                
                                {total &&
                                    <Button text="Next" icon={IoMdArrowForward} classes="gap-2 text-center flex flex-row-reverse border-gray-200 border-[2px] text-slate-600 bg-transparent rounded-lg px-4 items-center font-semibold hover:bg-slate-100 p-2" 
                                    onClick={()=> {{pageNo<Math.ceil(total.length/5) ? setPageNo(pageNo+1): ""}}} />
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UserTable;