import React, { useRef } from 'react';
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import { useTheme } from '../../constants/theme';
import AppWrap from '../../wrapper/AppWrap';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const Contact = () => {
    const { isTheme, toggleTheme } = useTheme();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g6wj08g', 'template_nr49pgc', form.current, 'd6RMeQuoZkOZfaBkc')
        .then((result) => {
            console.log(result.text);
            toast.success('Email sent successfully');
        }, (error) => {
            console.log(error.text);
            toast.error('Failed to send email');
        });
    };
    return (
        <div data-aos="fade-up" className='lg:w-4/6 w-5/6 mx-auto mb-10'>
            <form ref={form} onSubmit={sendEmail}>

                {/* <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" /> */}

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
                        name="from_name"
                        id="name"
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="Enter your name"
                        required
                       
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
                        name="from_email"
                        id="email"
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="Enter your email address"
                        required
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
                        name="message"
                        rows={4}
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-primary/100"
                        placeholder="Leave a message..."
                        required
                    />

                </div>
                <button
                  type="submit" 
                  value="Send"
                    className="min-h-[44px] relative overflow-hidden px-4 py-2 rounded-lg hover:shadow-2xl transition-all duration-200 bg-primary group text-white"
                > <FaPaperPlane className='inline-block mr-2'></FaPaperPlane>
                    Send
                </button>

            </form>

        </div>
    );
};

export default AppWrap(Contact, 'contact');