import React, { useContext, useState } from 'react'
import withAuth from '../utils/WithAuth'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="flex justify-between px-4 py-3 shadow-md">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2 className='text-3xl font-serif font-bold'>Web Talk</h2>
                </div>

                <div className='flex items-center justify-center space-x-3'>
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon />
                    </IconButton>
                    <p>History</p>

                    <Button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}>
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer grid grid-cols-2 pt-10">
                <div className="leftPanel p-5 ml-5">
                    <div>

                    <h2 className='text-4xl font-semibold  space-x-4 text-slate-800'><strong className='text-orange-500 pr-2'>Providing</strong>Quality Video Call<br />Just Like Quality Education </h2>
                
                        <h2 className='text-3xl font-bold'> <span className='text-orange-500'></span>  <br /> </h2>

                        <div className='mt-10' style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code"  />
                            <button className='px-4 py-2 rounded-md  bg-orange-500 text-white' onClick={handleJoinVideoCall}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)