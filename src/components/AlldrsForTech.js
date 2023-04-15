import { useState } from "react";
import RejectMessage from "./RejectMessage";
import { useNavigate } from "react-router-dom";

const AlldrsForTech = ({ drs }) => {

    let localAuth = localStorage.getItem('auth-token')
    let navigate = useNavigate();
    const [message, setMessage] = useState();


    let docId;
    let docRole;

    const handleUpdate = (id, role) => {
        // console.log("curr id: " + id + " " + role);
        docId = id;
        docRole = role;
        changeDoctorStatus(docId, docRole);
    }


    const changeDoctorStatus = async (id, role) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localAuth,
            },
            body: JSON.stringify({
                tochange: role
            })
        };
        fetch(`${process.env.REACT_APP_URL}/api/auth/updatedrstatus/${id}`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    setMessage(data.error)
                    
                } else {
                    setMessage("Status Modifed")
                    // setTimeout(() => {
                    //     navigate("/tech")
                    // }, 3000);
                }
            });

            

    }

    // // console.log(role)

    if(message){
        setTimeout(() => {
                setMessage("")
            }, 2000);
    }

    const docVerified = () =>{
       // Copy code here
    }

    return (
        <>
            <>
                {message && <p style={{
                position:"absolute",
                top:"6rem",
                right:"3rem",
                padding: "5px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                border:"1px solid black",
                borderRadius:"9px",
                zIndex:"999",
                transition: "ease-in 0.5s",

            }}
            className="alert w-32 bg-red-500 font-bold  h-14">{message}</p>}
                {
                    drs.map((drs) => {
                        // const { _id, name, email, status } = drs;
                        const { _id, firstname, middlename, lastname, phone, email, qualification, specialty, experience, domain, address, license, status } = drs;
                        const handleOnChange = (e) => {
                            // // console.log("clicked handleOnChange");
                            // // console.log(userData);
                            handleUpdate(_id, e.target.value)
                        }
                        return (
                            <tr class="bg-gray-100 border-b" key={_id}>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {firstname}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {middlename}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {lastname}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {phone}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {email}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {qualification}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {specialty}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {experience}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {domain}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {address}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    {license}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {status}
                                </td>
                                <td class="text-sm text-gray-899 font-light px-6 py-4 whitespace-nowrap">
                                    <RejectMessage drs={drs}/>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <select className="outline-none border border-gray-400 py-1 bg-slate-100" id="role" name="role" onChange={handleOnChange}>
                                        <option value="0" title="Approved by MR" defaultChecked>{status}</option>
                                        <option title="Website on the way" onClick={docVerified()} value="Verified">Verified</option>
                                        
                                    </select>
                                </td>
                            </tr>
                        )
                    })
                }
            </>
        </>
    )
}


export default AlldrsForTech