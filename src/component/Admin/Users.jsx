import React, { useState } from 'react';
import styles from '../../styles/users.module.css';
import { IoSearch } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";


const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', blocked: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', blocked: false },
    { id: 3, name: 'Michael Brown', email: 'john@example.com', mobile: '1231231234', blocked: false },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', mobile: '3213214321', blocked: false },
    { id: 5, name: 'Chris Lee', email: 'chris@example.com', mobile: '9876543210', blocked: false },
    { id: 6, name: 'Sara White', email: 'john@example.com', mobile: '6546546543', blocked: false },
    { id: 7, name: 'David Green', email: 'david@example.com', mobile: '1122334455', blocked: false },
    { id: 8, name: 'Anna Brown', email: 'anna@example.com', mobile: '9988776655', blocked: false },
    { id: 9, name: 'Tom Black', email: 'tom@example.com', mobile: '6677889900', blocked: false },
    { id: 10, name: 'Lucy Gray', email: 'lucy@example.com', mobile: '3344556677', blocked: false },
    { id: 11, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', blocked: false },
    { id: 12, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', blocked: false },
    { id: 13, name: 'Michael Brown', email: 'john@example.com', mobile: '1231231234', blocked: false },
    { id: 14, name: 'Emily Johnson', email: 'emily@example.com', mobile: '3213214321', blocked: false },
    { id: 15, name: 'Chris Lee', email: 'chris@example.com', mobile: '9876543210', blocked: false },
    { id: 16, name: 'Sara White', email: 'john@example.com', mobile: '6546546543', blocked: false },
    { id: 17, name: 'David Green', email: 'david@example.com', mobile: '1122334455', blocked: false },
    { id: 18, name: 'Anna Brown', email: 'anna@example.com', mobile: '9988776655', blocked: false },
    { id: 19, name: 'Tom Black', email: 'tom@example.com', mobile: '6677889900', blocked: false },
    { id: 20, name: 'Lucy Gray', email: 'lucy@example.com', mobile: '3344556677', blocked: false },
    { id: 21, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', blocked: false },
    { id: 22, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', blocked: false },
    { id: 23, name: 'Michael Brown', email: 'john@example.com', mobile: '1231231234', blocked: false },
    { id: 24, name: 'Emily Johnson', email: 'emily@example.com', mobile: '3213214321', blocked: false },
    { id: 25, name: 'Chris Lee', email: 'chris@example.com', mobile: '9876543210', blocked: false },
    { id: 26, name: 'Sara White', email: 'john@example.com', mobile: '6546546543', blocked: false },
    { id: 27, name: 'David Green', email: 'david@example.com', mobile: '1122334455', blocked: false },
    { id: 28, name: 'Anna Brown', email: 'anna@example.com', mobile: '9988776655', blocked: false },
    { id: 29, name: 'Tom Black', email: 'tom@example.com', mobile: '6677889900', blocked: false },
    { id: 30, name: 'Lucy Gray', email: 'lucy@example.com', mobile: '3344556677', blocked: false },
];

const Users = () => {


    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const toggleBlockUser = (id) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, blocked: !user.blocked } : user
            )
        );
    };

    const deleteUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);


    return (
        <div className={styles.container}>
            <h2>Users List</h2>

            <div className={styles.searchContainer}>
                <IoSearch />
                <input
                    type="text"
                    placeholder="Search by email"
                    className={styles.searchBox}
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No.</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={user.id}>
                                <td>{indexOfFirstUser + index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td className={styles.actionCell}>
                                    <button
                                        onClick={() => toggleBlockUser(user.id)}
                                        className={`${styles.actionButton} ${user.blocked ? styles.unblock : styles.block}`}
                                    >
                                        {user.blocked ? 'Unblock' : 'Block'}
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className={styles.deleteButton}
                                    >
                                        Delete
                                    </button>
                                    <span className={styles.actionMenuButton}>
                                        <HiOutlineDotsVertical/>

                                        <div className={styles.actionMenu}>
                                            <ul>
                                                <li onClick={() => toggleBlockUser(user.id)}>{user.blocked ? 'Unblock' : 'Block'}</li>
                                                <li onClick={() => deleteUser(user.id)}>Delete</li>
                                            </ul>
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Users






