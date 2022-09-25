import React, { useState } from "react";
import "./App.css";

function Form() {
    
  const base_Data = {
    fullName: "",
    email: "",
    noHandphone: "",
    pendidikan: {
      it: false,
      nonIt: false,
    },
    class: "",
    surat: "",
    hope: "",
  };

  const [data, setData] = useState(base_Data);
  const [errorMsgFullName, setErrorMsgFullName] = useState("");
  const [errorMsgNoHandphone, setErrorMsgNoHandphone] = useState("");

  const FullNameRegex = /^[A-Za-z ]*$/;
  const noHandphoneRegex = /^[0-9]{9,14}$/;

  const reset = () => {
    setData(base_Data);
    setErrorMsgFullName("");
  };

  const handleSubmit = (e, data) => {
    // alert
    console.log(data);
    alert("Data Pendaftar " + data.fullName + " Berhasil Diterima");
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const newData = { ...data };
    const NAME = e.target.name;
    const VALUE = e.target.value;
    const CHECKED = e.target.checked;
    const TYPE = e.target.type;
    if (TYPE === "radio") {
      const pendidikan = newData[NAME];
      const nameOfPendidikan = VALUE;
      const newPendidikan = { ...pendidikan };
      Object.keys(pendidikan).forEach((val) => {
        val === nameOfPendidikan ? (newPendidikan[val] = CHECKED) : (newPendidikan[val] = false);
      });
      newData[NAME] = newPendidikan;
    } else {
      if (NAME === "fullName") {
        if (!FullNameRegex.test(VALUE)) {
          setErrorMsgFullName("Username Harus Berupa Huruf");
        } else {
          setErrorMsgFullName("");
        }
      } else if (NAME === "noHandphone") {
        if (!noHandphoneRegex.test(VALUE)) {
          setTimeout(() => {
            setErrorMsgNoHandphone("No Handphone tidak sesuai (harus 9-14 Karakter)");
          }, 2000);
        } else {
          setErrorMsgNoHandphone("");
        }
      }
      newData[NAME] = VALUE;
    }
    if (errorMsgFullName === "" || errorMsgNoHandphone === "") {
      setData(newData);
    } else {
      alert("Data Pendaftar Tidak Sesuai");
    }
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <div className="container-fluid">
          <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
          <form onSubmit={(e) => handleSubmit(e, data)}>
            <div className="form-group mb-2">
              <label htmlFor="fullname" className="form-label">
                Nama Lengkap:
              </label>
              <input className="form-control" type="text" name="fullName" value={data.fullName} onChange={handleOnChange} required />

              <span style={{ color: "red" }}>{errorMsgFullName}</span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" name="email" value={data.email} onChange={handleOnChange} required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="noHandphone" className="form-label">
                No Handphone:
              </label>
              <input type="number" className="form-control" name="noHandphone" value={data.noHandphone} onChange={handleOnChange} required />

              <span style={{ color: "red" }}>{errorMsgNoHandphone}</span>
            </div>
            <div className="mb3">
              <label htmlFor="pendidikan" className="form-label">
                Latar Belakang Pendidikan
              </label>
              <br />
              <input type="radio" className="form-check-input" name="pendidikan" value="it" checked={data.pendidikan.it} onChange={handleOnChange} required />
              <label className="form-check-label" htmlFor="it">
                IT
              </label>
              <br />
              <input type="radio" className="form-check-input" name="pendidikan" value="nonIt" checked={data.pendidikan.nonIt} onChange={handleOnChange} required />
              <label className="form-check-label" htmlFor="nonIt">
                Non IT
              </label>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="class">Kelas Coding yang Dipilih: </label>
              <select className="form-select" id="class" name="class" value={data.class} onChange={handleOnChange} required>
                <option value="">--- Pilih Salah Satu Program --- </option>
                <option value="React">React</option>
                <option value="Flutter">Flutter</option>
                <option value="Laravel">Laravel</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="surat" className="form-label">
                Foto Surat Kesungguhan:
              </label>

              <input className="form-control" type="file" name="surat" id="" onChange={handleOnChange} required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="hope" className="form-label">
                Harapan Untuk Coding Bootcamp ini:
              </label>

              <textarea className="form-control" name="hope" id="" cols="30" rows="5" value={data.hope} onChange={handleOnChange}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success m-1">
                Submit
              </button>
              <button type="reset" className="btn btn-danger m-1" onClick={() => reset()}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;