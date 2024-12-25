// import React, { useRef } from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
// import styles from "../../styles/invoice.module.css";
// import Blogo from "../../assets/Blogo.jpeg";

// const Invoice = ({ setIsFormOpen }) => {
//   const invoiceRef = useRef();

//   const toggleForm = () => {
//     setIsFormOpen(false);
//   };

//   const downloadPDF = async () => {
//     const element = invoiceRef.current;

//     try {
//       // Capture the HTML element as a canvas
//       const canvas = await html2canvas(element, { scale: 2 });

//       // Convert the canvas to an image
//       const imgData = canvas.toDataURL("image/png");

//       // Initialize jsPDF
//       const pdf = new jsPDF("p", "mm", "a4");

//       // Calculate PDF dimensions
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       // Add the image to the PDF
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

//       // Download the PDF
//       pdf.save("invoice.pdf");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <div>
//       <div className={styles.invoiceContainer} ref={invoiceRef}>
//         <p className={styles.cross} onClick={toggleForm}>
//           X
//         </p>
//         <header className={styles.header}>
//           <div>
//             <img src={Blogo} className={styles.Blogo} alt="Company Logo" />
//             <h1 className={styles.companyName}>Bijli Mart</h1>
//             <a href="https://demo.bijlimart.app" className={styles.link}>
//               https://demo.bijlimart.app
//             </a>
//             <p>Shyamoli, Muhammadpur, Dhaka</p>
//           </div>
//           <div className={styles.invoiceInfo}>
//             <h2>Invoice of (Rs.)</h2>
//             <h2 className={styles.totalAmount}>Rs.1800</h2>
//           </div>
//         </header>

//         <section className={styles.billToSection}>
//           <h3>Bill To:</h3>
//           <div className={styles.address}>
//             <p>User</p>
//             <p>Address: Shekertek, Adabor Thana, Shymoli</p>
//             <p>Email: user@gmail.com</p>
//           </div>
//         </section>

//         <section className={styles.paymentSection}>
//           <div>
//             <div className={styles.details}>
//               <p>Payment Method:</p>
//               <b>Cash Payment</b>
//             </div>
//             <div className={styles.details}>
//               <p>Invoice Number:</p>
//               <b>#RC000006</b>
//             </div>
//             <div className={styles.details}>
//               <p>Invoice Date:</p>
//               <b>27 November, 2024</b>
//             </div>
//             <div className={styles.details}>
//               <p>Order Date:</p>
//               <b>05 October, 2024</b>
//             </div>
//           </div>
//         </section>

//         <table className={styles.invoiceTable}>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Item Name</th>
//               <th>Rate</th>
//               <th>Quantity</th>
//               <th>Size</th>
//               <th>Color</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1.</td>
//               <td>
//                 Sony A6400 Mirrorless Camera With 18-135mm Lens
//                 <p className={styles.itemDescription}>
//                   Key Features: Model: A6400 24.2MP APS-C Exmor CMOS Sensor...
//                 </p>
//               </td>
//               <td>Rs.1800</td>
//               <td>1</td>
//               <td>N/A</td>
//               <td>Black</td>
//               <td>Rs.1800</td>
//             </tr>
//           </tbody>
//         </table>

//         <section className={styles.totalSection}>
//           <div className={styles.details}>
//             <p>Subtotal:</p>
//             <b>Rs.1800</b>
//           </div>
//           <div className={styles.details}>
//             <p>Discount:</p>
//             <b>Rs.0</b>
//           </div>
//           <div className={styles.details}>
//             <p>Delivery Charge:</p>
//             <b>Rs.0</b>
//           </div>
//           <h3>
//             Total: <span>Rs.1800</span>
//           </h3>
//         </section>

//         <footer className={styles.footer}>
//           <div className={styles.details}>
//             <p>Thanks for the business.</p>
//             <b>Signature</b>
//           </div>
//         </footer>
//         <button onClick={downloadPDF} className={styles.downloadButton}>
//         Download PDF
//       </button>
//       </div>
     
//     </div>
//   );
// };

// export default Invoice;


import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import styles from "../../styles/invoice.module.css";
import Blogo from "../../assets/Blogo.jpeg";

const Invoice = ({ setIsFormOpen, category }) => {
  const invoiceRef = useRef();

  const toggleForm = () => {
    setIsFormOpen(false);
  };

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  // Render only if the category is Electronics
  // if (category !== "Electronics") {
  //   return (
  //     <div className={styles.noInvoice}>
  //       <p className={styles.cross} onClick={toggleForm}>
  //         X
  //       </p>
  //       <h2>This invoice is only available for electronic products.</h2>
  //     </div>
  //   );
  // }

  return (
    <div>

<div className={styles.noInvoice}>
        {/* <p className={styles.cross} onClick={toggleForm}>
          X
        </p> */}
        <h2 style={{textAlign: "center"}}>This invoice is only available for electronic products.</h2>
      </div>

      <div className={styles.invoiceContainer} ref={invoiceRef}>
        <p className={styles.cross} onClick={toggleForm}>
          X
        </p>
        <header className={styles.header}>
          <div>
            <img src={Blogo} className={styles.Blogo} alt="Company Logo" />
            <h1 className={styles.companyName}>Bijli Mart</h1>
            <a href="https://demo.bijlimart.app" className={styles.link}>
              https://demo.bijlimart.app
            </a>
            <p>Shyamoli, Muhammadpur, Dhaka</p>
          </div>
          <div className={styles.invoiceInfo}>
            <h2>Invoice of (Rs.)</h2>
            <h2 className={styles.totalAmount}>Rs.1800</h2>
          </div>
        </header>

        <section className={styles.billToSection}>
          <h3>Bill To:</h3>
          <div className={styles.address}>
            <p>User</p>
            <p>Address: Shekertek, Adabor Thana, Shymoli</p>
            <p>Email: user@gmail.com</p>
          </div>
        </section>

        <section className={styles.paymentSection}>
          <div>
            <div className={styles.details}>
              <p>Payment Method:</p>
              <b>Cash Payment</b>
            </div>
            <div className={styles.details}>
              <p>Invoice Number:</p>
              <b>#RC000006</b>
            </div>
            <div className={styles.details}>
              <p>Invoice Date:</p>
              <b>27 November, 2024</b>
            </div>
            <div className={styles.details}>
              <p>Order Date:</p>
              <b>05 October, 2024</b>
            </div>
          </div>
        </section>

        <table className={styles.invoiceTable}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Item Name</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                Sony A6400 Mirrorless Camera With 18-135mm Lens
                <p className={styles.itemDescription}>
                  Key Features: Model: A6400 24.2MP APS-C Exmor CMOS Sensor...
                </p>
              </td>
              <td>Rs.1800</td>
              <td>1</td>
              <td>N/A</td>
              <td>Black</td>
              <td>Rs.1800</td>
            </tr>
          </tbody>
        </table>

        <section className={styles.totalSection}>
          <div className={styles.details}>
            <p>Subtotal:</p>
            <b>Rs.1800</b>
          </div>
          <div className={styles.details}>
            <p>Discount:</p>
            <b>Rs.0</b>
          </div>
          <div className={styles.details}>
            <p>Delivery Charge:</p>
            <b>Rs.0</b>
          </div>
          <h3>
            Total: <span>Rs.1800</span>
          </h3>
        </section>

        <footer className={styles.footer}>
          <div className={styles.details}>
            <p>Thanks for the business.</p>
            <b>Signature</b>
          </div>
        </footer>
        <button onClick={downloadPDF} className={styles.downloadButton}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
