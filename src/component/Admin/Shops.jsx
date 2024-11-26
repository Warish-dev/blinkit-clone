import React, { useState } from 'react';
import styles from '../../styles/shops.module.css';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import AddShopForm from '../Admin/AddShopForm';

const initialShops = [
    { id: 1, name: 'Shop One', owner: 'Alice', email: 'alice@shopone.com', phone: '1111111111', totalProducts: 120, location: 'New York', registrationDate: '2023-01-12', status: 'Active', blocked: false },
    { id: 2, name: 'Shop Two', owner: 'Bob', email: 'bob@shoptwo.com', phone: '2222222222', totalProducts: 85, location: 'Los Angeles', registrationDate: '2022-11-08', status: 'Active', blocked: false },
    { id: 3, name: 'Shop Three', owner: 'Charlie', email: 'charlie@shopthree.com', phone: '3333333333', totalProducts: 200, location: 'Chicago', registrationDate: '2022-05-19', status: 'Inactive', blocked: true },
    { id: 4, name: 'Shop Four', owner: 'David', email: 'david@shopfour.com', phone: '4444444444', totalProducts: 300, location: 'Houston', registrationDate: '2023-03-15', status: 'Active', blocked: false },
    { id: 5, name: 'Shop Five', owner: 'Emma', email: 'emma@shopfive.com', phone: '5555555555', totalProducts: 150, location: 'Phoenix', registrationDate: '2022-08-07', status: 'Active', blocked: false },
    { id: 6, name: 'Shop Six', owner: 'Fiona', email: 'fiona@shopsix.com', phone: '6666666666', totalProducts: 60, location: 'Philadelphia', registrationDate: '2023-01-25', status: 'Inactive', blocked: true },
    { id: 7, name: 'Shop Seven', owner: 'George', email: 'george@shopseven.com', phone: '7777777777', totalProducts: 110, location: 'San Antonio', registrationDate: '2023-02-18', status: 'Active', blocked: false },
    { id: 8, name: 'Shop Eight', owner: 'Hannah', email: 'hannah@shopeight.com', phone: '8888888888', totalProducts: 95, location: 'San Diego', registrationDate: '2023-04-12', status: 'Inactive', blocked: true },
    { id: 9, name: 'Shop Nine', owner: 'Irene', email: 'irene@shopnine.com', phone: '9999999999', totalProducts: 240, location: 'Dallas', registrationDate: '2023-07-10', status: 'Active', blocked: false },
    { id: 10, name: 'Shop Ten', owner: 'Jack', email: 'jack@shopten.com', phone: '1010101010', totalProducts: 180, location: 'Austin', registrationDate: '2022-10-25', status: 'Active', blocked: false },
    { id: 11, name: 'Shop Eleven', owner: 'Kelly', email: 'kelly@shopeleven.com', phone: '1112223334', totalProducts: 50, location: 'Jacksonville', registrationDate: '2022-12-15', status: 'Inactive', blocked: true },
    { id: 12, name: 'Shop Twelve', owner: 'Liam', email: 'liam@shoptwelve.com', phone: '1115556667', totalProducts: 300, location: 'Fort Worth', registrationDate: '2023-08-22', status: 'Active', blocked: false },
    { id: 13, name: 'Shop Thirteen', owner: 'Mia', email: 'mia@shopthirteen.com', phone: '2224445556', totalProducts: 230, location: 'Columbus', registrationDate: '2022-04-11', status: 'Inactive', blocked: true },
    { id: 14, name: 'Shop Fourteen', owner: 'Noah', email: 'noah@shopfourteen.com', phone: '3336667778', totalProducts: 75, location: 'Charlotte', registrationDate: '2023-01-30', status: 'Active', blocked: false },
    { id: 15, name: 'Shop Fifteen', owner: 'Olivia', email: 'olivia@shopfifteen.com', phone: '4448889990', totalProducts: 40, location: 'San Francisco', registrationDate: '2023-09-05', status: 'Active', blocked: false },
    { id: 16, name: 'Shop Sixteen', owner: 'Paul', email: 'paul@shopsixteen.com', phone: '5551112223', totalProducts: 310, location: 'Indianapolis', registrationDate: '2023-05-22', status: 'Inactive', blocked: true },
    { id: 17, name: 'Shop Seventeen', owner: 'Quinn', email: 'quinn@shopseventeen.com', phone: '6663334445', totalProducts: 115, location: 'Seattle', registrationDate: '2022-09-15', status: 'Active', blocked: false },
    { id: 18, name: 'Shop Eighteen', owner: 'Ryan', email: 'ryan@shopeighteen.com', phone: '7775556669', totalProducts: 140, location: 'Denver', registrationDate: '2023-02-01', status: 'Inactive', blocked: true },
    { id: 19, name: 'Shop Nineteen', owner: 'Sophia', email: 'sophia@shopnineteen.com', phone: '8887771110', totalProducts: 90, location: 'Washington D.C.', registrationDate: '2022-10-12', status: 'Active', blocked: false },
    { id: 20, name: 'Shop Twenty', owner: 'Thomas', email: 'thomas@shoptwenty.com', phone: '9993338881', totalProducts: 200, location: 'Boston', registrationDate: '2023-07-21', status: 'Active', blocked: false },
    { id: 21, name: 'Shop Twenty-One', owner: 'Uma', email: 'uma@shop21.com', phone: '1234567891', totalProducts: 100, location: 'El Paso', registrationDate: '2023-03-02', status: 'Active', blocked: false },
    { id: 22, name: 'Shop Twenty-Two', owner: 'Violet', email: 'violet@shop22.com', phone: '2345678910', totalProducts: 170, location: 'Detroit', registrationDate: '2023-08-03', status: 'Inactive', blocked: true },
    { id: 23, name: 'Shop Twenty-Three', owner: 'Wendy', email: 'wendy@shop23.com', phone: '3456789102', totalProducts: 140, location: 'Memphis', registrationDate: '2023-04-14', status: 'Active', blocked: false },
    { id: 24, name: 'Shop Twenty-Four', owner: 'Xander', email: 'xander@shop24.com', phone: '4567891012', totalProducts: 85, location: 'Nashville', registrationDate: '2023-06-06', status: 'Active', blocked: false },
    { id: 25, name: 'Shop Twenty-Five', owner: 'Yara', email: 'yara@shop25.com', phone: '5678910123', totalProducts: 60, location: 'Portland', registrationDate: '2022-12-01', status: 'Inactive', blocked: true },
    { id: 26, name: 'Shop Twenty-Six', owner: 'Zach', email: 'zach@shop26.com', phone: '6789101234', totalProducts: 50, location: 'Oklahoma City', registrationDate: '2023-02-22', status: 'Active', blocked: false },
    { id: 27, name: 'Shop Twenty-Seven', owner: 'Anna', email: 'anna@shop27.com', phone: '7891012345', totalProducts: 150, location: 'Las Vegas', registrationDate: '2023-05-16', status: 'Inactive', blocked: true },
    { id: 28, name: 'Shop Twenty-Eight', owner: 'Brian', email: 'brian@shop28.com', phone: '8910123456', totalProducts: 210, location: 'Louisville', registrationDate: '2023-03-07', status: 'Active', blocked: false },
    { id: 29, name: 'Shop Twenty-Nine', owner: 'Cara', email: 'cara@shop29.com', phone: '9101234567', totalProducts: 75, location: 'Baltimore', registrationDate: '2023-08-18', status: 'Active', blocked: false },
    { id: 30, name: 'Shop Thirty', owner: 'Dean', email: 'dean@shop30.com', phone: '1012345678', totalProducts: 65, location: 'Milwaukee', registrationDate: '2023-01-05', status: 'Inactive', blocked: true },
];



