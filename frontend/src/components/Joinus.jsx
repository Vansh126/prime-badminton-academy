import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CdJoinus = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    // Initialize EmailJS once when component mounts
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        console.log("Initializing EmailJS with Public Key:", publicKey);

        if (publicKey) {
            emailjs.init(publicKey);
            console.log("✅ EmailJS initialized successfully");
        } else {
            console.warn("⚠️ EmailJS Public Key not found in environment variables");
        }
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        contact: "",
        level: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            console.log("Submitting form...");
            console.log("Service ID:", serviceId);
            console.log("Template ID:", templateId);

            if (!serviceId || !templateId) {
                throw new Error("❌ Email configuration incomplete. Please add VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID to .env.local");
            }

            if (!form.current) {
                throw new Error("❌ Form reference not found");
            }

            // Send email directly using EmailJS
            console.log("Sending email with EmailJS...");
            const result = await emailjs.sendForm(serviceId, templateId, form.current);

            console.log("✅ Email sent successfully:", result);

            toast.success("✅ Successfully joined! Confirmation email sent.", {
                position: "top-center",
                autoClose: 3000,
            });

            // Reset form fields
            setFormData({
                name: "",
                gender: "",
                contact: "",
                level: "",
                email: "",
                address: "",
            });

            // Reset form reference
            if (form.current) {
                form.current.reset();
            }

        } catch (error) {
            console.error("❌ Error sending email:", error);
            toast.error(`❌ ${error.message}`, {
                position: "top-center",
                autoClose: 4000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#1b1b1b]">
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="bg-[#111111] p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-cyan-400/80 text-white"
            >
                <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-6 mt-20">
                    Join Us
                </h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />
                <div className="mb-4 flex gap-4">
                    {["male", "female", "other"].map((g) => (
                        <label key={g} className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={formData.gender === g}
                                onChange={handleChange}
                                required
                            />
                            <span className="capitalize">{g}</span>
                        </label>
                    ))}
                </div>
                <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="w-full mb-4 p-2 rounded bg-[#1f1f1f]"
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-cyan-500 text-black font-semibold py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Sending..." : "Submit"}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CdJoinus;