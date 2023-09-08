"use client"
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';

import axios from 'axios';
import { Select } from 'antd'

import ImageSearch from "@/components/ImageSearch/ImageSearch"

const page = () => {
    const { data: session } = useSession();

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        tags: [],
    })

    const changeHamdler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('userId', session?.user.id);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('tags', data.tags);
        image && formData.append('image', image);

        try {
            const response = await axios.post('/api/blog/new', formData)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='s-content'>
            <div className="s-content__entry-header">
                <h1 className="s-content__title">Publish Your Ideas.</h1>
            </div>

            <div className="column large-6 medium-8 tab-10 mob-11" style={{ margin: "auto" }}>

                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input className="h-full-width" type='text' placeholder="Title Of The Post" required name='title' onChange={changeHamdler} />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea className="h-full-width" rows={2} placeholder="Description Of The Post" required name='description' onChange={changeHamdler} />
                    </div>
                    <div>
                        <label htmlFor="hashtags">Tags </label>
                        <Select
                            mode="multiple"
                            style={{ width: '100%', fontSize: '20px' }}
                            placeholder="Please select"
                            onChange={(e) => setData({ ...data, tags: e })}
                            options={options}
                        />
                    </div>
                    <ImageSearch setImage={setImage} />
                    <input className="btn--primary h-full-width" type="button" defaultValue="Submit" onClick={submitHandler} />
                </form>
            </div>

        </section>
    )
}


export default page