const Shops = () => {
    
//   const [showAddShopForm, setshowAddShopForm] = useState(false);

const [isFormOpen, setIsFormOpen] = useState(false);

// Function to toggle form visibility
const toggleForm = () => {
  setIsFormOpen(true);
};
 

    const [shops, setShops] = useState(initialShops);
    const [searchTerm, setSearchTerm] = useState('');
    const [shopName, setShopName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [totalProducts, setTotalProducts] = useState('');
    const [location, setLocation] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const shopsPerPage = 10;

    const addShop = () => {
        if (shopName && ownerName && email && phone && totalProducts && location) {
            const newShop = {
                id: shops.length + 1,
                name: shopName,
                owner: ownerName,
                email,
                phone,
                totalProducts: parseInt(totalProducts, 10),
                location,
                registrationDate: new Date().toISOString().split('T')[0],
                status: 'Active',
                blocked: false,
            };
            setShops([...shops, newShop]);
            setShopName('');
            setOwnerName('');
            setEmail('');
            setPhone('');
            setTotalProducts('');
            setLocation('');
        }
    };

    const toggleBlockShop = (id) => {
        setShops((prevShops) =>
            prevShops.map((shop) =>
                shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
            )
        );
    };

    const deleteShop = (id) => {
        setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const filteredShops = shops.filter((shop) =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastShop = currentPage * shopsPerPage;
    const indexOfFirstShop = indexOfLastShop - shopsPerPage;
    const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

    const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    

     const addShopForm = () =>{
        
     }

    return (
        <div className={styles.container}>
             
              {
        isFormOpen &&
        <AddShopForm setIsFormOpen={setIsFormOpen}/>
      } 

            <h2>Shops List</h2>

            <div className={styles.topContainer}>
                <div className={styles.searchContainer}>
                    <IoSearch />
                    <input
                        type="text"
                        placeholder="Search by shop name"
                        className={styles.searchBox}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <button onClick={toggleForm}>Add Shop</button>
            </div>

            {/* Add New Shop Form */}
            {/* <div className={styles.addShopForm}>
                <input type="text" placeholder="Shop Name" value={shopName} onChange={(e) => setShopName(e.target.value)} className={styles.inputField} />
                <input type="text" placeholder="Owner Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className={styles.inputField} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} />
                <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.inputField} />
                <input type="number" placeholder="Total Products" value={totalProducts} onChange={(e) => setTotalProducts(e.target.value)} className={styles.inputField} />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className={styles.inputField} />
                <button onClick={addShop} className={styles.addButton}>Add Shop</button>
            </div> */}

            {/* Search and Table */}

            <div className={styles.tableContainer}>
                <table className={styles.shopTable}>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Shop Name</th>
                            <th>Owner</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Total Products</th>
                            <th>Location</th>
                            <th>Registration Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentShops.map((shop) => (
                            <tr key={shop.id}>
                                <td>{shop.id}</td>
                                <td>{shop.name}</td>
                                <td>{shop.owner}</td>
                                <td>{shop.email}</td>
                                <td>{shop.phone}</td>
                                <td>{shop.totalProducts}</td>
                                <td>{shop.location}</td>
                                <td>{shop.registrationDate}</td>
                                <td>{shop.status}</td>
                                <td className={styles.actionCell}>
                                    <button onClick={() => toggleBlockShop(shop.id)} className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}>
                                        {shop.blocked ? 'Unblock' : 'Block'}
                                    </button>
                                    <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>Delete</button>
                                    <span className={styles.actionMenuButton}>
                                        <HiOutlineDotsVertical />

                                        <div className={styles.actionMenu}>
                                            <ul>
                                                <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
                                                <li onClick={() => deleteUser(shop.id)}>Delete</li>
                                            </ul>
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => goToPage(i + 1)}
                        className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* <AddShopForm/> */}
        </div>
    )
}

export default Shops


