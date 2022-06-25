import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../components/modal";
import Spinner from "../components/Spinner";
import UpdateModal from "../components/updateModal";
import { deletePet, getAllPets } from "../redux/actions";
const status = [
    { id: 1, name: "available" },
    { id: 2, name: "pending" },
    { id: 3, name: "sold" },
]
const Home = () => {
    const dispatch = useDispatch()
    const pets = useSelector(state => state.pet.pets)
    const loading = useSelector(state => state.pet.loading)
    const [stat, setStat] = useState("available")
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [id, setId] = useState()
    const [item, setItem] = useState()
    const handleClick = (e) => {
        e.preventDefault();
        setModal(true)
        const id = e.target.value
        setId(id)
        dispatch(getAllPets(stat))
    }
    const toggleModal1 = (e, p) => {
        e.preventDefault();
        setModal1(true)
        setItem(p)
    }

    const changeStatus = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const s = e.target.value
        setStat(s)
    }
    useEffect(() => {

        dispatch(getAllPets(stat))
    }, [stat, modal])

    return (
        <div className="h-full bg-gray-100">

            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-5 mx-auto">
                    <div className="text-center mb-12 flex flex-row justify-center ">

                        {status.map((s, i) => {
                            return (
                                <div key={i} >
                                    <button value={s.name}
                                        className={`${s.name === stat ? 'text-blue-500 font-bold  p-4' : ' p-4'}`}
                                        onClick={(e) => changeStatus(e)}>{s.name}</button>
                                </div>

                            )
                        })}
                    </div>
                    <div className="flex flex-wrap -m-4">

                        {pets.map((p, i) => {
                            return (
                                <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4" key={i}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                            src="https://picsum.photos/id/188/720/400" alt="blog" />
                                        <div className="p-6  transition duration-300 ease-in">
                                            <h2 className="text-base font-medium text-indigo-300 mb-1">{p.category && p.category.name ? p.category.name : "string"}</h2>
                                            <h2 className="text-base font-medium text-indigo-300 mb-1">{p.status}</h2>
                                            <h1 className="text-2xl font-semibold mb-3">{p.name}</h1>
                                            {p.tags.map((t, i) => {
                                                return (
                                                    <p className="leading-relaxed mb-3" key={i}>{t.name}</p>
                                                )
                                            })}

                                            <div className="flex items-center flex-wrap ">

                                                <button
                                                    onClick={(e) => toggleModal1(e, p)}
                                                    className="bg-blue-500  text-white font-bold py-2 px-4 rounded-md">
                                                    update
                                                </button>
                                                <button

                                                    value={p.id}
                                                    onClick={(e) => handleClick(e)}
                                                    className="bg-red-500  text-white font-bold py-2 px-4 rounded-md">
                                                    delete
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {modal && <Modal setModal={setModal} id={id} />}
                    {modal1 && <UpdateModal setModal1={setModal1} item={item} />}
                </div>

            </section>

        </div>
    )
}
export default Home