import { useState } from 'react'
import {
    BsLink45Deg
} from '../../components/Icon/IconImage'
import UploadForm from '../../components/ui/UploadForm'

const NewsPage = () => {

    const [newsTitle, setNewsTitle] = useState('')
    const [newsType, setNewsType] = useState('')
    const [newsLink, setNewsLink] = useState('')
    const [newsImg, setNewsImg] = useState('') 
    const [enableCreateNewModal, setEnableCreateNewModal] = useState(false)

    const showCreateModalHandler = () => {
        setEnableCreateNewModal(true)
        document.body.style.overflow = 'hidden'
    }

    const closeCreateNewsModalHandler = () => {
        document.body.style.overflow = 'auto'
        setEnableCreateNewModal(false)
    }

    const getNewsTitleHandler = (evt) => {
        setNewsTitle(evt.target.value)
    }

    const getNewsTypeHandler = (evt) => {
        setNewsType(evt.target.value)
    }

    const getNewsLinkHandler = (evt) => {
        setNewsLink(evt.target.value)
    }

    const submitCreateNewsHandler = () => {
        console.log(`${newsTitle}, ${newsType}, ${newsLink}, ${newsImg}`)
    }

    return (
        <>  
            <div className='container flex mt-6'>
                <button className="ml-auto py-2 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                        onClick={() => {showCreateModalHandler()}}>Create News</button>
            </div>
            <div className='container mx-auto mt-4' style={{columnCount: 3, listStyle: 'none'}}>
                
                {new Array(20).fill(true).map((item, idx) => {
                    return (
                        <div key={`item_${idx}`} 
                            className='bg-white shadow-sm rounded-md w-full p-4 flex flex-col box-border mb-3 cursor-pointer' 
                            style={{height: '400px', breakInside: 'avoid'}}>
                            <div className='flex flex-col'>
                                <div className='flex items-center text-sm font-bold'>
                                    <span className='text-purple-600'>OPTIONS</span>
                                    <span className='ml-auto'>2 Days ago</span>
                                </div>
                            </div>
                            <span className='font-bold mt-2'>What Prevents Crypto Payments from Going the Mainstream?</span>
                            <img className='w-full h-full mt-2' src="https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                        </div>
                    )
                })}
            </div>


            
            {enableCreateNewModal && 
                <div id='news-create-modal' className='fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex flex-col text-black z-20'>
                    <div className="w-3/12 m-auto grid" style={{minWidth: '480px'}}>
                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <h2 className="my-6 text-2xl text-gray-700 font-bold">Create News</h2>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Title</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    name='title'
                                    placeholder="Ex. What Prevents Crypto Payments from Going the Mainstream?"
                                    onChange={(evt) => getNewsTitleHandler(evt)}
                                />
                            </label>

                            <div className="mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">News Type</span>
                                <div className="mt-2" onChange={(evt) => getNewsTypeHandler(evt)}>
                                    <label
                                        className="inline-flex items-center text-gray-600 dark:text-gray-400"
                                    >
                                        <input
                                            type="radio"
                                            className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="newsType"
                                            value="options"
                                        />
                                        <span className="ml-2">Options</span>
                                    </label>
                                    <label
                                        className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400"
                                    >
                                        <input
                                            type="radio"
                                            className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="newsType"
                                            value="polls"
                                        />
                                        <span className="ml-2">Polls</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Link</span>
                                    <div
                                        className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
                                    >
                                        <input
                                            className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                            name='link'
                                            placeholder="https://example.com/news"
                                            onChange={(evt) => getNewsLinkHandler(evt)}
                                        />
                                        <div
                                            className="absolute inset-y-0 flex items-center ml-3 pointer-events-none"
                                        >
                                            <BsLink45Deg />
                                        </div>
                                    </div>
                                </label>
                            </div>


                            <div className='mt-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Image</span>
                                    <div className='mt-1'><UploadForm returnVal={setNewsImg} /></div>
                                </label>
                            </div>

                            

                            <div className='mt-4 flex justify-center gap-x-2'>
                                <button className="py-2 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-pink-600 border border-transparent rounded-md active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-pink dark:focus:shadow-outline-gray"
                                        onClick={() => {closeCreateNewsModalHandler()}}>Cancel</button>
                                <button id="file-upload-btn" className="py-2 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        onClick={() => {submitCreateNewsHandler()}}>Submit</button>
                            </div>
                        </div>

                    </div>

                </div>
            }

            
        </>
    )
}

export default NewsPage