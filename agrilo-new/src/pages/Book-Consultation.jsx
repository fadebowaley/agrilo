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
                <form className="space-y-4 text-left">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-md" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-md" />
                    <textarea rows="5" placeholder="Tell us about your needs..." className="w-full px-4 py-3 border rounded-md" />
                    <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md">
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