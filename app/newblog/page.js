"use client"
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { Select } from 'antd'
import axios from 'axios';

const page = () => {
    const { data: session } = useSession();
    const [imagePreview, setImagePreview] = useState(null)
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

    const dropHandler = (e) => {
        e.preventDefault();

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...e.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.type.split("/")[0] === "image") {
                    const file = item.getAsFile();
                    setImage(file)
                    setImagePreview(URL.createObjectURL(file))
                } else {
                    console.log("Given file is not a valid image ")
                }
            });
        } else {
            [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const chooseFile = async (e) => {
        setImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };

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
            {/* <div className="row "> */}
            <div className="column large-8 medium-8 tab-10 mob-11" style={{ margin: "auto" }}>

                <form>
                    <div>
                        <label htmlFor="sampleInput">Title</label>
                        <input className="h-full-width" type='text' placeholder="Title Of The Post" required name='title' onChange={changeHamdler} />
                    </div>
                    <div>
                        <label htmlFor="exampleMessage">Description</label>
                        <textarea className="h-full-width" rows={2} placeholder="Description Of The Post" required name='description' onChange={changeHamdler} />
                    </div>
                    <div>
                        <label htmlFor="exampleMessage">Hashtags To Include</label>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={(e) => setData({ ...data, tags: e })}
                            options={options}
                        />
                    </div>
                    <div>
                        <label htmlFor="exampleMessage">Thumbnail Image</label>
                        <div className="image_upload_container" onDrop={dropHandler} onDragOver={dragOverHandler}>
                            <div className="select_file_container" htmlFor="chooseFile">
                                <span>Drag and drop the image here</span>
                                <span>Or</span>
                                <div className="choose_file">
                                    <label htmlFor="chooseFile">Select File</label>
                                    <input hidden type="file" accept="image/*" id="chooseFile" onChange={chooseFile} />
                                </div>
                            </div>

                        </div>
                        <img src={imagePreview} />
                    </div>
                    <input className="btn--primary h-full-width" type="button" defaultValue="Submit" onClick={submitHandler} />
                </form>
            </div>

            {/* </div> */}
        </section>
    )
}


export default page