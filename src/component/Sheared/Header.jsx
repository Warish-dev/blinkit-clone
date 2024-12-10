import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/header.module.css';
import logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import MyContext from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { cart } = useContext(MyContext);
  const { isCartOpen, setIsCartOpen } = useContext(MyContext);

  const texts = [
    "milk", "bread", "eggs", "butter", "cheese", "coffee", "tea",
    "sugar", "rice", "pasta", "cereal", "flour", "yogurt", "honey",
    "toothpaste", "shampoo", "soap", "toilet paper", "laundry detergent", "dish soap"
  ];

  const [searchInput, setSearchInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredTexts, setFilteredTexts] = useState([]);
  const [animateKey, setAnimateKey] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Using navigate for redirecting to the relevant page
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };

  const handleDropdownClick = (item) => {
    setSearchInput(item);
    setShowDropdown(false);

    // Redirect to a relevant page when an item is selected
    // Assuming a route '/category/:id' for each item, or you can modify as per your routing
    navigate(`/category/${item}`);
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

      // Optionally navigate or filter products
      navigate(`/category/${filteredTexts[0]}`);
    }
  };

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    setPhoneNumber(storedPhoneNumber || 'Not logged in');
  }, []);

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
        <a href="/">  <img src={logo} alt="Logo" /> </a>
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

        <div className={styles.profileIcon} onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <FaRegUserCircle />
        </div>

        {/* Profile Popup */}
        {isPopupOpen && (
          <div className={styles.profilePopup}>
            <h3>Login Details</h3>
            <p>Phone Number: {phoneNumber}</p>
            <button onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
