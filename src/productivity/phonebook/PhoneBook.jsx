// import React, { useEffect, useState } from 'react';
// import { IoMdClose } from 'react-icons/io';
// import { Plus, FileText, Download, Trash2 } from 'lucide-react';
// import { toast } from 'sonner';
// import ContactModal from './ContactModal';
// import Loader from '../../components/loader/Loader';
// import axios from 'axios';

// const BASE_URL = 'http://62.169.31.76:3000';

// const getAuthHeaders = () => ({
//     'Content-Type': 'application/json',
//     'access-token': localStorage.getItem('authToken')
// });

// const PhoneBook = () => {
//     const [showAddphonebook, setShowAddphonebook] = useState(false);
//     const [title, setTitle] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [selectedContacts, setSelectedContacts] = useState([]);
//     const [phonebooks, setPhonebooks] = useState([]);
//     const [selectedPhonebook, setSelectedPhonebook] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const mockData = [
//         {
//             id: 1,
//             name: 'Codeyon with',
//             phonebook: 'Customers',
//             mobile: '19782481662',
//             var1: 'one',
//             var2: 'two',
//             var3: 'three',
//             var4: 'four',
//             var5: 'five',
//             createdAt: '19/10/24'
//         },
//         {
//             id: 2,
//             name: 'Codeyon',
//             phonebook: 'Customers',
//             mobile: '19782481662',
//             var1: '',
//             var2: '',
//             var3: '',
//             var4: '',
//             var5: '',
//             createdAt: '19/10/24'
//         }
//     ];

//     const [contacts, setContacts] = useState(mockData);

//     const fetchPhonebooks = async () => {
//         try {
//             /*
//             const response = await axios.get(`${BASE_URL}/phonebook/get_my_phonebook`, {
//                 headers: getAuthHeaders()
//             });
//             if (response.data.success) {
//                 setPhonebooks(response.data.data || []);
//             }
//             */
//         } catch (error) {
//             console.error('Error fetching phonebooks:', error);
//             toast.error('Failed to fetch phonebooks');
//         }
//     };

//     const fetchContacts = async () => {
//         try {
//             /*
//             const response = await axios.get(`${BASE_URL}/phonebook/get_my_contacts`, {
//                 headers: getAuthHeaders()
//             });
//             if (response.data.success) {
//                 setContacts(response.data.data || []);
//             }
//             */
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//             toast.error('Failed to fetch contacts');
//         }
//     };

//     const handleAddPhonebook = async (e) => {
//         e.preventDefault();
//         if (!title.trim()) {
//             toast.warning('Please enter a phonebook title');
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             /*
//             const response = await axios.post(
//                 `${BASE_URL}/phonebook/add_phonebook`,
//                 { name: title },
//                 { headers: getAuthHeaders() }
//             );
//             if (response.data.success) {
//                 toast.success('Phonebook added successfully');
//                 setShowAddphonebook(false);
//                 setTitle('');
//                 await fetchPhonebooks();
//             }
//             */
//             console.log('Adding phonebook:', title);
//         } catch (error) {
//             console.error('Error adding phonebook:', error);
//             toast.error('Failed to add phonebook');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     useEffect(() => {
//         // Keeping the existing timeout for now
//         setTimeout(() => setLoading(false), 300);

//         // Commented out API calls
//         /*
//         const fetchData = async () => {
//             try {
//                 await Promise.all([
//                     fetchPhonebooks(),
//                     fetchContacts()
//                 ]);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//         */
//     }, []);

//     const toggleSelectContact = (id) => {
//         setSelectedContacts(prev =>
//             prev.includes(id)
//                 ? prev.filter(contactId => contactId !== id)
//                 : [...prev, id]
//         );
//     };

//     const toggleSelectAll = (e) => {
//         if (e.target.checked) {
//             setSelectedContacts(contacts.map(contact => contact.id));
//         } else {
//             setSelectedContacts([]);
//         }
//     };

//     if (loading) {
//         return <Loader />;
//     }

