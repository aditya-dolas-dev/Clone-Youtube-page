import { FaTwitter,FaYoutube,FaInstagram,FaGithub } from "react-icons/fa";
const Contact = () => {

  const links = [
    {
      href: "https://twitter.com/@adityadolas99",
      label: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
    },
    {
      href: "https://youtube.com/@adityadolas218",
      label: "YouTube",
      icon: <FaYoutube className="h-6 w-6 text-red-600" />,
    },
    {
      href: "https://github.com/aditya-dolas-dev",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-gray-900" />,
    },
    {
      href: "https://instagram.com/a_aa__08",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
  ];
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact</h2>

      <div className="flex items-center">
       {links.map((link)=>(
        <a 
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
        >
        <span className="text-lg">{link.label}</span>
        <span>{link.icon}</span>
        </a>
       ))}  
       
      </div>

    </section>
  )
}

export default Contact