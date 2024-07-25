import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  // in fromto you can identify both where you want to go to and where you want the new state to end
  // the first object is the from object, the second object is the to object
  useGSAP(() => {
    gsap.fromTo('#red-box',{
      x:0,
      roation:0,
      borderRadius: '0%'
    },
      {
      x: 250, //moves it from 0 to 250
      repeat: -1, //makes the animation repeat
      yoyo: true, //makes animation reverse on every other cycle
      borderRadius: '100%',
      rotation: 360, //makes the nimation rotate
      duration : 2, //determines how long the animation goes from start to finish
      ease: 'power1.inOut' //how the animation plays
    })
  }, [])
  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
