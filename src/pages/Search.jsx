import { useState } from 'react';
import Navbar from '../atoms/Navbar';
import { ClipLoader } from "react-spinners";
import SearchForm from '../atoms/forms/SearchForm';
import fetchHelper from '../helpers/fetchHelper';
import ListOfUsers from '../atoms/ListOfUsers';

export default function Search() {
  const [searchUsers, setSearchUsers] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const searchUserHandler = async (e) => {
    setEmpty(false);
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const result = await fetchHelper(`http://localhost:3000/user/?name=${name}`, "GET", {}, true);
    setLoading(false);
    if (!result.errors){
    if (result.length == 0) {
      setEmpty(true);
      return;
    }
    setSearchUsers(result);
    }else{
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc
      }, {});
      setErrors(errorsObj);
    }
  }

  return (
    <div className='flex flex-col relative items-center min-h-screen px-4 md:px-0 py-10 pb-30 md:py-20 md:pb-40 bg-gray-200'>
            {loading ? 
              <ClipLoader
                color="000000"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"/> 
            : <>
                <SearchForm searchUserHandler={searchUserHandler} errors={errors} />
                <br />
                <br />
                {
                  empty ?
                  <h2>No results found</h2>
                  :
                  <ListOfUsers usersList={searchUsers} followers={false} header={false} />
                }
              </>
            }
      <Navbar />
    </div>
  )
}