//     return (
//         <div className="min-h-[50vh] bg-primary-200 w-full p-4 md:p-6">
//             <div className="flex flex-col items-center justify-between mb-8">
//                 <div className="flex justify-start items-center w-full">
//                     <img
//                         src='https://sonivo.oneoftheprojects.com/assets/phonebook.svg'
//                         alt=''
//                         className='h-20 w-20 md:h-24 md:w-24'
//                     />
//                 </div>
//                 <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
//                     <div className='space-y-2 flex flex-col'>
//                         <h1 className="text-xl md:text-2xl font-medium text-primary">Phonebook</h1>
//                         <div className="flex items-center gap-2 text-xs text-gray-400">
//                             <span>Dashboard</span>
//                             <span>•</span>
//                             <span>Phonebook</span>
//                         </div>
//                     </div>
//                     <button
//                         onClick={() => setShowAddphonebook(true)}
//                         className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
//                         disabled={isSubmitting}
//                     >
//                         <Plus className='text-background' size={20} />
//                         <span className="hidden sm:inline">Add Phonebook</span>
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg bg-background shadow-sm">
//                 <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div className="flex gap-2 flex-wrap">
//                         <button
//                             onClick={() => {
//                                 setSelectedPhonebook('Customers');
//                                 setIsModalOpen(true);
//                             }}
//                             className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-xl border-[1px] border-primary-400"
//                         >
//                             <Plus size={16} className='text-primary-500' />
//                             <FileText size={16} className='text-primary-500' />
//                             <span className='text-xs md:text-sm text-primary-500'>Customers</span>
//                         </button>
//                         <button
//                             onClick={() => {
//                                 setSelectedPhonebook('Leads');
//                                 setIsModalOpen(true);
//                             }}
//                             className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-xl border-[1px] border-primary-400"
//                         >
//                             <Plus size={16} className='text-primary-500' />
//                             <FileText size={16} className='text-primary-500' />
//                             <span className='text-xs md:text-sm text-primary-500'>Leads</span>
//                         </button>
//                     </div>
//                     <div className="flex gap-2 self-end sm:self-auto">
//                         <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
//                             <Download size={18} />
//                         </button>
//                         <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
//                             <Trash2 size={18} />
//                         </button>
//                     </div>
//                 </div>

//                 <div className="hidden md:block overflow-x-auto p-2 md:p-5">
//                     <table className="w-full">
//                         <thead>
//                             <tr className="border-b">
//                                 <th className="w-12 px-4 py-3">
//                                     <input
//                                         type="checkbox"
//                                         className="rounded"
//                                         checked={selectedContacts.length === contacts.length && contacts.length > 0}
//                                         onChange={toggleSelectAll}
//                                     />
//                                 </th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Name</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Phonebook</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Mobile</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var1</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var2</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var3</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var4</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var5</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Created</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {contacts.map((contact) => (
//                                 <tr key={contact.id} className="border-b hover:bg-gray-50">
//                                     <td className="px-4 py-3">
//                                         <input
//                                             type="checkbox"
//                                             className="rounded"
//                                             checked={selectedContacts.includes(contact.id)}
//                                             onChange={() => toggleSelectContact(contact.id)}
//                                         />
//                                     </td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.name}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.phonebook}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.mobile}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var1 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var2 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var3 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var4 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var5 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.createdAt}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className="md:hidden space-y-3 p-4">
//                     {contacts.map((contact) => (
//                         <div key={contact.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
//                             <div className="flex justify-between items-start">
//                                 <div className="flex items-center gap-3">
//                                     <input
//                                         type="checkbox"
//                                         className="rounded"
//                                         checked={selectedContacts.includes(contact.id)}
//                                         onChange={() => toggleSelectContact(contact.id)}
//                                     />
//                                     <div>
//                                         <h3 className="font-medium text-primary-900">{contact.name}</h3>
//                                         <p className="text-xs text-primary-400">{contact.phonebook}</p>
//                                     </div>
//                                 </div>
//                                 <div className="text-xs text-primary-500">{contact.createdAt}</div>
//                             </div>

//                             <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
//                                 <div>
//                                     <p className="text-xs text-primary-400">Mobile</p>
//                                     <p className="text-primary-600">{contact.mobile}</p>
//                                 </div>
//                                 {contact.var1 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var1</p>
//                                         <p className="text-primary-600">{contact.var1}</p>
//                                     </div>
//                                 )}
//                                 {contact.var2 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var2</p>
//                                         <p className="text-primary-600">{contact.var2}</p>
//                                     </div>
//                                 )}
//                                 {contact.var3 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var3</p>
//                                         <p className="text-primary-600">{contact.var3}</p>
//                                     </div>
//                                 )}
//                                 {contact.var4 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var4</p>
//                                         <p className="text-primary-600">{contact.var4}</p>
//                                     </div>
//                                 )}
//                                 {contact.var5 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var5</p>
//                                         <p className="text-primary-600">{contact.var5}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <ContactModal
//                 isOpen={isModalOpen}
//                 onClose={() => {
//                     setIsModalOpen(false);
//                     setSelectedPhonebook(null);
//                 }}
//                 onSuccess={fetchContacts}
//                 phonebookId={selectedPhonebook}
//             />

