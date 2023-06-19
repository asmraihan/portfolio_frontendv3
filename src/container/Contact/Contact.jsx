import React from 'react';
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import { useTheme } from '../../constants/theme';
import AppWrap from '../../wrapper/AppWrap';
const Contact = () => {
    const { isTheme, toggleTheme } = useTheme();
    return (
        <div data-aos="fade-up" className='lg:w-4/6 w-5/6 mx-auto mb-10'>
            <form>
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="text-sm mt-1 text-gray-500">
                    <FaEnvelope className='inline-block w-4 h-4 my-4 mt-[14px]'></FaEnvelope> asmraihanctg14@gmail.com
                </p>

                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className={`block mb-4 text-sm font-medium ${isTheme === 'dark' ? 'dark:text-[ #f5f5f5]' : 'text-gray-900'}`}
                    >
                        User name
                    </label>
                    <input
                        type="name"
                        id="name"
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="User name"

                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className={`block mb-4 text-sm font-medium ${isTheme === 'dark' ? 'dark:text-[ #f5f5f5]' : 'text-gray-900'}`}
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="emailaddress@mail.com"
                        required=""
                    />
                </div>

                <div className="flex items-start flex-col mb-6">
                    <label
                        htmlFor="message"
                        className={`block mb-4 text-sm font-medium ${isTheme === 'dark' ? 'dark:text-[ #f5f5f5]' : 'text-gray-900'}`}
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="Leave a message..."
                        defaultValue={""}
                    />

                </div>
                <button
                    type="submit"
                    className="min-h-[44px] relative overflow-hidden px-4 py-2 rounded-lg hover:shadow-2xl transition-all duration-200 bg-primary group text-white"
                > <FaPaperPlane className='inline-block mr-2'></FaPaperPlane>
                    Send
                </button>
            </form>

        </div>
    );
};

export default AppWrap(Contact, 'contact');