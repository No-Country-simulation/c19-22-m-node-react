import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlBase } from "../../constants/urlBase";





export const EditProfile = () => {

  const isEdiProfilePic = useRef(false)
  const [form, setForm] = useState({
    fullname: '',
		profilePic: '',
		username: '',
		occupation: '',		
		location: '',
		education: '',
		about: '',
  })

  const navigate = useNavigate()

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prevForm => ({
          ...prevForm,
          profilePic: reader.result
        }))
        isEdiProfilePic.current = true
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeInput = (e) => {
    setForm(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value || ""
    }))
  }

  const handleSubmit = () => {
    let image = form.profilePic;
    let fileExtension = ''
    const formData = new FormData();
    if(isEdiProfilePic.current){
      const splitedData = form.profilePic.split(';')[0]
      const imageType = splitedData.slice(5)
      fileExtension = imageType.split('/')[1];
      const data = form.profilePic.split(',')[1]
      const binaryString = window.atob(data)
      const arrayBuffer = new ArrayBuffer(binaryString.length)
      const uint8Array = new Uint8Array(arrayBuffer)
      for (let i = 0; i < binaryString.length; i++){
          uint8Array[i] = binaryString.charCodeAt(i)
      }
      image = new Blob([uint8Array], {type: imageType})
    }

    if(isEdiProfilePic.current){
        formData.append('profilePic', image, `imagen.${fileExtension}`)
    } else {
        formData.append('profilePic', image)
    }
    formData.append('name', form.fullname.split(' ')[0])
    formData.append('lastname', form.fullname.split(' ').slice(1).join(' '))
    
    formData.append('editImage', isEdiProfilePic.current)
    formData.append('username', form.username)
    formData.append('occupation', form.occupation)
    formData.append('location', form.location)
    formData.append('education', form.education)
    formData.append('about', form.about)

    fetch(`${urlBase}/api/v1/users/profile`, {
      method: 'POST',
      body: formData,
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(data => data.json())
    .then((data)=> {
      navigate('/profile')
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetch(`${urlBase}/api/v1/users/profile`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(data => data.json())
    .then(data => {
      setForm({
        fullname: `${data.name} ${data.lastname}`,
        profilePic: data.profilePic,
        username: data.username,
        password: '',
        occupation: data.occupation || '',
        location: data.location || '',
        education: data.education || '',
        about: data.about || '',
      })
    })
  },[])

  return(
    <section className="bg-gray-100">
      <div className="max-w-lg mx-auto">
        <h1 className="sticky top-0 bg-[#323232] text-[#F3F3F3] font-bold p-4 flex justify-between items-center" style={{ fontSize: '18px', zIndex: 10 }}>
          <span className="flex items-center">
            <svg onClick={() => navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" style={{ color: '#F3F3F3' }}>
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Editar perfil
          </span>
          <svg onClick={handleSubmit} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#F3F3F3' }}>
            <path d="M1.5 8.75L7.5 14.75L16.5 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h1>
        <form className="shadow-md rounded px-8 pt-4 pb-8 mb-4">
        <div className="mb-4 relative  w-20 h-20">
          <img
            className="rounded-full cursor-pointer w-full h-full object-cover"
            src={form.profilePic}
            alt="Profile"
            style={{ width: '100%', height: '100%' }}
            onClick={() => document.getElementById('fileInput').click()}
          />
          <input id="fileInput" type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
          <div className="absolute top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full p-1" onClick={() => document.getElementById('fileInput').click()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.862 4.48676L18.549 2.79876C18.9007 2.44708 19.3777 2.24951 19.875 2.24951C20.3723 2.24951 20.8493 2.44708 21.201 2.79876C21.5527 3.15044 21.7502 3.62741 21.7502 4.12476C21.7502 4.62211 21.5527 5.09908 21.201 5.45076L6.832 19.8198C6.30332 20.3481 5.65137 20.7365 4.935 20.9498L2.25 21.7498L3.05 19.0648C3.26328 18.3484 3.65163 17.6964 4.18 17.1678L16.863 4.48676H16.862ZM16.862 4.48676L19.5 7.12476" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              name="username"
              onChange={handleChangeInput}
              value={form.username}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Nombre Completo
            </label>
            <input
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="fullName"
              name="fullname"
              onChange={handleChangeInput}
              value={form.fullname}
              type="text"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
              Ocupación
            </label>
            <input
              name="occupation"
              onChange={handleChangeInput}
              value={form.occupation}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="occupation"
              type="text"
              placeholder="Ocupación"
            />
          </div>
          <hr className="my-4" />
          <div className="text-gray-700 text-lg font-bold mb-4">Sobre mí</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Ubicación
            </label>
            <input
              name="location"
              onChange={handleChangeInput}
              value={form.location}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="location"
              type="text"
              placeholder="Ubicación"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
              Formación
            </label>
            <input
              name="education"
              onChange={handleChangeInput}
              value={form.education}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="education"
              type="text"
              placeholder="Formación"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatIDo">
              Qué hago
            </label>
            <textarea
              name="about"
              onChange={handleChangeInput}
              value={form.about}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 bg-gray-100"
              id="whatIDo"
              rows="4"
              placeholder="Qué hago"
            />
          </div>
        </form>
      </div>
    </section>
  )
}