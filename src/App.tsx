import { useEffect, useState } from 'react'
import './App.css'

import SyllabusListing, { ClassListing } from './syllabus_comp';

import { Accordion, FileInput } from "flowbite-react";

import { Button, Label, Modal, TextInput } from "flowbite-react";


export const classOptions = [ // TODO REMOVE
  { key: "nofilter", label: "No Class Filter" },
  { key: "psychology", label: "Psych" },
  { key: "anthropology", label: "Anthropology" },
  { key: "physics", label: "Physics" },
];


function findIfMobile() {
  //return true;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [tempFileId, setTempFileId] = useState<string>("");

  const [file, setFile] = useState<File | null>(null);
  const [isMobile, setIsMobile] = useState(false);


  const [syllabi, setSyllabi] = useState<ClassListing[]>([]);
  const [query, setQuery] = useState<string>("");



  async function handleSearch() {
    try {
      var response = await fetch(`https://api.sharesyllabus.me/search/?q=${query}`);
      var data = await response.json();
      console.log(data);
      setSyllabi(data);
    } catch {
      console.log("error")
    }
  }

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    setName('');
    setFile(null);
    setAccordionOpen(false);
  }

  function uploadFile() {
    let formdata = new FormData();

    if (file === null) {
      alert("File not uploaded");
      throw new Error("File not uploaded");
    }
    formdata.append("upload", file);
    formdata.append("email", email);
    formdata.append("name", name);

    fetch(`https://api.sharesyllabus.me/create`, {
      method: 'POST',
      body: formdata,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.statusText}`);
        }
        setAccordionOpen(true);
        let data = await response.json();
        console.log(data);
        setTempFileId(data.fileId);
        setOpenModal(false);
        alert("Upload successful! You will receive an email with your volunteer hours within 3 days.");
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        alert("Upload failed: " + error.message);
      });
  }

  useEffect(() => {
    console.log("temp file is", tempFileId)
  }, [tempFileId])



  useEffect(() => {
    handleSearch();

    if (findIfMobile()) {
      // Code for mobile devices
      setIsMobile(true);
      console.log("mobile")
    } else {
      // Code for desktop devices
      console.log("pc")
    }
  },
    [])



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    if (e.target.files[0] === null) return

    setFile(e.target.files[0]);
    setAccordionOpen(true);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
      {isMobile === false && <div className="place-items-center p-10">
        <h3 className="text-2xl font-bold text-center">Easily View & Share College Syllabi JFKMCHS/Norco College</h3> <br></br>
        <div className="">
          <div className="flex space-x-1">
            <button onClick={() => setOpenModal(true)} className=" bg-blue-700 p-2 text-yellow-50 rounded-lg flex flex-row">
              <span className="flex justify-center items-center aspect-square flex-1"><i className="material-symbols-rounded">attach_file</i></span>
              <span className="flex flex-col">            <span className="text-sm">add a syllabus</span>
                <span className="text-xs">1 volunteer hours</span></span>
            </button>
            <div className="flex-1 flex bg-white rounded-lg">
              <input type="search" onKeyDown={handleKeyDown} placeholder="search, hit enter or the search button to enter query" className="focus:outline-none bg-transparent border-none flex-1 text-black" value={query} onChange={(e) => setQuery(e.target.value)}>

              </input>
              <button className="aspect-square flex justify-center items-center" onClick={handleSearch}>
                <span className="material-symbols-rounded text-black">
                  search
                </span>
              </button></div>

          </div>
          <div className="listing">
            {syllabi.map((syllabus, i) => {
              return <SyllabusListing key={i} fileName={syllabus.fileName} className={syllabus.className} professor={syllabus.professor} />
            })}

          </div>
        </div>
      </div>}
      {isMobile === true && <div className="p-1 pt-4">
        <h3 className="text-2xl font-bold">Easily View & Share College Syllabi JFKMCHS/Norco College</h3> <br></br>
        <div className="">
          <div className="flex space-x-1">
            <button onClick={() => setOpenModal(true)} className=" bg-blue-700 p-2 text-yellow-50 rounded-lg flex flex-row">
              <span className="flex justify-center items-center aspect-square flex-1"><i className="material-symbols-rounded">attach_file</i></span>
              <span className="flex flex-col">            <span className="text-sm">add a syllabus</span>
                <span className="text-xs">1 volunteer hours</span></span>
            </button>
            <div className="flex-1 flex bg-white rounded-lg">
              <input type="search" onKeyDown={handleKeyDown} placeholder="search, hit enter or the search button to enter query" className="focus:outline-none bg-transparent border-none flex-1 text-black" value={query} onChange={(e) => setQuery(e.target.value)}>

              </input>
              <button className="aspect-square flex justify-center items-center" onClick={handleSearch}>
                <span className="material-symbols-rounded text-black">
                  search
                </span>
              </button></div>

          </div>
          <div className="listing">
          {syllabi.map((syllabus, i) => {
              return <SyllabusListing key={i} fileName={syllabus.fileName} className={syllabus.className} professor={syllabus.professor} />
          })}

          </div>
        </div>
      </div>}


      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Upload a Syllabus</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large-file-upload" value="(pdf, doc, or docx) *"></Label>
              </div>
              <form method="post" className="space-y-6">
                <FileInput id="large-file-upload" onChange={handleFileChange} sizing="lg" />

                <Accordion>
                  <Accordion.Panel isOpen={accordionOpen}>
                    <Accordion.Title className="">(Optional) Fill out information to get volunteer hours</Accordion.Title>
                    <Accordion.Content className="space-y-6">
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Your email (cnusd school email is fine)" />
                        </div>
                        <TextInput
                          id="email"
                          placeholder="name@company.com"
                          value={email}
                          // @ts-ignore
                          onChange={(event: Event) => setEmail(event?.target?.value)}

                        />

                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Your Name" />
                        </div>
                        <TextInput
                          placeholder="John Doe"
                          value={name}
                          // @ts-ignore
                          onChange={(event: Event) => setName(event?.target?.value)}

                        />
                      </div>
                      <p className="text-xs text-black">We will handle classifying and organizing your syllabus and will contact you within 3 days to give you community service hours — College Success Club</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>

                <Button onClick={uploadFile} className="bg-blue-700 text-white">Upload File</Button>
              </form>
            </div>

          </div>
        </Modal.Body>

      </Modal>

    </>
  )
}

export default App
