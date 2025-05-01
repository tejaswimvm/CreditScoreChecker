import React from "react";
import * as ExcelJS from "exceljs";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  // Only the desired fields
  const columns = ["name", "email", "mobileNo", "dob", "location", "income"];

  // Function to export data to Excel
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // Add header row
    worksheet.addRow(columns);

    // Add data rows for only the selected columns
    data.forEach((row) => {
      worksheet.addRow(columns.map((col) => row[col]));
    });

    // Set column widths for better readability
    worksheet.columns = columns.map((col) => ({
      width: col.length < 12 ? 12 : col.length,
    }));

    // Save Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.xlsx";
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
              <th key={key} className="px-6 py-3 text-left font-semibold text-gray-600 capitalize">
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
