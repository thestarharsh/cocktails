import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const Hero = () => {
    useGSAP(() => {
        const splitHero = new SplitText(".title", { type: "chars, words" });
        const splitPara = new SplitText(".subtitle", { type: "lines" });

        splitHero.chars.forEach((char) => {
            char.classList.add("text-gradient");
        })

        gsap.from(splitHero.chars, {
            yPercent: 100,
            stagger: 0.08,
            duration: 1,
            ease: "expo.out"
        })

        gsap.from(splitPara.lines, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.06,
            duration: 1.8,
            delay: 1,
            ease: "expo.out",
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        }).
            to(".right-leaf", {
                y: 200,
            }, 0)
            .to(".left-leaf", {
                y: -200,
            }, 0)
    }, [])

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <img src="/images/hero-left-leaf.png" alt="hero-left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="hero-right-leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Refreshing.</p>
                            <p className="subtitle">Sip the spirit <br /> of summer.</p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.</p>
                            <a href="#cocktails" className="btn">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero