import HeroContent from "../sub/HeroContent";

export default function Hero() {
  return (
    <>
    <main className='relative flex flex-col h-full w-full'>
      <video 
      autoPlay
      muted
      loop
      className='absolute top-[-340px] left-0 z-[1] w-full h-full object-cover rotate-180'
      >
        <source src='/blackhole.webm' type='video/webm'/>
      </video>
      <HeroContent/>
    </main>
    </>
  )
}
