import { useEffect, useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSending, setIsSending] = useState(false);


    /* ================= AUTO HIDE TOAST ================= */

    useEffect(() => {

        if (!showToast) {
            return;
        }

        const timer = setTimeout(() => {

            setShowToast(false);
            setStatus("");

        }, 3000);

        return () => clearTimeout(timer);

    }, [showToast]);


    /* ================= HANDLE INPUT ================= */

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

    };


    /* ================= HANDLE SUBMIT ================= */

    const handleSubmit = async (event) => {

        event.preventDefault();

        setIsSending(true);

        setShowToast(false);

        try {

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();


            /* ================= SUCCESS ================= */

            if (data.success) {

                setStatus("Message sent successfully!");

                setIsSuccess(true);

                setShowToast(true);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });

            }


            /* ================= BACKEND ERROR ================= */

            else {

                setStatus(
                    data.message || "Failed to send message."
                );

                setIsSuccess(false);

                setShowToast(true);

            }

        } catch (error) {

            console.error("Contact form error:", error);

            setStatus(
                "Unable to send message. Please try again."
            );

            setIsSuccess(false);

            setShowToast(true);

        } finally {

            setIsSending(false);

        }

    };


    /* ================= CLOSE TOAST ================= */

    const closeToast = () => {

        setShowToast(false);

        setStatus("");

    };


    return (

        <section
            id="contact"
            className="contact-section"
        >

            {/* ================= HEADING ================= */}

            <div className="contact-heading">

                <p className="section-label">
                    LET'S CONNECT
                </p>

                <h2>
                    Get In <span>Touch</span>
                </h2>

                <p>
                    Have a project idea, opportunity, or just
                    want to connect? Feel free to reach out.
                </p>

            </div>


            {/* ================= CONTACT CONTAINER ================= */}

            <div className="contact-container">


                {/* ================= CONTACT INFORMATION ================= */}

                <div className="contact-info">

                    <h3>
                        Let's build something together.
                    </h3>

                    <p>
                        I'm always interested in learning,
                        building new projects, and exploring
                        opportunities in full-stack development.
                    </p>


                    <div className="contact-details">


                        {/* EMAIL */}

                        <a
                            href="mailto:madeshc1708@gmail.com"
                            className="contact-item"
                        >

                            <div className="contact-icon">
                                @
                            </div>

                            <div>

                                <span>
                                    Email
                                </span>

                                <strong>
                                    madeshc1708@gmail.com
                                </strong>

                            </div>

                        </a>


                        {/* GITHUB */}

                        <a
                            href="https://github.com/Madesh0804"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-item"
                        >

                            <div className="contact-icon">
                                &lt;/&gt;
                            </div>

                            <div>

                                <span>
                                    GitHub
                                </span>

                                <strong>
                                    Madesh0804
                                </strong>

                            </div>

                        </a>


                        {/* LINKEDIN */}

                        <a
                            href="https://www.linkedin.com/in/madesh-c-202948343/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-item"
                        >

                            <div className="contact-icon">
                                in
                            </div>

                            <div>

                                <span>
                                    LinkedIn
                                </span>

                                <strong>
                                    Madesh C
                                </strong>

                            </div>

                        </a>

                    </div>

                </div>


                {/* ================= CONTACT FORM ================= */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >


                    {/* NAME + EMAIL */}

                    <div className="form-row">


                        <div className="form-group">

                            <label htmlFor="name">
                                Your Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="email">
                                Your Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    {/* SUBJECT */}

                    <div className="form-group">

                        <label htmlFor="subject">
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What would you like to discuss?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* MESSAGE */}

                    <div className="form-group">

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                    </div>


                    {/* SEND BUTTON */}

                    <button
                        type="submit"
                        className="contact-button"
                        disabled={isSending}
                    >

                        {isSending
                            ? "Sending..."
                            : "Send Message →"
                        }

                    </button>

                </form>

            </div>


            {/* ================= TOAST POPUP ================= */}

            {showToast && (

                <div
                    className={`toast-message ${
                        isSuccess
                            ? "toast-success"
                            : "toast-error"
                    }`}
                >

                    <div className="toast-icon">

                        {isSuccess
                            ? "✓"
                            : "!"
                        }

                    </div>


                    <div className="toast-content">

                        <strong>

                            {isSuccess
                                ? "Success"
                                : "Error"
                            }

                        </strong>

                        <span>
                            {status}
                        </span>

                    </div>


                    <button
                        type="button"
                        className="toast-close"
                        onClick={closeToast}
                    >
                        ×
                    </button>

                </div>

            )}

        </section>

    );
}

export default Contact;