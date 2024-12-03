import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/header.module.css';
import logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import MyContext from '../../context/MyContext';

const Header = () => {
  const { cart } = useContext(MyContext);
  const { isCartOpen, setIsCartOpen } = useContext(MyContext);

  const texts = [
    "milk",
    "bread",
    "eggs",
    "butter",
    "cheese",
    "coffee",
    "tea",
    "sugar",
    "rice",
    "pasta",
    "cereal",
    "flour",
    "yogurt",
    "honey",
    "toothpaste",
    "shampoo",
    "soap",
    "toilet paper",
    "laundry detergent",
    "dish soap"
  ];

  const [searchInput, setSearchInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredTexts, setFilteredTexts] = useState([]);
  const [animateKey, setAnimateKey] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to store the phone number fetched from local storage
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle input change and dropdown visibility
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };

  const handleDropdownClick = (item) => {
    setSearchInput(item);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && filteredTexts.length > 0) {
      setSearchInput(filteredTexts[0]);
      setShowDropdown(false);
    }
  };

  // Fetch phone number from local storage on component mount
  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    setPhoneNumber(storedPhoneNumber || 'Not logged in'); // Default to "Not logged in" if not found
  }, []);

  // Handle popup toggle (open/close)
  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const filtered = texts.filter(text =>
      text.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredTexts(filtered);

    if (searchInput.length === 0) {
      setShowDropdown(false);
    }
  }, [searchInput]);

  useEffect(() => {
    if (!isInputFocused) {
      const interval = setInterval(() => {
        setAnimateKey(prevKey => (prevKey + 1) % texts.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [animateKey, isInputFocused]);

  return (
    <header className={styles.header}>
      <div className={styles.firstContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.location}>
          <p>Delivery in 10 minutes</p>
          <span className={styles.blink}>address</span>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.searchContainer}>
          <IoSearch className={styles.headericon} />
          <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            placeholder={!isInputFocused ? `Search "${texts[animateKey]}"` : ''}
            className={styles.searchInput}
          />
          {showDropdown && searchInput && (
            <div className={styles.dropdown}>
              {filteredTexts.map((text, index) => (
                <div
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => handleDropdownClick(text)}
                >
                  {text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div onClick={() => setIsCartOpen(!isCartOpen)} className={styles.cartContainer}>
          <FaCartShopping />
          {cart?.length > 0 && <span className={styles.totalItems}>{cart?.length}</span>}
        </div>

        <div className={styles.profileIcon} onClick={handlePopupToggle}>
          <FaRegUserCircle />
        </div>

        {/* Profile Popup */}
        {isPopupOpen && (
          <div className={styles.profilePopup}>
            <h3>Login Details</h3>
            <p>Phone Number: {phoneNumber}</p>
            <button onClick={handlePopupToggle}>Close</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
