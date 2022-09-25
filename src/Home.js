// import React, { useState } from "react";
// import "./App.css";
// import logo from "./logo-ALTA.png";

// function Home() {
//   const INITIAL_DATA = {
//     fullName: "",
//     email: "",
//     noHp: "",
//     education: {
//       it: false,
//       nonIt: false,
//     },
//     classCoding: "",
//     surat: "",
//     hope: "",
//   };

//   const [data, setData] = useState(INITIAL_DATA);
//   const [errorMsgFullName, setErrorMsgFullName] = useState("");
//   const [errorMsgNoHp, setErrorMsgNoHp] = useState("");

//   const fullNameRegex = /^[A-Za-z ]*$/;
//   const noHpRegex = /^[0-9]{9,14}$/;

//   const reset = () => {
//     setData(INITIAL_DATA);
//     setErrorMsgFullName("");
//   };

//   const handleOnChange = (e) => {
//     const newData = { ...data };
//     const NAME = e.target.name;
//     const VALUE = e.target.value;
//     const CHECKED = e.target.checked;
//     const TYPE = e.target.type;
//     if (TYPE === "radio") {
//       const educations = newData[NAME];
//       const nameOfEducation = VALUE;
//       const newEducations = { ...educations };
//       Object.keys(educations).forEach((val) => {
//         val === nameOfEducation ? (newEducations[val] = CHECKED) : (newEducations[val] = false);
//       });
//       newData[NAME] = newEducations;
//     } else {
//       if (NAME === "fullName") {
//         if (!fullNameRegex.test(VALUE)) {
//           setErrorMsgFullName("Username Harus Berupa Huruf");
//         } else {
//           setErrorMsgFullName("");
//         }
//       } else if (NAME === "noHp") {
//         if (!noHpRegex.test(VALUE)) {
//           setTimeout(() => {
//             setErrorMsgNoHp("No Handphone tidak sesuai (harus 9-14 Karakter)");
//           }, 2000);
//         } else {
//           setErrorMsgNoHp("");
//         }
//       }
//       newData[NAME] = VALUE;
//     }
//     if (errorMsgFullName === "" || errorMsgNoHp === "") {
//       setData(newData);
//     } else {
//       alert("Data Pendaftar Tidak Sesuai");
//     }
//   };

//   const handleSubmit = (e, data) => {
//     // alert(JSON.stringify(data));
//     console.log(data);
//     alert("Data Pendaftar " + data.fullName + " Berhasil Diterima");
//     e.preventDefault();
//   };
//   return (
//     <>
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
//       <div style={{ padding: "20px" }}>
//         <div>
//           <img srcSet={logo} alt="" className="m-auto d-block" />
//         </div>
//         <div className="container-fluid">
//           <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
//           <form onSubmit={(e) => handleSubmit(e, data)}>
//             <div className="form-group mb-2">
//               <label htmlFor="fullName" className="form-label">
//                 Nama Lengkap:
//               </label>
//               <input className="form-control" type="text" name="fullName" value={data.fullName} onChange={handleOnChange} required />

//               <span style={{ color: "red" }}>{errorMsgFullName}</span>
//             </div>
//             <div className="form-group mb-2">
//               <label htmlFor="email" className="form-label">
//                 Email:
//               </label>
//               <input type="email" className="form-control" name="email" value={data.email} onChange={handleOnChange} required />
//             </div>
//             <div className="form-group mb-2">
//               <label htmlFor="noHp" className="form-label">
//                 No Handphone:
//               </label>
//               <input type="number" className="form-control" name="noHp" value={data.noHp} onChange={handleOnChange} required />

//               <span style={{ color: "red" }}>{errorMsgNoHp}</span>
//             </div>
//             <div className="mb3">
//               <label htmlFor="education" className="form-label">
//                 Latar Belakang Pendidikan
//               </label>
//               <br />
//               <input type="radio" className="form-check-input" name="education" value="it" checked={data.education.it} onChange={handleOnChange} required />
//               <label className="form-check-label" htmlFor="it">
//                 IT
//               </label>
//               <br />
//               <input type="radio" className="form-check-input" name="education" value="nonIt" checked={data.education.nonIt} onChange={handleOnChange} required />
//               <label className="form-check-label" htmlFor="nonIt">
//                 Non IT
//               </label>
//             </div>
//             <div className="form-group mb-2">
//               <label htmlFor="classCoding">Kelas Coding yang Dipilih: </label>
//               <select className="form-select" id="classCoding" name="classCoding" value={data.classCoding} onChange={handleOnChange} required>
//                 <option value="">--- Pilih Salah Satu Program --- </option>
//                 <option value="React">React</option>
//                 <option value="Flutter">Flutter</option>
//                 <option value="Laravel">Laravel</option>
//               </select>
//             </div>
//             <div className="form-group mb-2">
//               <label htmlFor="surat" className="form-label">
//                 Foto Surat Kesungguhan:
//               </label>

//               <input className="form-control" type="file" name="surat" id="" onChange={handleOnChange} required />
//             </div>
//             <div className="form-group mb-2">
//               <label htmlFor="hope" className="form-label">
//                 Harapan Untuk Coding Bootcamp ini:
//               </label>

//               <textarea className="form-control" name="hope" id="" cols="30" rows="5" value={data.hope} onChange={handleOnChange}></textarea>
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-outline-primary m-1 btn-block">
//                 Submit
//               </button>
//               <button type="reset" className="btn btn-outline-warning m-1 btn-block" onClick={() => reset()}>
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

// import React from 'react'

// Function Home() {
//   return (
//     <form>
//         <fieldset disabled>
//             <legend>Disabled fieldset example</legend>
//             <div class="mb-3">
//             <label for="disabledTextInput" class="form-label">Disabled input</label>
//             <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
//             </div>
//             <div class="mb-3">
//             <label for="disabledSelect" class="form-label">Disabled select menu</label>
//             <select id="disabledSelect" class="form-select">
//                 <option>Disabled select</option>
//             </select>
//             </div>
//             <div class="mb-3">
//             <div class="form-check">
//                 <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
//                 <label class="form-check-label" for="disabledFieldsetCheck">
//                 Can't check this
//                 </label>
//             </div>
//             </div>
//             <button type="submit" class="btn btn-primary">Submit</button>
//         </fieldset>
//     </form>
//   );
// }

// export default Home;