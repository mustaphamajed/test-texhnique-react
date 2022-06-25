import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPet } from "../redux/actions"
const AddPet = () => {
    const dispatch = useDispatch()
    const category = [
        { name: "cat" },
        { name: "dog" },
        { name: "bird" },
        { name: "rabbit" },
    ]
    const [modal, setModal] = useState(false)
    const [tags, setTags] = useState([])
    const [cat, setCat] = useState(category[0].name)
    const [tag, setTag] = useState("")
    const [name, setName] = useState("")
    const toggleModal = (e) => {
        e.preventDefault();
        setModal(true)
    }

    const addTags = () => {

        tags.push({ id: Math.floor(Math.random() * 100), name: tag })
        setTag("")
        setModal(false)


    }

    const add = (e) => {
        e.preventDefault();

        const data = {
            id: Math.floor(Math.random() * 100),
            name: name,
            category: { id: Math.floor(Math.random() * 100), name: cat },
            tags: tags,
            photoUrls: [
                "test"
            ],
            status: "available"
        }

        dispatch(addPet(data))

    }

    const deleteTag = (e, id) => {
        var aa = [...tags]
        e.preventDefault()
        const indexOfObject = aa.findIndex(object => {
            return object.id === id;

        });

        aa.splice(indexOfObject, 1);
        setTags(aa)
    }

    return (
        <div className="relative flex flex-col    items-center min-w-xl mx-auto  lg:max-w-screen-xl h-screen mt-10">
            <div className='mb-16  lg:max-w-lg bg-opacity-50 lg:mb-0 rounded p-10 bg-gray-50 lg:w-[420px]'>
                <form>
                    <div className="mb-6">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an category</label>
                        <select id="countries"
                            value={cat.name}
                            onChange={(e) => setCat(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            {category.map((c) => {
                                return (
                                    <option value={c.name} key={c.name}>{c.name}</option>
                                )
                            })}
                        </select></div>

                    <div className="mb-6">
                        <div className="flex flex-row ">
                            {tags.map((t) => {
                                return (
                                    <div key={t.id} className=" bg-gray-100 justify-between flex flex-row  font-medium rounded-lg text-sm  py-1 text-center  items-center mr-2 mb-2">
                                        <h1 className="px-2">{t.name}</h1>
                                        <button

                                            onClick={(e) => deleteTag(e, t.id)}>
                                            <svg className="w-4 h-4 mt-1" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                        <button
                            onClick={(e) => toggleModal(e)}
                            className="text-sm font-bold text-blue-500 ">add tag</button>
                    </div>



                    <button type="submit"
                        onClick={(e) => add(e)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

                {
                    modal &&

                    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Add tag
                                    </h3>
                                    <button
                                        onClick={() => setModal(false)}
                                        type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">

                                    <input
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                        type="text" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div className="flex items-center justify-center p-6  rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button
                                        onClick={addTags}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
export default AddPet