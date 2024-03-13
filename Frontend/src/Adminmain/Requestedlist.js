// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'reactstrap';

// const DonorTable = () => {
//   const [request, setRequest] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/requestblood');
//         console.log(response.data);
//         setRequest(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Patient Table</h2>
//       <Table responsive>
//         <thead>
//           <tr>
//             <th>Patient ID</th>
//             <th>Patient Name</th>
//             <th>Patient Age</th>
//             <th>Patient Group</th>
//             <th>Patient Gender</th>
//             <th>Patient Phone</th>
//             <th>Patient Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {request.map((Patient) => (
//             <tr key={Patient.patient_id}>
//               <td>{Patient.patient_id}</td>
//               <td>{Patient.patient_name}</td>
//               <td>{Patient.patient_age}</td>
//               <td>{Patient.patient_group}</td>
//               <td>{Patient.patient_gender}</td>
//               <td>{Patient.patient_phone}</td>
//               <td>{Patient.patient_address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default DonorTable;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import '../css/Requestedlist.css';

const DonorTable = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/requestblood');
        console.log(response.data);
        setRequest(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
     <div>
      <h1 className='request_header'>Requested User</h1>
<table className="request_user">
	<thead>
		<tr>
        <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Patient Age</th>
             <th>Patient Group</th>
            <th>Patient Gender</th>
            <th>Patient Phone</th>
             <th>Patient Address</th>
             <th>Patient Hospital</th>
		</tr>
	</thead>
	<tbody>
    {request.map((Patient) => (
             <tr key={Patient.patient_id}>
               <td>{Patient.patient_id}</td>
               <td>{Patient.patient_name}</td>
               <td>{Patient.patient_age}</td>
               <td>{Patient.patient_group}</td>
               <td>{Patient.patient_gender}</td>
               <td>{Patient.patient_phone}</td>
               <td>{Patient.patient_address}</td>
               <td>{Patient.patient_hospital}</td>
             </tr>
           ))}
			</tbody>
</table>
</div>


  );
};

export default DonorTable;