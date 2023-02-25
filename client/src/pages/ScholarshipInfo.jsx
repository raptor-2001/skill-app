import React from 'react'
import { useParams } from 'react-router-dom'
import { scholarshipDetails } from '../data'

const ScholarshipInfo = () => {
  const params = useParams();


  let detail;
  
  scholarshipDetails.map((scholarship => {
    if(params.title == scholarship.title){
      detail = scholarship.detail;
      return
    }
  }))

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{detail.title}</h2>
      <p className="mt-2 text-gray-600">{detail.description}</p>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="font-semibold">Amount:</span>
          <span className="ml-2">₹{detail.amount}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Deadline:</span>
          <span className="ml-2">{detail.deadline}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Eligibility:</span>
          <span className="ml-2">
            Minimum GPA of {detail.eligibility.minimumGPA}, {detail.eligibility.enrollmentStatus}, 
            major in {detail.eligibility.major.join(', ')}, 
            residency in {detail.eligibility.residency.join(', ')}.
            {detail.eligibility.additionalCriteria}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Application Process:</span>
          <span className="ml-2">
            Apply online <a href={detail.applicationProcess.applicationLink}>here</a> by {detail.applicationProcess.applicationDeadline}.
            Required materials: {detail.applicationProcess.applicationMaterials.join(', ')}.
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Contact:</span>
          <span className="ml-2">{detail.contact.name}, {detail.contact.email}, {detail.contact.phone}, {detail.contact.address}</span>
        </div>
      </div>
      <main>
      <form onSubmit={handleSubmit}>
      <label className="mt-10 block text-gray-700 font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className="block text-gray-700 font-bold mb-2" htmlFor="passport">
        Photo ID
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
        id="passport"
        type="file"
        name="passport"
        accept=".pdf,.jpeg,.png,.jpg"
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
      </main>
    </div>
    
  )
}

export default ScholarshipInfo