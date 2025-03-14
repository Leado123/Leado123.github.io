import { useEffect, useState } from "react";
import { DataSheetGrid, textColumn, checkboxColumn, Column, keyColumn, intColumn } from 'react-datasheet-grid';
import "react-datasheet-grid/dist/style.css";
import { ClassListing } from "../components/syllabus_comp";
import { useParams } from "react-router-dom";
import server from '../main'


interface PreviewButtonProps {
  fileName: string;
}

const PreviewButton = ({ fileName }: PreviewButtonProps) => {
  const handlePreview = () => {
    const url = `#/view/${encodeURIComponent(fileName)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handlePreview}>
      Preview
    </button>
  );
};



function Admin() {
  const { highlightedSyllabusId } = useParams<{ highlightedSyllabusId?: string }>();

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
    { ...keyColumn("className", textColumn), title: "Class Abbrev" },
    { ...keyColumn("fullClassName", textColumn), title: "Class Name" },
    { ...keyColumn("textbookCost", textColumn), title: "free, cheap, moderate, expensive" },
    { ...keyColumn("description", textColumn), title: "Description" },
    { ...keyColumn("professor", textColumn), title: "Instructor" },
    { ...keyColumn("classLength", intColumn), title: "Length" },
    { ...keyColumn("createdByName", textColumn), title: "Submitted By" },
    { ...keyColumn("createdByEmail", textColumn), title: "Email" },
  ];

  useEffect(() => {
    console.log(`highlightedSyllabusId is: ${highlightedSyllabusId}`);
    if (highlightedSyllabusId != null) fetchWholeDatabase();
  }, [highlightedSyllabusId]);

  const fetchWholeDatabase = async () => {
    if (!highlightedSyllabusId) {
      try {
        let formdata = new FormData();
        formdata.append("username", username);
        const response = await fetch(`${server}/admin/wholedatabase`, {
          method: "POST",
          body: formdata,
        });
        const data = await response.json();
        console.log(data);
        setWholeDatabase(data);
        setReferenceDatabase(data);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        console.log(highlightedSyllabusId);
        const response = await fetch(`${server}/syllabus/${highlightedSyllabusId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        console.log(`data is: ${data}`);
        setWholeDatabase([...wholeDatabase, data]);
        setReferenceDatabase([...referenceDatabase, data]);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const changeServerDatabase = async () => {
    try {
      for (const change of databaseChanges) {
        const { fileName, ...sendableChange } = change;

        const response = await fetch(`${server}/admin/change/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            id: sendableChange.id,
            data: sendableChange,
          })
        });

        if (!response.ok) {
          console.log("error");
        }
      }
      fetchWholeDatabase();
      alert("success!");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const changes = wholeDatabase.filter((item, index) => {
      return JSON.stringify(item) !== JSON.stringify(referenceDatabase[index]);
    });
    setDatabaseChanges(changes);
    console.log(changes);
  }, [wholeDatabase]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
      <div>{highlightedSyllabusId}</div>
      <div className="text-black mb-4 w-full flex">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
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
      <div className="flex flex-1 w-full h-full overflow-hidden">
        <div className="w-full h-full">
          <DataSheetGrid
            className="w-full h-full"
            value={wholeDatabase}
            columns={columns}
            onChange={setWholeDatabase}
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;