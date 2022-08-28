/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
import { router } from "https://crux.land/router@0.0.11";
import { h, ssr } from "https://crux.land/nanossr@0.0.5";

const render = (component) => ssr(() => <App>{component}</App>);

serve(router(
  {
    "/": () => render(<Landing />),
    
    // Fisrt
    "/about": () => render(<About />),
    "/experience": () => render(<Experience />),
    "/skills": () => render(<Skills />),
    "/interests": () => render(<Interests />),

    // Skills
    "/image": () => render(<Image />),
    "/audio": () => render(<Audio />),
    "/video": () => render(<Video />),
    "/word": () => render(<Word />),
    "/excel": () => render(<Excel />),
    "/power": () => render(<Power />),
  },
  (d) => {
    render(<NotFound />)
  },
));

function App({ children }) {
  return (
    //text-[#69F5FF]
    <div class="min-h-screen bg-[#ACE6FC]">
      <NavBar />
      {children}
      <script type="text/javascript" src="https://gistcdn.githack.com/hashdashme/b208d53b69c5f6d76ec5510ae8c33abe/raw/9a31ccb786538bccd88b983b209867b93728e68b/smooth.js"></script>
    </div>
  );
}

function NavBar() {
  return (
    <nav class="sticky flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
     <div class="mb-2 sm:mb-0">
      <a href="/" class="text-2xl no-underline">The Website</a>
     </div>
     <div class="space-x-7 text-lg no-underline ml-3">
        <a href="/about" class="hover:text-gray-200">About</a>
        <a href="/experience" class="hover:text-gray-200">Experience</a>
        <a href="/skills" class="hover:text-gray-200">Skills</a>
        <a href="/interests" class="hover:text-gray-200">Interests</a>
     </div>
    </nav>
  );
}

function Landing() {
  return (
    <div>
      <div class="flex justify-center items-center">
        <div class="max-w-7xl py-24 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-[#242424] md:text-4xl">
            <span class="block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>Hey 👋 I'm Oscar,</span>
            <span class="block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>I make stuff.</span>
            <span class="py-6 text-[#2e2e2e] text-2xl font-bold block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>Winking with two eyes since 2004.</span>
            <div class="flex justify-center items-center space-x-5 py-9">
              <div class="block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform hover:transition hover:ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg></div>
              <div class="block translate-y-12 duration-700 transition-[transform,opacity] delay-700 relative opacity-0 transform hover:transition hover:ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" /> </svg></div>
              <div class="block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform hover:transition hover:ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fillRule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" clipRule="evenodd" /> </svg></div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}



function NotFound() {
  return (
    <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="max-w-max mx-auto">
        <main class="sm:flex">
          <p class="text-4xl font-extrabold text-[#242424] sm:text-5xl">404</p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 class="text-4xl font-extrabold text-[#242424] tracking-tight sm:text-5xl">Page not found</h1>
              <p class="mt-1 text-base text-[#242424]">Nothing to see here mate! (TODO: actually make it return the status code 404)</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Time for task 12
function About() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">About</h1>
      </div>
      {/* <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">// What is Cloud Computing?</h2>
      </div> */}
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I'm a random guy on the internet that makes things. I automate a two minute task in 2 months.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">Whats this?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>A website is what this is. It is hosted with Deno Deploy, uses TailwindCSS + a tiny script for the looks and NanoSSR for the snappy browsing experience. Most of the media/content is hosted on a blockchain network (Sia).</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-700 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">Anything else?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>In about 90 days from now (28 Aug 2022) the site will begin to decay, some content will no longer exist..</p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Experience</h1>
      </div>
      {/* <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">// What is Cloud Computing?</h2>
      </div> */}
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I have 17 years of life experience. I have built programs and websites (such as this one).</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">What Langauges have I used?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Python, Javascript, Typescript, html + css (up to you to decide whether its a language), c# and English (hopefully)</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-700 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">Anything else?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I am also familar with various applications from development tools to creative suites, some products are Office Suite, Adobe, and many more...</p>
      </div>
    </div>
  )
}

function Interests() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Interests</h1>
      </div>
      {/* <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">// What is Cloud Computing?</h2>
      </div> */}
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I often find myself spending a countless amount of time staring at bunch of pixels...</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">So what are my interests?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I have a tendeancy to automate anything that takes longer than 10 seconds... (if possible) into a script which takes over a month or two to achieve. Aside from that, I enjoy programming (if you didn't pick it up already..) and reading books.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-700 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h2 class="font-bold text-2xl text-center">Anything else?</h2>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Let me think about that...</p>
      </div>
    </div>
  )
}

