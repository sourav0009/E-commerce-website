import BlogCard from "./BlogCard";

const data = [
    {
        img: "/post__1.webp",
        title: "Healthy Food Healthy life",
        date: "Age 27, 2023",
        Comment: 8,
    },
    {
        img: "/post__2.webp",
        title: "Healthy Food Healthy life",
        date: "Age 25, 2023",
        Comment: 1,

    },
    {
        img: "/post__3.webp",
        title: "Healthy Food Healthy life",
        date: "Age 30, 2023",
        Comment: 6,

    },
];


const BlogSection = () => {
    return (
        <div className=" container pt-16">
            <h2 className="font-bold text-2xl">Latest News</h2>
            <p className=" text-gray-500">Present Posts in a best way to highlight interesting moments of your blog</p>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BlogCard
                        key={el.date}
                        img={el.img}
                        title={el.title}
                        date={el.date}
                        Comment={el.Comment}
                    />
                ))}
            </div>
        </div >
    )
}

export default BlogSection
