"use client"
import React, { useState } from 'react'
import { Select } from 'antd'

const page = () => {
    const [file, setFile] = useState(null)
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }

    const handleChange = (e) => {
        console.log(e);
    }

    const dropHandler = (e) => {
        console.log("File(s) dropped");
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...e.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                console.log(item);
                if (item.type.split("/")[0] === "image") {
                    const file = item.getAsFile();
                    setFile(URL.createObjectURL(file))

                } else {
                    alert("Given file is not a valid image ")
                }
            });
        } else {
            console.log(e.dataTransfer.items, e.dataTransfer.files);
            [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const chooseFile = async (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    };
    return (
        <section className='s-content'>
            <div className="s-content__entry-header">
                <h1 className="s-content__title">Publish Your Ideas.</h1>
            </div>
            <div className="row" style={{ width: "50%" }}>
                <div className="column large-12 tab-12">

                    <form>
                        <div>
                            <label htmlFor="sampleInput">Title</label>
                            <input className="h-full-width" type='text' placeholder="Title Of The Post" id="sampleInput" required />
                        </div>
                        <div>
                            <label htmlFor="exampleMessage">Description</label>
                            <textarea className="h-full-width" rows={2} placeholder="Description Of The Post" required />
                        </div>
                        <div>
                            <label htmlFor="exampleMessage">Hashtags To Include</label>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                onChange={handleChange}
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
                                <img src={file} />

                            </div>
                        </div>
                        <input className="btn--primary h-full-width" type="submit" defaultValue="Submit" />
                    </form>
                </div>

            </div>

        </section>
    )
}


export default page