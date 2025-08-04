export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center shadow-lg mt-auto">
      <div className="mx-auto max-w-[95%]">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Proghive Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
