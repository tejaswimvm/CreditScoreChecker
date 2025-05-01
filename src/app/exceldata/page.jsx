"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "@/components/excel/datatable";
import ExportButton from "@/components/excel/exportbutton";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Fetched Data from API
        </h2>
        
        

        {/* DataTable */}
        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
