// import React from 'react';
import React, { useState } from 'react'
import styles from '../../styles/ordersummary.module.css';


const OrdersSummary = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  // const [isFormOpen2, setIsFormOpen2] = useState(false);
  const [showInvoices, setShowInvoices] = useState(false);



  const toggleOrderRecipt = () => {
    setIsFormOpen(true);
    // setIsFormOpen2(false);
    setShowInvoices(false);

  };

  const toggleInvoice = () => {
    setShowInvoices(true);
    
    // setIsFormOpen(false)

  }

  const orders = [
    {
      id: "RC0000067",
      date: "05 Oct 2024, 03:24 PM",
      customer: "User",
      amount: "Rs.1800",
      paymentMethod: "Cash Payment",
      status: "Pending",
    },
    {
      id: "RC000005",
      date: "05 Oct 2024, 03:20 PM",
      customer: "User",
      amount: "Rs.1800",
      paymentMethod: "Cash Payment",
      status: "Pending",
    },
    {
      id: "RC000004",
      date: "05 Oct 2024, 03:18 PM",
      customer: "User",
      amount: "Rs.1800",
      paymentMethod: "Cash Payment",
      status: "Delivered",
    },
    {

      id: "RC000004",
      date: "05 Oct 2024, 03:18 PM",
      customer: "User",
      amount: "$1800",
      paymentMethod: "Cash Payment",
      status: "Delivered",
    },
    {
      id: "RC000004",
      date: "05 Oct 2024, 03:18 PM",
      customer: "User",
      amount: "$1800",
      paymentMethod: "Cash Payment",
      status: "Delivered",
    },
    {
      id: "RC000004",
      date: "05 Oct 2024, 03:18 PM",
      customer: "User",
      amount: "$1800",
      paymentMethod: "Cash Payment",
      status: "Delivered",
    },



        id: "RC000004",
        date: "05 Oct 2024, 03:18 PM",
        customer: "User",
        amount: "Rs.1800",
        paymentMethod: "Cash Payment",
        status: "Delivered",
      },
      {
        id: "RC000004",
        date: "05 Oct 2024, 03:18 PM",
        customer: "User",
        amount: "Rs.1800",
        paymentMethod: "Cash Payment",
        status: "Delivered",
      },
      {
        id: "RC000004",
        date: "05 Oct 2024, 03:18 PM",
        customer: "User",
        amount: "Rs.1800",
        paymentMethod: "Cash Payment",
        status: "Delivered",
      },
     
      

  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return styles.pending;
      case "Delivered":
        return styles.delivered;
      default:
        return styles.default;
    }
  };

  return (
    <div className={styles.container}>

      {isFormOpen && <OrderRecipt setIsFormOpen={setIsFormOpen} />}
      {/* {isFormOpen2 && <Invoice setIsFormOpen2={setIsFormOpen2} />} */}
      {showInvoices && (
        <div>
          
          <Invoice setIsFormOpen2={setShowInvoices} />
          <p>This is for electronics</p>
          <Invoice setIsFormOpen2={setShowInvoices} />
          
        </div>
      )}
      {!isFormOpen && !showInvoices && (
        <div>
          <h2 className={styles.title}>Orders Summary</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Customer</th>
                <th>Total Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>
                    {order.amount}{" "}
                    <span className={`${styles.badge} ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.paymentMethod}</td>
                  <td>{order.status}</td>
                  <td className={styles.actions}>
                    <button className={styles.viewButton} onClick={toggleOrderRecipt}>
                      👁️
                    </button>
                    <button className={styles.downloadButton} onClick={toggleInvoice}>
                      ⬇️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


    </div>
  );
};

export default OrdersSummary;
