import { Mail } from "lucide-react";
import SectionWrapper from "../miniComponents/SectionWrapper";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="space-y-8 min-h-100 flex items-center justify-center flex-col"
    >
      <h2 className="heading">Contact</h2>
      <p className="text-muted-foreground text-center mb-4">
        Open to remote opportunities. Let&apos;s connect:
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          href={"mailto:h.namazi91@gmail.com"}
          className="flex items-center hover:underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
        >
          <Mail className="w-4 h-4 mr-2" />
          h.namazi91@gmail.com
        </Link>

        <Link
          href={"https://github.com/NamaziHamed"}
          target="_blank"
          className="flex items-center hover:underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
        >
          <FaGithub className="w-4 h-4 mr-2" />
          Github
        </Link>

        <Link
          href={"https://www.linkedin.com/in/hamed-namazi-85a3573a0"}
          target="_blank"
          className="flex items-center hover:underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
        >
          <FaLinkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Link>

        <Link
          href={"https://t.me/hamednamazi"}
          target="_blank"
          className="flex items-center hover:underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
        >
          <FaTelegram className="w-4 h-4 mr-2" />
          Telegram
        </Link>

        <Link
          href={"https://x.com/hamednamazi7"}
          target="_blank"
          className="flex items-center hover:underline hover:text-blue-400 transition-colors duration-300 ease-in-out"
        >
          <FaXTwitter className="w-4 h-4 mr-2" />X (Twitter)
        </Link>
      </div>
    </SectionWrapper>
  );
}
