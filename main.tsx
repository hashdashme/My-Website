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
    
    // Task 9
    "/nine": () => render(<Nine />),
    "/cloudcomputing": () => render(<CloudComputing />),
  },
  () => render(<NotFound />),
));

function App({ children }) {
  return (
    //text-[#69F5FF]
    <div class="min-h-screen bg-[#0f0f0f]">
      <NavBar />
      {children}
    </div>
  );
}

function NavBar() {
  return (
    <nav class="sticky flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full top-0 z-10 bg-[#0f0f0f] backdrop-filter backdrop-blur-lg bg-opacity-30 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
     <div class="mb-2 sm:mb-0">
      <a href="/" class="text-2xl no-underline">The Website</a>
     </div>
     <div class="text-[#69aaff] space-x-7">
        <a href="/nine" class="text-lg no-underline hover:text-[#87bbff] ml-3">Task 9</a>
        <a href="https://www.youtube.com/watch?v=tO516EaRYHc" class="text-lg no-underline hover:text-[#87bbff] ml-3">Placeholder</a>
     </div>
    </nav>
  );
}

function Landing() {
  return (
    <div>
      <div class="flex justify-center items-center py-12">
        <iframe class="rounded" src="https://giphy.com/embed/tXLpxypfSXvUc" width="346" height="316" frameBorder="0"></iframe>
      </div>
      <div class="flex justify-center items-center">
        <div class="max-w-7xl py-24 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-500 md:text-4xl">
            <span class="block">We are online!</span>
            <span class="block text-[#b6d5ff]">Welcome to 'Task 12'.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:ml-8">
            <div class="inline-flex rounded-md shadow">
              <a href="/nine" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#368dff] hover:bg-[#1d7fff]"> Go to Task 9 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const articles = [
  {
    name: "Cloud Computing",
    summary: 'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.',
    bg: '#ffbe69',
    text: '#19130a',
    page: "/cloudcomputing",
  },
  {
    name: "Impacts of Digital Technology",
    summary: 'Digital technologies have grown exponentially, and their use has globalized. Ubiquitous and continuous connectivity has reached much of humanity thanks to the mass take-up of smartphones and the consequent access to information, social networks and audiovisual entertainment.',
    bg: '#f96d71',
    text: '#31090a',
    page: "/digitech",
  },
  {
    name: "Access to Knowledge or Resources",
    summary: 'The World Wide Web (WWW), commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. It provides access to vasts amount of information, media and services.',
    bg: '#aee8fa',
    text: '#0a1e31',
    page: "/ai",
  },
  {
    name: "Outsourcing",
    summary: 'Outsourcing is the business practice of hiring a party outside a company to perform services or create goods that were traditionally performed in-house by the company\'s own employees and staff. Outsourcing is a practice usually undertaken by companies as a cost-cutting measure.',
    bg: '#a2f6cf',
    text: '#0f270c',
    page: "/fiverr",
  }
];

function Nine() {
  return (
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div class="max-w-7xl py-12 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-gray-500">Task Nine</h2>
        <h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-[#b6d5ff]">Interactive Presentation: Impacts of Technologies</h2>
      </div>
      <div class="grid grid-flow-row-dense md:grid-cols-2 grid-rows-3 gap-7 py-8">
        {articles.map((article) => (
          <div key={article.name} class={`rounded-lg bg-[${article.bg}] text-[${article.text}] py-4 px-8 space-y-2.5 flex flex-1 flex-col justify-between`}>
            <div>
              <a class="text-2xl font-bold space-x-2.5 space-y-2.5">{article.name}</a>
            </div>
            <div class="space-y-3">
              <p>{article.summary}</p>
            </div>
            <a href={article.page} class={`bg-[${article.text}] text-[${article.bg}] font-bold py-2 px-4 rounded text-center hover:transition-all duration-300 hover:bg-[#171717]`}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

function CloudComputing() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-gray-300">
      <div class="max-w-7xl py-12 px-6">
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#ffbe69] text-center">Cloud Computing</h1>
      </div>
      <div class="flex justify-center items-center py-6">
        <img class="rounded" src="https://imgs.xkcd.com/comics/the_cloud.png"></img>
      </div>
      <div class="flex justify-center items-center text-gray-500 py-8">
        <a href="https://xkcd.com/908">There's planned downtime every night when we turn on the Roomba and it runs over the cord. - xkcd</a>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">What is Cloud Computing?</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><span class="font-semibold">Cloud Computing</span> is the practise of storing, managing, and processing data on a network of remote servers hosted on the internet rather than a local server or a personal computer.
        An example of cloud computing are infrastructure providers (AWS, GCP, DigitalOcean, Vultr, OVH, ...) that host a variety of servers which can be rented by users and businesses to host content or preform resource intensive tasks.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Advantages of Cloud Computing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Cloud computing enables users/businesses to utilise high-end hardware and bandwidth without needing to manage infrastructure themselves, such as maintenance on the servers. This allows the user to continue business as usual, minimising loss of productivity as they don't need to actively managed the infrastructure.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Disadvantages of Cloud Computing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Although cloud computing has numerous advantages, there are factors that can deter users from using cloud computing. First, servers are exposed to the internet for anyone to see; if not configured correctly, this can have disastrous consequences, such as the server being compromised by malicious actors, resulting in data theft/ransom. Second, even if the server is actively maintained by a specialist, problems may arise that result in permanent damage, such as data loss. This could be due to unexpected hardware failure or other factors (look up 'OVH fire').</p>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="max-w-max mx-auto">
        <main class="sm:flex">
          <p class="text-4xl font-extrabold text-[#368dff] sm:text-5xl">404</p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 class="text-4xl font-extrabold text-[#b6d5ff] tracking-tight sm:text-5xl">Page not found</h1>
              <p class="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
