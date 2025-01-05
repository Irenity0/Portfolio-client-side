const ContactSection = () => {
    return (
        <section id="contact" className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
                <h1 className="text-5xl text-accent font-semibold font-playfair underline">
                    Contact Me
                </h1>
                <p className="text-secondary">
                    Reach out to me directly through email, phone, or WhatsApp for any inquiries or communication.
                </p>
            </div>

            {/* Direct Email Option */}
            <div className="space-y-4">
                <h2 className="text-3xl text-accent font-rosario">For Quick Communication:</h2>
                <a
                    href="mailto:lilithkard77@gmail.com"
                    className="inline-block py-2 px-6 bg-secondary text-base-300 font-bold rounded-md text-lg"
                >
                    Send me an Email
                </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mt-6 p-2 border-2 border-secondary rounded-lg bg-secondary/10 inline-block">
                {/* Email */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl text-secondary">Email:</span>
                    <a
                        href="mailto:lilithkard77@gmail.com"
                        className="text-accent font-rosario text-lg hover:underline"
                    >
                        lilithkard77@gmail.com
                    </a>
                </div>

                {/* Phone Number */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl text-secondary">Phone:</span>
                    <span className="text-accent font-rosario text-lg">+1 234 567 890</span>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl text-secondary">WhatsApp:</span>
                    <a
                        href="https://wa.me/1234567890"
                        className="text-accent font-rosario text-lg hover:underline"
                    >
                        +1 234 567 890
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
