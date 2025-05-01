// components/ExportButton.jsx
import React from "react";
import ExcelJS from "exceljs";

const ExportButton = ({ data }) => {
  const handleExport = async () => {
    if (data.length === 0) {
      alert("No data to export");
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // Add headers
    const headers = Object.keys(data[0]);
    const headerRow = worksheet.addRow(headers);

    // Styling headers: bold, background color, and center alignment
    headerRow.font = { bold: true, size: 12 };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.eachCell((cell, colNumber) => {
      // Set header background color and borders
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4F81BD' }, // Header background color
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Add rows with data and style them
    data.forEach((row) => {
      const rowValues = Object.values(row);
      const excelRow = worksheet.addRow(rowValues);

      excelRow.eachCell((cell, colNumber) => {
        // Align text based on column type (left for text, right for numbers)
        if (typeof cell.value === "string") {
          cell.alignment = { horizontal: 'left' };
        } else if (typeof cell.value === "number") {
          cell.alignment = { horizontal: 'right' };
        } else {
          cell.alignment = { horizontal: 'center' };
        }

        // Add borders to each cell
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Set column widths dynamically
    worksheet.columns = headers.map((header, idx) => ({
      width: Math.max(...data.map(row => String(Object.values(row)[idx]).length), header.length) + 2,
    }));

    // Write to Excel file
    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "exported_data.xlsx";
      link.click();
      window.URL.revokeObjectURL(url); // Cleanup
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  return (
    <button onClick={handleExport} style={{ marginBottom: "10px", padding: "10px 20px", backgroundColor: "#4F81BD", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      Export to Excel
    </button>
  );
};

export default ExportButton;
