import { IoIosMail } from "react-icons/io";

const NewsLatter = () => {
    return (
        <div className=" bg-accentDark mt-16">
            <div className=" container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                <div className=" flex flex-shrink-0 items-center gap-4">
                    <IoIosMail className=" text-[60px]" />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            Sing up to our Newsletter
                        </h3>
                        <p>...and receive $20 coupan for frist shopping</p>
                    </div>
                </div>
                <div className=" w-full max-w-[500px] relative">
                    <input className=" py-4 px-6 w-full rounded-full text-black" type="text" placeholder="Your Email Address..." />
                    <button className=" bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent">Subscride</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLatter
