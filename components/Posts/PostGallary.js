import React from 'react'

const PostGallary = ({ blogs }) => {
    return (
        <>
            <section className="s-content s-content--no-top-padding">
                <div className="s-bricks">
                    <div className="masonry">
                        <div className="bricks-wrapper h-group">
                            <div className="grid-sizer" />
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                            {
                                blogs?.map((blog, i) => (
                                    <article className="brick entry" data-aos="fade-up" key={i}>
                                        <div className="entry__thumb">
                                            <a href="single-standard.html" className="thumb-link">
                                                <img src={blog?.image} alt="" />
                                            </a>
                                        </div>
                                        <div className="entry__text">
                                            <div className="entry__header">
                                                <h1 className="entry__title"><a href="single-standard.html">{blog?.title}</a></h1>
                                                <div className="entry__meta">
                                                    <span className="byline">By:
                                                        <span className="author">&nbsp;
                                                            <a href=" #0"> {blog?.creator?.username}</a>
                                                        </span>
                                                    </span>
                                                    <span className="cat-links">
                                                        {
                                                            blog?.tags?.map((tag, i) => (
                                                                <a href="#" key={i}>{tag}</a>
                                                            ))
                                                        }

                                                    </span>
                                                </div>
                                            </div>
                                            <div className="entry__excerpt">
                                                <p>{blog?.description}</p>
                                            </div>
                                            <a className="entry__more-link" href="#0">Read More</a>
                                        </div>
                                    </article>

                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default PostGallary