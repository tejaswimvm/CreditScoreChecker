import React from "react";
import * as ExcelJS from "exceljs";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  const columns = ["name", "email", "mobileNo", "dob", "location", "income"];

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Data");

    // Define header columns
    worksheet.columns = columns.map((col) => ({
      header: col.charAt(0).toUpperCase() + col.slice(1), // Capitalize headers
      key: col,
      width: col.length < 18 ? 18 : col.length + 4,
    }));

    // Add filtered data rows
    data.forEach((item) => {
      worksheet.addRow(
        columns.reduce((obj, key) => {
          obj[key] = item[key] ?? "";
          return obj;
        }, {})
      );
    });

    // Header row styling
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };
    headerRow.height = 20;

    // Apply background color to header
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "4472C4" }, // Dark blue
      };
      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Body row formatting
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) {
        row.alignment = { vertical: "middle", horizontal: "left" };
        row.height = 18;
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
            right: { style: "thin" },
          };
        });
      }
    });

    // Download file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "styled_user_data.xlsx";
    link.click();
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Fetched Data</h2>
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition transform hover:scale-105"
        >
          Export to Excel
        </button>
      </div>
      <table className="min-w-full table-auto text-sm bg-white text-gray-800 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((key) => (
              <th
                key={key}
                className="px-6 py-3 text-left font-semibold text-gray-600 capitalize"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 transition">
              {columns.map((col, idx) => (
                <td key={idx} className="px-6 py-3 text-gray-700">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
