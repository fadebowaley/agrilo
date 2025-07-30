import MainNav from "../components/MainNav";
import React from 'react';
import { CalendarCheck2, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function BookConsultation() {
    return(
        <>  
        <MainNav />
        <Hero title="Book Consultation" bgImage="/images/hero/blog.jpg" />
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p className="text-gray-600 mb-8 font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Fill out the form below and our team will reach out to you to schedule a consultation.
                </motion.p>
                <form className="space-y-6 text-left bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                        rows="5"
                        placeholder="Tell us about your needs..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition font-medium shadow-sm"
                    >
                        <Send size={18} />
                        Submit
                    </button>
                    </form>

            </div>
        </section>
        <Footer />
        </>
    )
}

export default BookConsultation;