const skills = [
  {
    name: 'Image',
    summary: '',
    link: '/image',

  },
  {
    name: 'Audio',
    summary: '',
    link: '/audio',
  },
  {
    name: 'Video',
    summary: '',
    link: '/video',
  },
  {
    name: 'Word Processing',
    summary: '',
    link: '/word',
  },
  {
    name: 'Spreadsheets',
    summary: '',
    link: '/excel',
  },
  {
    name: 'Slideshows',
    summary: '',
    link: '/power',
  }
]

function Skills() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      {/* <div class="max-w-7xl py-6 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">My Skills!</h1>
      </div>
      <div class="flex justify-center items-center text-center text-gray-500 block delay-150 translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        No, i totally didn't generate these skills from a variable named 'skills' which contains... Ah what ever, go ahead and explore.
      </div> */}
      <div class={`grid grid-flow-row-dense md:grid-cols-1 grid-rows-${skills.length} gap-7 py-8`}>
        {skills.map((skill) => (
          <div key={skill.name} class="text-center font-extrabold text-6xl sm:text-5xl py-2 px-8 space-y-1 flex flex-1 flex-col justify-between text-white block duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "opacity-0": "opacity-100" }'>
            <a class="hover:text-[#242424] duration-300" href={skill.link}>{skill.name}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Image() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Image</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I can create and manipulate images.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <img class="rounded block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-97673c7/wp-content/uploads/2020/08/photoshop-cc.jpg" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'></img>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I am proficient with Photoshop (as demonstrated above), MS Paint, Preview, Gimp...</p>
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}

function Audio() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Audio</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I can create audio.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <audio controls class="block content-center translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
          <source src="https://siasky.net/JABsGL6vDErDf2R-kmvbumZecUFDDSUrxVTLdWcs79HYlw" type="audio/mp3"/>
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Audacity, Microphone and a human was used to create this piece of audio. (No humans were harmed during the creation of this audio)</p>
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}

function Video() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Video</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I can create motion pictures with and without sound.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <video width="1280" length="720" controls class="block content-center translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
          <source src="https://siasky.net/CABKN8u0DIUnYCb5KWMj-4HKozmPXrQ2l6d1wq26OpFSYA" type="video/mp4"/>
        </video>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        {/* <p></p>/ */}
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}

function Word() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Word Processing</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I create documents that contain text.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <img class="rounded block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" src="https://siasky.net/PAJ3fqT2DF4wa_Bmjo9En-UtwEjpCWxgtqrVz8m9FspuwA" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'></img>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Some software I use to achieve this are: Word, TextEdit, Notes, ...</p>
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}

function Excel() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Spreadsheets</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I am proficient in Spreadsheets</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <img class="rounded block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" src="https://siasky.net/TABi0COGLLT3prYhXTFokwA1OtbjEdBP68u_plv383SJDw" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'></img>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Some software I use to achieve this are: Excel, Numbers, ...</p>
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}

function Power() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-[#242424]">
      <div class="max-w-7xl py-12 px-6 block translate-y-12 duration-700 transition-[transform,opacity] relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#242424] text-center">Skills - Presentations</h1>
      </div>
      <div class="text-center flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-150 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>I can make presentations on my computer.</p>
      </div>
      <div class="flex justify-center items-center py-8 block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <img class="rounded block translate-y-12 duration-700 transition-[transform,opacity] delay-300 relative opacity-0 transform" src="https://siasky.net/ZAD7_NA043nwsNfeTBgg8EkOqDpbB1oXRuT13xo3DDU0GQ" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'></img>
      </div>
      <div class="flex justify-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-500 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <p>Some software I use to achieve this are: Powerpoint, Keynote, ...</p>
      </div>
      <div class="flex py-12 justify-center text-center items-center block translate-y-12 duration-700 transition-[transform,opacity] delay-1000 relative opacity-0 transform" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <a class="font-bold text-2xl text-white hover:text-[#242424] duration-300" href="/skills">Back to Skills</a>
      </div>
    </div>
  )
}