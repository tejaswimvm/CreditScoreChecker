"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "@/components/excel/datatable";
import ExportButton from "@/components/excel/exportbutton";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            User Data Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Real-time user submissions fetched from the API
          </p>
        </div>

        {/* Data Card */}
        <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 space-y-6 border border-gray-100">
          {/* Utility Bar */}
          {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-700">
              All Submissions ({data.length})
            </h2>
            <ExportButton data={data} />
          </div> */}

          {/* Table or Loading/Empty State */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="py-12 text-center text-blue-500 font-medium">
                Loading data...
              </div>
            ) : data.length === 0 ? (
              <div className="py-12 text-center text-gray-500 font-medium">
                No data available
              </div>
            ) : (
              <DataTable data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
