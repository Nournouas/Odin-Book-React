import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import LogoutCard from '../atoms/LogoutCard';

export default function Logout() {
  const [loading, setLoading] = useState(true);
  const handleSingOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    setLoading(false);
  }

  useEffect(() => {
    handleSingOut();
  }, [])
  return (
      <div className='flex flex-col relative items-center min-h-screen px-4 md:px-0 py-10 pb-30 md:py-20 md:pb-40 bg-gray-200'>
              {loading ? 
                <ClipLoader
                  color="000000"
                  loading={loading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"/> 
              : <LogoutCard />
              }
      </div>
  )
}
