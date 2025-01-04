const Footer = () => {
    return (
        <>
        <footer className="footer mt-6 border-t border-secondary bg-neutral text-neutral-content items-center p-4">
          <aside className="font-rosario mx-auto">
            <p className="text-base text-primary">© {new Date().getFullYear()} All right reserved by <span className="font-playfair font-extrabold text-accent">Afra Anjum.</span></p>
          </aside>
        </footer>
        </>
    );
};

export default Footer;