//             {showAddphonebook && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999] p-4">
//                     <div className="bg-background rounded-2xl shadow-lg w-full max-w-md">
//                         <div className='flex justify-between items-center p-4 border-b'>
//                             <h2 className="text-lg font-semibold">Add Phonebook</h2>
//                             <button
//                                 onClick={() => setShowAddphonebook(false)}
//                                 className="text-gray-600 hover:text-gray-800"
//                                 disabled={isSubmitting}
//                             >
//                                 <IoMdClose size={20} />
//                             </button>
//                         </div>

//                         <form onSubmit={handleAddPhonebook} className="space-y-4 p-4">
//                             <div className="relative group">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Phonebook title
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                     className="w-full px-3 py-2 text-sm rounded-md bg-background border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//                                     placeholder="Enter phonebook title"
//                                     disabled={isSubmitting}
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full text-sm bg-primary-400 text-background py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
//                                 disabled={isSubmitting}
//                             >
//                                 {isSubmitting ? 'Saving...' : 'Save'}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PhoneBook;



// import React, { useEffect, useState } from 'react';
// import { IoMdClose } from 'react-icons/io';
// import { Plus, FileText, Download, Trash2 } from 'lucide-react';
// import { toast } from 'sonner';
// import ContactModal from './ContactModal';
// import Loader from '../../components/loader/Loader';

// const BASE_URL = 'https://vokal-api.oyelabs.com';

// const PhoneBook = () => {
//     const [showAddphonebook, setShowAddphonebook] = useState(false);
//     const [title, setTitle] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [selectedContacts, setSelectedContacts] = useState([]);
//     const [phonebooks, setPhonebooks] = useState([]);
//     const [contacts, setContacts] = useState([]);
//     const [selectedPhonebook, setSelectedPhonebook] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const fetchPhonebooks = async () => {
//         try {
//             const response = await fetch(`${BASE_URL}/phonebook/get_my_phonebook`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access-token': localStorage.getItem('authToken')
//                 }
//             });
//             const data = await response.json();

//             if (data.success) {
//                 setPhonebooks(data.data || []);
//             } else {
//                 toast.error(data.message || 'Failed to fetch phonebooks');
//             }
//         } catch (error) {
//             console.error('Error fetching phonebooks:', error);
//             toast.error('Failed to fetch phonebooks');
//         }
//     };

//     const fetchContacts = async () => {
//         try {
//             const response = await fetch(`${BASE_URL}/phonebook/get_my_contacts`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access-token': localStorage.getItem('authToken')
//                 }
//             });
//             const data = await response.json();

//             if (data.success) {
//                 setContacts(data.data || []);
//             } else {
//                 toast.error(data.message || 'Failed to fetch contacts');
//             }
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//             toast.error('Failed to fetch contacts');
//         }
//     };

