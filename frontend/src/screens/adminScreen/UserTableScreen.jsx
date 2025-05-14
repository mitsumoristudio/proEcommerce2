
import {useState} from "react";
import {motion} from "framer-motion";
import { CiSearch } from "react-icons/ci";
import {toast} from "react-toastify";
// import {NavLink} from "react-router-dom";
import {useGetAllUsersQuery, useDeleteUserMutation} from "../../features/slices/userApiSlice";
import CustomLoader from "../../components/CustomLoader";
import Meta from "../../components/Meta";

// const mockUserData = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
//     { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
//     { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Customer", status: "Active" },
// ]

export default function UserTableScreen() {
    const {data: users, isLoading, isError, refetch} = useGetAllUsersQuery();
    const [deletedUser, {isLoading: loadingDelete}] = useDeleteUserMutation();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);

    const deleteHandler = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deletedUser(userId);
                toast.success("User deleted successfully.");
                refetch();
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    }

    const handleSearch = (e) => {
        const term =e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = users.filter((user) => user.name.toLowerCase().includes(term));
        setFilteredUsers(filtered);
    }

    return (
        <>
            <Meta title={"Users Table"} />
            {isLoading ? (
                <CustomLoader />
            ) : isError ? (
                <div>{isError?.data?.message || isError.error}</div>
            ) : loadingDelete ? (
                <CustomLoader />
            ) :
                (
                <motion.div
                    className='mx-4 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-600 mt-6 px-4 py-2'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Search users...'
                                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <CiSearch className='absolute left-3 top-2.5 text-gray-400' size={18}/>
                        </div>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-gray-700'>
                            <thead>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Name
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Email
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Role (Admin)
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Status
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Actions
                                </th>
                            </tr>
                            </thead>

                            <tbody className='divide-y divide-gray-700'>
                            {filteredUsers?.map((user) => (
                                <motion.tr
                                    key={user.id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                >
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <div className='flex-shrink-0 h-10 w-10'>
                                                <div
                                                    className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                                    {user.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div className='ml-4'>
                                                <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{user.email}</div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
									<span
                                        className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{user.isAdmin ? "Yes" : "No"}
									</span>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
									<span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.status === "Active"
                                                ? "bg-green-800 text-green-100"
                                                : "bg-red-800 text-red-100"
                                        }`}
                                    >
										{user.status}
									</span>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                        {/*<NavLink to={`/admin/user/${user._id}/edit`}>*/}
                                        {/*    <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>*/}
                                        {/*</NavLink>*/}


                                        <button className='text-red-400 hover:text-red-300'
                                                onClick={() => deleteHandler(user._id)}>Delete
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

        </>
    )
}