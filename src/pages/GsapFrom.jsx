import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  // the only difference between from and to is that from starts at the new positoin,
  // whereas to moves to the new position
  useGSAP(() => {
    gsap.from('#green-box', {
      x: 250, //moves it from 0 to 250
      repeat: -1, //makes the animation repeat
      yoyo: true, //makes animation reverse on every other cycle
      rotation: 360, //makes the nimation rotate
      duration : 2, //determines how long the animation goes from start to finish
      ease: 'power1.inOut' //how the animation plays
    })
  }, [])

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