//     const handleAddPhonebook = async (e) => {
//         e.preventDefault();
//         if (!title.trim()) {
//             toast.warning('Please enter a phonebook title');
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const response = await fetch(`${BASE_URL}/phonebook/add_phonebook`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access-token': localStorage.getItem('authToken')
//                 },
//                 body: JSON.stringify({ name: title })
//             });

//             const data = await response.json();

//             if (data.success) {
//                 toast.success('Phonebook added successfully');
//                 setShowAddphonebook(false);
//                 setTitle('');
//                 await fetchPhonebooks();
//             } else {
//                 toast.error(data.message || 'Failed to add phonebook');
//             }
//         } catch (error) {
//             console.error('Error adding phonebook:', error);
//             toast.error('Failed to add phonebook');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 await Promise.all([
//                     fetchPhonebooks(),
//                     fetchContacts()
//                 ]);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     const toggleSelectContact = (id) => {
//         setSelectedContacts(prev =>
//             prev.includes(id)
//                 ? prev.filter(contactId => contactId !== id)
//                 : [...prev, id]
//         );
//     };

//     const toggleSelectAll = (e) => {
//         if (e.target.checked) {
//             setSelectedContacts(contacts.map(contact => contact.id));
//         } else {
//             setSelectedContacts([]);
//         }
//     };

//     if (loading) {
//         return <Loader />;
//     }

//     return (
//         <div className="min-h-[50vh] bg-primary-200 w-full p-4 md:p-6">
//             <div className="flex flex-col items-center justify-between mb-8">
//                 <div className="flex justify-start items-center w-full">
//                     <img
//                         src='https://sonivo.oneoftheprojects.com/assets/phonebook.svg'
//                         alt=''
//                         className='h-20 w-20 md:h-24 md:w-24'
//                     />
//                 </div>
//                 <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
//                     <div className='space-y-2 flex flex-col'>
//                         <h1 className="text-xl md:text-2xl font-medium text-primary">Phonebook</h1>
//                         <div className="flex items-center gap-2 text-xs text-gray-400">
//                             <span>Dashboard</span>
//                             <span>•</span>
//                             <span>Phonebook</span>
//                         </div>
//                     </div>
//                     <button
//                         onClick={() => setShowAddphonebook(true)}
//                         className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
//                         disabled={isSubmitting}
//                     >
//                         <Plus className='text-background' size={20} />
//                         <span className="hidden sm:inline">Add Phonebook</span>
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg bg-background shadow-sm">
//                 <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div className="flex gap-2 flex-wrap">
//                         {phonebooks.map((phonebook) => (
//                             <button
//                                 key={phonebook.id}
//                                 onClick={() => {
//                                     setSelectedPhonebook(phonebook.id);
//                                     setIsModalOpen(true);
//                                 }}
//                                 className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-xl border-[1px] border-primary-400"
//                             >
//                                 <Plus size={16} className='text-primary-500' />
//                                 <FileText size={16} className='text-primary-500' />
//                                 <span className='text-xs md:text-sm text-primary-500'>{phonebook.name}</span>
//                             </button>
//                         ))}
//                     </div>
//                     <div className="flex gap-2 self-end sm:self-auto">
//                         <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
//                             <Download size={18} />
//                         </button>
//                         <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
//                             <Trash2 size={18} />
//                         </button>
//                     </div>
//                 </div>

//                 <div className="hidden md:block overflow-x-auto p-2 md:p-5">
//                     <table className="w-full">
//                         <thead>
//                             <tr className="border-b">
//                                 <th className="w-12 px-4 py-3">
//                                     <input
//                                         type="checkbox"
//                                         className="rounded"
//                                         checked={selectedContacts.length === contacts.length && contacts.length > 0}
//                                         onChange={toggleSelectAll}
//                                     />
//                                 </th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Name</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Phonebook</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Mobile</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var1</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var2</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var3</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var4</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Var5</th>
//                                 <th className="px-4 py-3 text-left text-sm text-primary-400">Created</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {contacts.map((contact) => (
//                                 <tr key={contact.id} className="border-b hover:bg-gray-50">
//                                     <td className="px-4 py-3">
//                                         <input
//                                             type="checkbox"
//                                             className="rounded"
//                                             checked={selectedContacts.includes(contact.id)}
//                                             onChange={() => toggleSelectContact(contact.id)}
//                                         />
//                                     </td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.name}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.phonebook}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.mobile}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var1 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var2 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var3 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var4 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.var5 || '-'}</td>
//                                     <td className="px-4 py-3 text-sm text-primary-500">{contact.createdAt}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className="md:hidden space-y-3 p-4">
//                     {contacts.map((contact) => (
//                         <div key={contact.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
//                             <div className="flex justify-between items-start">
//                                 <div className="flex items-center gap-3">
//                                     <input
//                                         type="checkbox"
//                                         className="rounded"
//                                         checked={selectedContacts.includes(contact.id)}
//                                         onChange={() => toggleSelectContact(contact.id)}
//                                     />
//                                     <div>
//                                         <h3 className="font-medium text-primary-900">{contact.name}</h3>
//                                         <p className="text-xs text-primary-400">{contact.phonebook}</p>
//                                     </div>
//                                 </div>
//                                 <div className="text-xs text-primary-500">{contact.createdAt}</div>
//                             </div>

//                             <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
//                                 <div>
//                                     <p className="text-xs text-primary-400">Mobile</p>
//                                     <p className="text-primary-600">{contact.mobile}</p>
//                                 </div>
//                                 {contact.var1 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var1</p>
//                                         <p className="text-primary-600">{contact.var1}</p>
//                                     </div>
//                                 )}
//                                 {contact.var2 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var2</p>
//                                         <p className="text-primary-600">{contact.var2}</p>
//                                     </div>
//                                 )}
//                                 {contact.var3 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var3</p>
//                                         <p className="text-primary-600">{contact.var3}</p>
//                                     </div>
//                                 )}
//                                 {contact.var4 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var4</p>
//                                         <p className="text-primary-600">{contact.var4}</p>
//                                     </div>
//                                 )}
//                                 {contact.var5 && (
//                                     <div>
//                                         <p className="text-xs text-primary-400">Var5</p>
//                                         <p className="text-primary-600">{contact.var5}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <ContactModal
//                 isOpen={isModalOpen}
//                 onClose={() => {
//                     setIsModalOpen(false);
//                     setSelectedPhonebook(null);
//                 }}
//                 onSuccess={fetchContacts}
//                 phonebookId={selectedPhonebook}
//             />

//             {showAddphonebook && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999] p-4">
//                     <div className="bg-background rounded-2xl shadow-lg w-full max-w-md">
//                         <div className='flex justify-between items-center p-4 border-b'>
//                             <h2 className="text-lg font-semibold">Add Phonebook</h2>
//                             <button
//                                 onClick={() => setShowAddphonebook(false)}
//                                 className="text-gray-600 hover:text-gray-800"
//                                 disabled={isSubmitting}
//                             >
//                                 <IoMdClose size={20} />
//                             </button>
//                         </div>

//                         <form onSubmit={handleAddPhonebook} className="space-y-4 p-4">
//                             <div className="relative group">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Phonebook title
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                     className="w-full px-3 py-2 text-sm rounded-md bg-background border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//                                     placeholder="Enter phonebook title"
//                                     disabled={isSubmitting}
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full text-sm bg-primary-400 text-background py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
//                                 disabled={isSubmitting}
//                             >
//                                 {isSubmitting ? 'Saving...' : 'Save'}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PhoneBook;


import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Plus, FileText, Download, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import ContactModal from './ContactModal';
import Loader from '../../components/loader/Loader';

const BASE_URL = 'https://vokal-api.oyelabs.com';

const PhoneBook = () => {
    const [showAddphonebook, setShowAddphonebook] = useState(false);
    const [title, setTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [phonebooks, setPhonebooks] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [selectedPhonebook, setSelectedPhonebook] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchPhonebooks = async () => {
        try {
            const response = await fetch(`${BASE_URL}/phonebook/get_my_phonebook`, {
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': localStorage.getItem('authToken')
                }
            });
            const data = await response.json();

            if (data.success) {
                setPhonebooks(data.data || []);
            } else {
                toast.error(data.message || 'Failed to fetch phonebooks');
            }
        } catch (error) {
            console.error('Error fetching phonebooks:', error);
            toast.error('Failed to fetch phonebooks');
        }
    };

    const fetchContacts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/phonebook/get_my_contacts`, {
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': localStorage.getItem('authToken')
                }
            });
            const data = await response.json();

            if (data.success) {
                setContacts(data.data || []);
            } else {
                toast.error(data.message || 'Failed to fetch contacts');
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
            toast.error('Failed to fetch contacts');
        }
    };

    const handleAddPhonebook = async (e) => {
        e.preventDefault();
        if (!title.trim()) {
            toast.warning('Please enter a phonebook title');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`${BASE_URL}/phonebook/add_phonebook`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': localStorage.getItem('authToken')
                },
                body: JSON.stringify({
                    name: title,
                    // plan_id: localStorage.getItem('planId') // Add plan_id from localStorage
                })
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Phonebook added successfully');
                setShowAddphonebook(false);
                setTitle('');
                await fetchPhonebooks();
            } else {
                toast.error(data.message || 'Failed to add phonebook');
            }
        } catch (error) {
            console.error('Error adding phonebook:', error);
            toast.error('Failed to add phonebook');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    fetchPhonebooks(),
                    fetchContacts()
                ]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const toggleSelectContact = (id) => {
        setSelectedContacts(prev =>
            prev.includes(id)
                ? prev.filter(contactId => contactId !== id)
                : [...prev, id]
        );
    };

    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedContacts(contacts.map(contact => contact.id));
        } else {
            setSelectedContacts([]);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-[50vh] bg-primary-200 w-full p-4 md:p-6">
            <div className="flex flex-col items-center justify-between mb-8">
                <div className="flex justify-start items-center w-full">
                    <img
                        src='https://sonivo.oneoftheprojects.com/assets/phonebook.svg'
                        alt=''
                        className='h-20 w-20 md:h-24 md:w-24'
                    />
                </div>
                <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
                    <div className='space-y-2 flex flex-col'>
                        <h1 className="text-xl md:text-2xl font-medium text-primary">Phonebook</h1>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Dashboard</span>
                            <span>•</span>
                            <span>Phonebook</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAddphonebook(true)}
                        className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                    >
                        <Plus className='text-background' size={20} />
                        <span className="hidden sm:inline">Add Phonebook</span>
                    </button>
                </div>
            </div>

            <div className="rounded-lg bg-background shadow-sm">
                <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => {
                                setSelectedPhonebook('Customers');
                                setIsModalOpen(true);
                            }}
                            className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-xl border-[1px] border-primary-400"
                        >
                            <Plus size={16} className='text-primary-500' />
                            <FileText size={16} className='text-primary-500' />
                            <span className='text-xs md:text-sm text-primary-500'>Customers</span>
                        </button>
                        <button
                            onClick={() => {
                                setSelectedPhonebook('Leads');
                                setIsModalOpen(true);
                            }}
                            className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-xl border-[1px] border-primary-400"
                        >
                            <Plus size={16} className='text-primary-500' />
                            <FileText size={16} className='text-primary-500' />
                            <span className='text-xs md:text-sm text-primary-500'>Leads</span>
                        </button>
                    </div>
                    <div className="flex gap-2 self-end sm:self-auto">
                        <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
                            <Download size={18} />
                        </button>
                        <button className="p-1.5 md:p-2 text-primary-300 hover:text-primary">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="hidden md:block overflow-x-auto p-2 md:p-5">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="w-12 px-4 py-3">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                        checked={selectedContacts.length === contacts.length && contacts.length > 0}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Name</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Phonebook</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Mobile</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Var1</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Var2</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Var3</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Var4</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Var5</th>
                                <th className="px-4 py-3 text-left text-sm text-primary-400">Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            checked={selectedContacts.includes(contact.id)}
                                            onChange={() => toggleSelectContact(contact.id)}
                                        />
                                    </td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.name}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.phonebook}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.mobile}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.var1 || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.var2 || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.var3 || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.var4 || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.var5 || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-primary-500">{contact.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden space-y-3 p-4">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                        checked={selectedContacts.includes(contact.id)}
                                        onChange={() => toggleSelectContact(contact.id)}
                                    />
                                    <div>
                                        <h3 className="font-medium text-primary-900">{contact.name}</h3>
                                        <p className="text-xs text-primary-400">{contact.phonebook}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-primary-500">{contact.createdAt}</div>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="text-xs text-primary-400">Mobile</p>
                                    <p className="text-primary-600">{contact.mobile}</p>
                                </div>
                                {contact.var1 && (
                                    <div>
                                        <p className="text-xs text-primary-400">Var1</p>
                                        <p className="text-primary-600">{contact.var1}</p>
                                    </div>
                                )}
                                {contact.var2 && (
                                    <div>
                                        <p className="text-xs text-primary-400">Var2</p>
                                        <p className="text-primary-600">{contact.var2}</p>
                                    </div>
                                )}
                                {contact.var3 && (
                                    <div>
                                        <p className="text-xs text-primary-400">Var3</p>
                                        <p className="text-primary-600">{contact.var3}</p>
                                    </div>
                                )}
                                {contact.var4 && (
                                    <div>
                                        <p className="text-xs text-primary-400">Var4</p>
                                        <p className="text-primary-600">{contact.var4}</p>
                                    </div>
                                )}
                                {contact.var5 && (
                                    <div>
                                        <p className="text-xs text-primary-400">Var5</p>
                                        <p className="text-primary-600">{contact.var5}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedPhonebook(null);
                }}
                onSuccess={fetchContacts}
                phonebookId={selectedPhonebook}
            />

            {showAddphonebook && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999] p-4">
                    <div className="bg-background rounded-2xl shadow-lg w-full max-w-md">
                        <div className='flex justify-between items-center p-4 border-b'>
                            <h2 className="text-lg font-semibold">Add Phonebook</h2>
                            <button
                                onClick={() => setShowAddphonebook(false)}
                                className="text-gray-600 hover:text-gray-800"
                                disabled={isSubmitting}
                            >
                                <IoMdClose size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleAddPhonebook} className="space-y-4 p-4">
                            <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phonebook title
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-3 py-2 text-sm rounded-md bg-background border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                    placeholder="Enter phonebook title"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-sm bg-primary-400 text-background py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhoneBook;