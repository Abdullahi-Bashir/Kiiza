import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';  // This should now work after installing the package

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus('success');
                form.current.reset();
                alert('Message sent successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-[#4ade80] text-3xl mb-4">Let's talk</h3>
                        <p className="text-gray-300 text-lg mb-8">
                            I'm open to discussing web development projects or partnership opportunities.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-[#4ade80]">✉</span>
                                <p className="text-gray-300">youremail@example.com</p>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <span className="text-[#4ade80]">📞</span>
                                <p className="text-gray-300">+123 456 7890</p>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <span className="text-[#4ade80]">📍</span>
                                <p className="text-gray-300">1234 Street, City, Country</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-gray-300 mb-2 block">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-[#1f2937] rounded-lg px-4 py-3 text-gray-300"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 mb-2 block">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-[#1f2937] rounded-lg px-4 py-3 text-gray-300"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 mb-2 block">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="6"
                                className="w-full bg-[#1f2937] rounded-lg px-4 py-3 text-gray-300"
                                placeholder="Write Message"
                            ></textarea>
                        </div>

                        <input 
                            type="hidden" 
                            name="to_name" 
                            value="Your Name"
                        />

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-gradient-to-r from-[#4ade80] to-[#3aa364] text-black font-medium 
                            py-3 px-8 rounded-full hover:opacity-90 transition-opacity 
                            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="text-green-500 text-center py-2">
                                Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="text-red-500 text-center py-2">
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
