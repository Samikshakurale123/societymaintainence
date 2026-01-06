import jsPDF from "jspdf";

export const generateMaintenancePDF = (month, year, amount) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Society Maintenance Receipt", 20, 20);

  doc.setFontSize(12);
  doc.text(`Month: ${month}`, 20, 40);
  doc.text(`Year: ${year}`, 20, 50);
  doc.text(`Amount Paid: ₹${amount}`, 20, 60);

  doc.text("Thank you for your payment.", 20, 80);

  doc.save("Maintenance_Receipt.pdf");
};