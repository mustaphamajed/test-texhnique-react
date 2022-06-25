import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePet } from "../redux/actions";

const UpdateModal = ({ setModal1, item }) => {
    const [name, setName] = useState(item.name)
    const dispatch = useDispatch()
    const update = (e) => {
        e.preventDefault();

        setName(e.target.value)
        const data = {
            id: item.id,

            name: name

        }
        dispatch(updatePet(data))
        setModal1(false)
        window.location.reload()

    }
    return (
        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Update
                        </h3>
                        <button
                            onClick={() => setModal1(false)}
                            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-1">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>


                    <div className="flex items-center justify-center p-6  rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={(e) => update(e)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateModal