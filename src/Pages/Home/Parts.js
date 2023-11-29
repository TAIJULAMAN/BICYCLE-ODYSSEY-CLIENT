import React from 'react';
import Part from './Part';
import useParts from './../../hooks/useParts';
import { useNavigate } from 'react-router-dom';
import CardLoading from '../Shared/Loading/CardLoading';

const Parts = () => {
    const [isLoading, part, ] = useParts()
    const navigate = useNavigate()
    const handleSeeAll = ()=> {
        navigate('/parts')
    }
    if(isLoading){
        return <CardLoading />
    }
    return (
        <div className='mt-5 bg-slate-100'>
            <h1 className='text-4xl font-extrabold text-bold text-center'>All Parts</h1>
            <div className="grid blog-posts grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">

            {part?.slice(0,6).map(item=><Part key={item._id} item={item}></Part>)}
            </div>

            <div className='flex justify-center'>
            <button onClick={handleSeeAll} className="btn my-4 btn-secondary">
            See All Parts
          </button>
            </div>
            
        </div>
    );
};

export default Parts;