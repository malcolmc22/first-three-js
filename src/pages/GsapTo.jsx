import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  // it works a lot like useEffect
  // define a cb function and a dependency array for when you want it to run
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250, //moves it from 0 to 250
      repeat: -1, //makes the animation repeat
      yoyo: true, //makes animation reverse on every other cycle
      rotation: 360, //makes the nimation rotate
      duration : 2, //determines how long the animation goes from start to finish
      ease: 'elastic' //how the animation plays
    })
  }, [])

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
