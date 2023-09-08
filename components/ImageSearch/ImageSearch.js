import axios from 'axios';
import React, { useState } from 'react'

const ImageSearch = ({ setImage }) => {
    const [imagePreview, setImagePreview] = useState(null)
    const [openSearch, setOpenSearch] = useState(false)
    const [result, setResult] = useState([]);

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

    const chooseFile = async (e) => {
        setImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };

    const getImages = () => {
        axios.get('api/blog/searchImages').then((res) => {
            console.log(res)
            setResult(res.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }

    if (openSearch) {
        return (
            <div>
                <label htmlFor="exampleMessage" >Search Images powered by <a href='https://www.unsplash.com'>Unsplash</a> </label>
                <input className="h-full-width" type='search' placeholder="Search by keyword" name='search' onChange={getImages} />
                <div className='images_container'>
                    {
                        result?.map((image, i) => (
                            <img src={image.small_s3} alt='' key={i} />
                        ))
                    }
                </div>
                <img src={imagePreview} />
            </div>
        )
    } else {
        return (
            <div>
                <label htmlFor="exampleMessage" style={{ display: "inline", marginRight: "1rem" }}>Thumbnail Image</label> <em> don't have a suitable image ?</em> <a style={{ cursor: "pointer" }} onClick={() => setOpenSearch(true)}>  Search Images</a>
                <div className="image_upload_container" onDrop={dropHandler} onDragOver={(e) => e.preventDefault()}>
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
        )
    }
}
export default ImageSearch