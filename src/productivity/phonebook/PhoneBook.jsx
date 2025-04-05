import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { Plus, FileText, Download, Trash2 } from 'lucide-react';
import ContactModal from './ContactModal';
import Loader from '../../loader/Loader';

const PhoneBook = () => {
    const [showAddphonebook, setShowAddphonebook] = useState(false);
    const [title, setTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const mockData = [
        {
            id: 1,
            name: 'Codeyon with',
            phonebook: 'Customers',
            mobile: '19782481662',
            var1: 'one',
            var2: 'two',
            var3: 'three',
            var4: 'four',
            var5: 'five',
            createdAt: '19/10/24'
        },
        {
            id: 2,
            name: 'Codeyon',
            phonebook: 'Customers',
            mobile: '19782481662',
            createdAt: '19/10/24'
        }
    ];

    const [contacts] = useState(mockData);

    useEffect(() => {
        setTimeout(() => setLoading(false), 300);
      }, []);
    
      if (loading) {
        return <Loader />;
      } 

    return (
        <div className="min-h-[50vh] bg-primary-200 w-full">
            <div className="flex flex-col items-center justify-between mb-8">
                <div className="flex justify-start items-center w-full">
                    <img
                        src='https://sonivo.oneoftheprojects.com/assets/phonebook.svg'
                        alt=''
                        className='h-24 w-24'
                    />
                </div>
                <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>

                    <div className='space-y-2 flex flex-col'>
                        <h1 className="text-2xl font-medium text-primary">Phonebook</h1>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Dashboard</span>
                            <span>•</span>
                            <span>Phonebook</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAddphonebook(true)}
                        className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                    >
                        <Plus className='text-background' size={20} />
                        Add Phonebook
                    </button>
                </div>
            </div>
            <div className="rounded-lg">
                <div className="p-4 flex justify-between items-center">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-xl border-[1px] border-primary-400"
                        >
                            <Plus size={18} className='text-primary-500' />
                            <FileText size={18} className='text-primary-500' />
                            <span className='text-sm text-primary-500'>Customers</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl border-[1px] border-primary-400">
                            <Plus size={18} className='text-primary-500' />
                            <FileText size={18} className='text-primary-500' />
                            <span className='text-sm text-primary-500'>Leads</span>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-primary-300 hover:text-primary">
                            <Download size={20} />
                        </button>
                        <button className="p-2 text-primary-300 hover:text-primary">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto bg-background p-5">
                    <table className="w-full">
                        <thead className="">
                            <tr>
                                <th className="w-12 px-4 py-3">
                                    <input type="checkbox" className="rounded" />
                                </th>
                                <th className="px-4 py-3 text-left text-primary-400">Name</th>
                                <th className="px-4 py-3 text-left text-primary-400">Phonebook</th>
                                <th className="px-4 py-3 text-left text-primary-400">Mobile</th>
                                <th className="px-4 py-3 text-left text-primary-400">var1</th>
                                <th className="px-4 py-3 text-left text-primary-400">var2</th>
                                <th className="px-4 py-3 text-left text-primary-400">var3</th>
                                <th className="px-4 py-3 text-left text-primary-400">var4</th>
                                <th className="px-4 py-3 text-left text-primary-400">var5</th>
                                <th className="px-4 py-3 text-left text-primary-400">createdAt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="border-b">
                                    <td className="px-4 py-3">
                                        <input type="checkbox" className="rounded" />
                                    </td>
                                    <td className="px-4 py-3 text-primary-500">{contact.name}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.phonebook}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.mobile}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.var1}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.var2}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.var3}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.var4}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.var5}</td>
                                    <td className="px-4 py-3 text-primary-500">{contact.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            {showAddphonebook && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
                        <div className="bg-background rounded-2xl shadow-lg w-full md:w-[600px]">
                            <div className='flex justify-between mb-4 rounded-t-2xl px-6 py-4 items-center w-full gap-6'>
                                <h2 className="text-lg font-semibold text-center">Add Phonebook</h2>
                                <IoMdClose className='text-gray-600 cursor-pointer' size={20} onClick={() => setShowAddphonebook(false)} />
                            </div>

                            <form className="space-y-4 px-4 pb-4">
                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Phonenbook title
                                    </div>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>

                </>

            )}
        </div>
    )
}

export default PhoneBook