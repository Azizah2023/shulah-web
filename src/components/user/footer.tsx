const Footer = () => {
  return (
    <footer className=" text-gray-500 text-center py-4 w-full fixed bottom-0">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base font-Tajawal">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
