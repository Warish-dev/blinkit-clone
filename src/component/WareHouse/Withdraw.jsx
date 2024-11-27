import React, { useState } from "react";
import styles from "../../styles/withdraw.module.css";
import WithdrawForm from "./WithdrawForm";

const Withdraws = () => {
  const data = [
    { id: 1, amount: "$100", requestDate: "2024-11-20", status: "Pending", action: "View" },
    { id: 2, amount: "$250", requestDate: "2024-11-21", status: "Approved", action: "View" },
    { id: 3, amount: "$50", requestDate: "2024-11-22", status: "Cancelled", action: "View" },
  ];

  
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.withdrawContainer}>
      <div className={styles.header}>
        <h2>Withdraws</h2>
        <button className={styles.addWithdrawButton}  onClick={() => setIsModalOpen(true)} >+ Add Withdraw</button>
        <WithdrawForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      <table className={styles.withdrawTable}>
        <thead>
          <tr>
            <th>SL</th>
            <th>Amount</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.amount}</td>
                <td>{item.requestDate}</td>
                <td>{item.status}</td>
                <td>
                  <button className={styles.actionButton}>{item.action}</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.noData}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Withdraws;
