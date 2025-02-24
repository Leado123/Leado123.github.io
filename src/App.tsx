import { useEffect, useState } from 'react'
import './App.css'

import SyllabusListing, { ClassListing } from './syllabus_comp';

import { Accordion, FileInput } from "flowbite-react";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useLocation, useNavigate } from 'react-router-dom';
import { isMobile } from "is-mobile";


export const classOptions = [ // TODO REMOVE
  { key: "nofilter", label: "No Class Filter" },
  { key: "psychology", label: "Psych" },
  { key: "anthropology", label: "Anthropology" },
  { key: "physics", label: "Physics" },
];

//TODO: MAKE when you scroll to bottom of page, adds more results
//TODO: make it so that when you type in stuff, it automatically searches on the server, but there is a tick rate for responses

//TODO: create an ELABORATE WHOLE Uploading syllabus page to make the process easier

var searchQuery = "";


function App() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [tempFileId, setTempFileId] = useState<string>("");

  const [file, setFile] = useState<File | null>(null);


  const [syllabi, setSyllabi] = useState<ClassListing[]>([]);
  const [query, setQuery] = useState<string>("");


  async function handleSearch() {
    if (query != "") searchQuery = query;
    if (query === "admin") {
      navigate('admin');
    }
    console.log(`searching for ${query}`);
    try {
      if (searchQuery === "") {
        var response = await fetch(`https://api.sharesyllabus.me/search/?q=${query}`);
      } else {
        var response = await fetch(`https://api.sharesyllabus.me/search/?q=${searchQuery}`);
      }
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

  const location = useLocation();

  useEffect(() => {
    setQuery(searchQuery);
    console.log("use effect ran");
    handleSearch();


  },
    [location])



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
      {isMobile() === false && <div className=" flex justify-center items-center">
        <Tabs className="w-full bg-zinc-950 p-4">
          <TabList className="flex space-x-2 pb-1">
            <Tab selectedClassName="rounded-lg p-1 underline decoration-wavy" className=" focus:outline-none p-1 cursor-pointer">Syllabuses</Tab>
            <Tab selectedClassName="rounded-lg p-1 underline decoration-wavy" className=" focus:outline-none p-1 cursor-pointer">ObjectSearch (In Development)</Tab>
          </TabList>

          <TabPanel>
            <div className="place-items-center justify-center flex w-full flex-col">
              <div className="w-full flex space-y-2 flex-col">
                <div className="flex pt-2">
                  <div className="flex-1 flex border border-zinc-800  focus:outline-none rounded-lg">
                    <input type="search" onKeyDown={handleKeyDown} placeholder="search, hit enter or the search button to enter query" className="focus:outline-none focus:ring-0 bg-transparent border-none focus:bg-black rounded-lg flex-1 text-white" value={query} onChange={(e) => setQuery(e.target.value)}>

                    </input>
                    <button className="aspect-square flex justify-center items-center" onClick={handleSearch}>
                      <span className="material-symbols-rounded text-white">
                        search
                      </span>
                    </button></div>

                </div>
                <div className="flex space-x-2">
                  <div className="text-left">
                    <text>Filters:</text>
                    <div className="">
                      <select className="w-full mb-2 mt-2 bg-black p-1 rounded-lg">
                        <option>10 results</option>
                        <option>15 results</option>
                        <option>20 results</option>
                      </select>
                      <span>
                        <select className="w-full bg-black p-1 rounded-lg" >
                          <option>all results (unverified too)</option>
                          <option>verified results only</option>
                        </select>
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">


                    <div className="listing">
                      {syllabi.map((syllabus, i) => {
                        return <SyllabusListing key={i} fileName={syllabus.fileName} professorId={syllabus.professorId} className={syllabus.class?.className} description={syllabus.description} fullClassName={syllabus.class?.fullClassName} textbookCost={syllabus.textbookCost} classLength={syllabus.classLength} professor={syllabus.professor} />
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>

      </div>}
      {isMobile() === true && <div className="p-1 pt-2">

        <div className="">
          <div className="flex space-x-1">

            <div className="flex-1 flex bg-white rounded-lg">
              <input type="search" onKeyDown={handleKeyDown} placeholder="search class or professor" className="focus:outline-none w-4/5 bg-transparent border-none flex-1 text-black" value={query} onChange={(e) => setQuery(e.target.value)}>

              </input>
              <button className="aspect-square flex justify-center bg-white rounded-lg items-center" onClick={handleSearch}>
                <span className="material-symbols-rounded text-black">
                  search
                </span>
              </button></div>
          </div>

          <div className="listing">
            {syllabi.map((syllabus, i) => {
              return <SyllabusListing key={i} fileName={syllabus.fileName} className={syllabus.className} fullClassName={syllabus.fullClassName} textbookCost={syllabus.textbookCost} description={syllabus.description} classLength={syllabus.classLength} professor={syllabus.professor} />
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
