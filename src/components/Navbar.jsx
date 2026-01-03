import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { navLinks } from "../constants"

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top bottom",
      },
    });

    navTween.fromTo("nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    )
  })

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="size-6" />
          The Violet Mocks
        </a>

        <ul>
          {navLinks?.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
