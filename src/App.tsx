import { useEffect, useState } from 'react'
import './pages/App.css'

import SyllabusListing, { ClassListing } from './components/syllabus_comp';


import server from './main'
import { Adsense } from "@ctrl/react-adsense"

import Select from "react-select"
import AsyncSelect from "react-select/async";

import { useLocation } from 'react-router-dom';
import { isMobile } from "is-mobile";
import { useParams } from 'react-router-dom';
import { School } from './pages/UploadSyllabi';
import { AmbiguousClass } from './welcome';

export var initialQuery = "";
export function setInitialQuery(value: string) {
  initialQuery = value;
}

interface Filter {
  school?: string;
  professor?: string;
  class?: string;
}

function App() {


  const [querying, setQuerying] = useState(false);

  const [initialized, setInitialized] = useState(false);


  const [filter, setFilter] = useState<Filter>({});

  const [syllabi, setSyllabi] = useState<ClassListing[]>([]);
  const [query, setQuery] = useState<string>("");

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const { college, professor, class: classParam } = useParams();

  const [collegeOptions, setCollegeOptions] = useState<School[]>([]);

  useEffect(() => {
    if (college) {
      setFilter({ ...filter, school: college });
    }
    if (professor) {
      setFilter({ ...filter, professor: professor });
    }
    if (classParam) {
      setFilter({ ...filter, class: classParam });
    }
  }, [college, professor, classParam])

  // --- ADD THIS DEBOUNCE EFFECT ---
  useEffect(() => {
    // Set a timer to update debouncedQuery after a delay (e.g., 500ms)
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      console.log("Debounced query updated to:", query); // Add log
    }, 500); // Adjust delay as needed (in milliseconds)

    // Cleanup function: Clear the timeout if query changes again before the delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [query]); // This effect runs whenever the 'query' state changes
  // --- END OF ADDED EFFECT ---

  // Perform a search with initialQuery on startup
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery); // Set the query to initialQuery
      setDebouncedQuery(initialQuery); // Ensure debouncedQuery is also updated
      setInitialized(true); // Mark the component as initialized
      handleSearch(initialQuery); // Perform the search with initialQuery
      console.log("Performing search with initialQuery:", initialQuery);
    } else {
      // If no initialQuery, fallback to debouncedQuery
      setInitialized(true); // Mark the component as initialized
      handleSearch(debouncedQuery); // Perform the search with debouncedQuery
      console.log("No initialQuery, performing search with debouncedQuery:", debouncedQuery);
    }
  }, []); // Run only on component mount

  // Trigger search when debouncedQuery changes
  useEffect(() => {
    if (initialized) {
      handleSearch(debouncedQuery); // Perform the search with debouncedQuery
      console.log("Performing search with debouncedQuery:", debouncedQuery);
    }
  }, [debouncedQuery, initialized]); // Add initialized here

  // Trigger search when filters change
  useEffect(() => {
    if (initialized) {
      handleSearch(debouncedQuery); // Perform the search with the current query and filters
      console.log("Performing search with updated filters:", filter);
    }
  }, [filter, initialized]); // Add initialized here


  async function handleSearch(queryToSearch = debouncedQuery) {
    setQuerying(true);

    let end = ``;
    if (filter.school) end += `&s=${filter.school}`;
    if (filter.professor) end += `&p=${filter.professor}`;
    if (filter.class) end += `&c=${filter.class}`;

    try {
      console.log("Fetching search results for query:", queryToSearch);
      const response = await fetch(`${server}/search/?q=${queryToSearch || ""}${end}`);
      const data = await response.json();
      setQuerying(false);
      setSyllabi(data);
      console.log("Search results:", data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setQuerying(false);
    }
  }

  const location = useLocation();

  useEffect(() => {
    fetch(`${server}/schools`, {
      method: "GET",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.statusText}`);
        }
        let data = await response.json();
        setCollegeOptions(data);
      })
      .catch((error) => {
        console.error("Failed to fetch schools:", error);
      });

  },
    [location])



  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
      {isMobile() === false &&
        <div className="w-full flex place-items-center justify-center pt-16">
          <div className="w-3/4 flex justify-center items-center">

            <div className="place-items-center justify-center flex w-full flex-col">
              <div className="w-full flex space-y-2 flex-col">
                <div className="flex flex-col pt-2">
                  <text className="text-left pl-3">Search for classes by class name or professor name:</text>
                  <div className="flex-1 flex border  border-gray-400  focus:outline-none rounded-lg">
                    <input
                      type="search"
                      onKeyDown={handleKeyDown}
                      placeholder="search bar..."
                      className="focus:outline-none placeholder:text-gray-500 font-normal focus:ring-0 bg-transparent border-none rounded-lg flex-1 text-black"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}>
                    </input>
                    <button className="aspect-square p-2 pr-0 flex justify-center items-center" onClick={() => { setQuery(''); handleSearch() }}>
                      <span className="material-symbols-rounded hover:text-black text-gray-500">
                        close
                      </span>
                    </button>
                    <button className="aspect-square p-2 flex justify-center items-center" onClick={() => handleSearch()}>
                      <span className="material-symbols-rounded  hover:text-black text-gray-500">
                        search
                      </span>
                    </button></div>

                </div>
                <div className="flex flex-1 h-max gap-2">
                  <div className="text-left w-1/4  rounded-b-none rounded-lg min-h-screen">
                    <div className="flex gap-2 flex-col">

                      <Select
                        className="p-1 text-md bg-[#fafdfb] border  rounded-md border-gray-400"
                        placeholder="School District"
                        options={collegeOptions}
                        getOptionLabel={(option: School) => option.name}
                        getOptionValue={(option: School) => option.name}
                        value={filter.school ? collegeOptions.find(option => option.name === filter.school) : undefined}
                        onChange={(selectedOption: School | null) => {
                          if (selectedOption) {
                            setFilter({ ...filter, school: selectedOption.name });
                          }
                        }}
                        isSearchable={true}
                        components={{
                          DropdownIndicator: (props) => (
                            <div className="z-auto" {...props.innerProps} onClick={() => {
                              props.selectOption({ id: "", name: "No Filter", fullName: "No Filter" });
                              setFilter({ ...filter, school: undefined });
                            }} style={{ zIndex: 10 }}>
                              <span className="material-symbols-rounded text-red-700">close</span>
                            </div>
                          ),

                        }}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: '#fafdfb',
                            border: 'none',
                            boxShadow: 'none',
                          }),
                          input: (provided) => ({
                            ...provided,
                            boxShadow: 'none',
                          }),
                          placeholder: (provided) => ({
                            ...provided,
                            color: '#888',
                          }),
                        }}
                      />
                      <AsyncSelect
                        className="p-1 text-md bg-[#fafdfb] border  rounded-md border-gray-400"
                        placeholder="Course Name: ENG-1A, General Psych, etc."
                        value={filter.class ? { className: filter.class, school: { name: '' } } as AmbiguousClass : undefined}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: '#fafdfb',
                            border: 'none',
                            boxShadow: 'none',
                          }),
                          input: (provided) => ({
                            ...provided,
                            boxShadow: 'none',
                          }),
                          placeholder: (provided) => ({
                            ...provided,
                            color: '#888',
                          }),
                        }}
                        loadOptions={async (inputValue) => {
                          if (!inputValue) return [];
                          let responses = await Promise.all(
                            collegeOptions.map(async (college) => {
                              const res = await fetch(`${server}/search/class/?q=${inputValue}&s=${college.name}`, {
                                method: "POST",
                              });
                              const data = await res.json();
                              return data.map((item: AmbiguousClass) => ({
                                ...item,
                                school: college,
                              }));
                            })
                          );

                          // Add an option with no class
                          responses.unshift([{ className: "", school: { name: "No Class" } }]);
                          return responses.flat();
                        }}
                        formatOptionLabel={(option: AmbiguousClass) => (
                          <div>
                            <div>{option.className}</div>
                            <div style={{ fontSize: '0.8em', color: '#888' }}>{option.school.name}</div>
                          </div>
                        )}
                        getOptionValue={(option: AmbiguousClass) => option.className}
                        onChange={(selectedOption: AmbiguousClass | null) => {
                          if (selectedOption) {
                            setFilter({ ...filter, class: selectedOption.className });
                          }
                        }}
                        isSearchable={true}
                        cacheOptions
                        defaultOptions
                        components={{
                          DropdownIndicator: (props) => (
                            <div {...props.innerProps} onClick={() => {
                              setFilter({ ...filter, class: "" });
                              props.selectOption({ id: 0, className: "", fullClassName: "", disciplineId: "", school: { id: "", name: "No Class", fullName: "No Class" } });
                            }}>
                              <span className="material-symbols-rounded text-red-700">close</span>
                            </div>
                          ),
                        }}
                      />
                      {filter.professor && <div className="flex p-2 bg-black text-white rounded-lg gap-2">
                        <span className="text-md font-bold">Professor:</span>
                        <span className="text-md">{filter.professor}</span>
                        <button className="text-md text-red-700" onClick={() => setFilter({ ...filter, professor: undefined })}>Clear</button>
                      </div>}
                      <div className="p-2 shadow-2xl rounded-md flex bg-orange-500 flex-col gap-1 border">
                        <text className=" text-red-100">jfk college success club event:</text>
                        <img className="p-2 shadow-md bg-white rounded-md border" src="/advertisement.png" />
                      </div>
                      <Adsense 
                        client="ca-pub-1666992508674643"
                        slot="9572064228"
                        format="auto"
                        className="h-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex">
                    <div className="flex flex-1 flex-col gap-2">
                      {querying && <div className="flex-1 flex flex-col place-items-center gap-4 p-4"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>Loading...</div>}
                      {!querying && syllabi.length === 0 && <div className="flex-1 flex flex-col place-items-center gap-4 p-4">No results found</div>}
                      {syllabi.map((syllabus, i) => {
                        return <SyllabusListing key={i} school={syllabus.school} fileName={syllabus.fileName} professorId={syllabus.professorId} className={syllabus.class?.className} description={syllabus.description} fullClassName={syllabus.class?.fullClassName} textbookCost={syllabus.textbookCost} classLength={syllabus.classLength} professor={syllabus.professor} />
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>}
      {isMobile() === true && <div className="p-1 pt-16" >

        <div className="pt-2">
          <div className="flex space-x-1">

            <div className="flex-1 flex bg-white outline-1 border rounded-lg">
              <input type="search" onKeyDown={handleKeyDown} placeholder="search class or professor" className="outline-0 focus:outline-0 w-4/5 bg-transparent  border-0 flex-1 text-black" value={query} onChange={(e) => setQuery(e.target.value)}>

              </input>
              <button className="aspect-square flex justify-center bg-white rounded-lg items-center" onClick={() => handleSearch()}>
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




    </>
  )
}

export default App
