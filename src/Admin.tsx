import  { useEffect, useState } from "react";
import { DataSheetGrid, textColumn, checkboxColumn, Column, keyColumn, intColumn } from 'react-datasheet-grid';
import "react-datasheet-grid/dist/style.css";
import { ClassListing } from "./syllabus_comp";

interface PreviewButtonProps {
  fileName: string;
}

const PreviewButton = ({ fileName }: PreviewButtonProps) => {

  const handlePreview = () => {
    window.open(`/view/${encodeURIComponent(fileName)}`);
  };

  return (
    <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handlePreview}>
      preview
    </button>
  );
};

function Admin() {
  const [username, setUsername] = useState("");
  const [referenceDatabase, setReferenceDatabase] = useState<ClassListing[]>([]);
  const [wholeDatabase, setWholeDatabase] = useState<ClassListing[]>([]);
  const [databaseChanges, setDatabaseChanges] = useState<ClassListing[]>([]);
  const columns: Column[] = [
    {
      component: ({ rowData }) => <PreviewButton fileName={rowData.fileName} />,
      title: "Preview",
    },
    { ...keyColumn("reviewed", checkboxColumn), title: "Approved" },
    { ...keyColumn("className", textColumn), title: "Class Name" },
    { ...keyColumn("description", textColumn), title: "Description" },
    { ...keyColumn("professor", textColumn), title: "Instructor" },
    { ...keyColumn("length", intColumn), title: "Length" },
    { ...keyColumn("createdByName", textColumn), title: "Submitted By" },
    { ...keyColumn("createdByEmail", textColumn), title: "Email" },
  ];

  const fetchWholeDatabase = async () => {
    try {
      let formdata = new FormData();
      formdata.append("username", username);
      var response = await fetch(`https://api.sharesyllabus.me:4000/admin/wholedatabase`, {
        method: "POST",
        body: formdata,
      });
      var data = await response.json();
      console.log(data);
      setWholeDatabase(data);
      setReferenceDatabase(data);
    } catch {
      console.log("error");
    }
  };

  const changeServerDatabase = async () => {
  }

  useEffect(() => {
    const changes = wholeDatabase.filter((item, index) => {
        return JSON.stringify(item) !== JSON.stringify(referenceDatabase[index]);
    });
    setDatabaseChanges(changes);
    console.log(changes);
  }, [wholeDatabase]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-black mb-4 w-full flex">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={ (e) => {
            if (e.key === "Enter") {
              fetchWholeDatabase();
            }
          }}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={fetchWholeDatabase}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Fetch Whole Database
        </button>
        <div className="flex-1 flex items-center justify-end">
            <span className="text-white">
            {databaseChanges.length} changes
            </span>
        </div>
        <button
            onClick={changeServerDatabase}
            className="ml-2 p-2 bg-purple-700 text-white rounded"
        >
            Push Changes
        </button>
      </div>
      <div className="w-full flex-1 overflow-auto">
        <DataSheetGrid
          className="w-full h-full"
          value={wholeDatabase}
          columns={columns}
          onChange={setWholeDatabase}
        />
      </div>
    </div>
  );
}

export default Admin;