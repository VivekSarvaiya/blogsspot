import React from 'react';
import dynamic from 'next/dynamic'
import Loader from '@/app/loader'

const HomePage = dynamic(() => import('@/components/HomePage'), {
    loading: () => <Loader />,
})

const Home = () => {
    return <HomePage />
}

export default Home