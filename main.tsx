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
    "/digitech": () => render(<Digitech />),
    "/knowledge": () => render(<Knowledge />),
    "/fiverr": () => render(<Outsource />),
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
        <a href="https://www.youtube.com/watch?v=tO516EaRYHc" target="_blank" class="text-lg no-underline hover:text-[#87bbff] ml-3">Placeholder</a>
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
    page: "/knowledge",
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
        <a href="https://xkcd.com/908" target="_blank">There's planned downtime every night when we turn on the Roomba and it runs over the cord. - xkcd</a>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">What is Cloud Computing?</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class="font-semibold hover:text-[#ffbe69] hover:transition-all duration-300">Cloud Computing</a> is the practise of storing, managing, and processing data on a network of remote servers hosted on the internet rather than a local server or a personal computer.
        An example of cloud computing are infrastructure providers (AWS, GCP, DigitalOcean, Vultr, OVH, ...) that host a variety of servers which can be rented by users and businesses to host content or preform resource intensive tasks.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Advantages of Cloud Computing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class="font-semibold hover:text-[#ffbe69] hover:transition-all duration-300">Cloud Computing</a> enables users/businesses to utilise high-end hardware (+bandwidth) without needing to manage infrastructure themselves, such as maintenance on the servers. This allows the user to continue business as usual, minimising loss of productivity as they don't need to actively managed the infrastructure.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Disadvantages of Cloud Computing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Although <a class="font-semibold hover:text-[#ffbe69] hover:transition-all duration-300">Cloud Computing</a> has numerous advantages, there are factors that can deter users from using cloud computing. First, servers are exposed to the internet for anyone to see; if not configured correctly, this can have disastrous consequences, such as the server being compromised by malicious actors, resulting in data theft/ransom. Second, even if the server is actively maintained by a specialist, problems may arise that result in permanent damage, such as data loss. This could be due to unexpected hardware failure or other factors (look up 'OVH fire'). Lastly, inorder to connect to the server you need a stable internet connection.</p>
      </div>
    </div>
  )
}

function Knowledge() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-gray-300">
      <div class="max-w-7xl py-12 px-6">
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#aee8fa] text-center">Access to Knowledge or Resources</h1>
      </div>
      <div class="flex justify-center items-center py-6">
        <iframe src="https://giphy.com/embed/S3Pe5NZqgmE8Tl3NI5" width="480" height="450" frameBorder="0" class="rounded" allowFullScreen></iframe>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Background</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Thanks to <a href='/cloudcomputing' class='font-semibold hover:underline hover:text-[#ffbe69] hover:transition-all duration-300'>cloud computing</a> and <a href='/digitech' class='font-semibold hover:underline hover:text-[#f96d71] hover:transition-all duration-300'>digital technology</a>, there is an endless amount of content on the World Wide Web. With a simple query on a popular search engine such as Google, one can find a lot of information that is readily available to be used. Any information or content published on the web spreads really quickly thanks to various Digital Technology such as Google (by indexing the content into their search engine).</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Advantages of content on the web.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class='font-semibold hover:text-[#aee8fa] hover:transition-all duration-300'>Access to knowledge or resources</a> on the internet provides a lot of benefits. One benefit is the ability to access and use various services, such as informative content, entertainment, and commerce. This can lead to easier, more convent lives for individuals since less time is spent actively sourcing the suitable content to suffice their needs.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Disadvantages of content on the web.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Although the marvel of accessing knowledge or resources on the web, it is not always considered a benefit. Due to the surplus information circulating on the web, it can lead to various drawbacks, as the World Wide Web is difficult to moderate since tons of new content is added every second! Privacy of an individual is at risk as it could be published by mistake or intentionally by a nefarious actor, this can lead to disastrous consequences. <a class='font-semibold hover:text-[#aee8fa] hover:transition-all duration-300'>Knowledge or resources</a> on the web can be used to misinform individuals when they are surfing the web.</p>
      </div>
    </div>
  )
}

function Outsource() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-gray-300">
      <div class="max-w-7xl py-12 px-6">
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#a2f6cf] text-center">Outsourcing</h1>
      </div>
      <div class="flex justify-center items-center py-6">
        <iframe src="https://giphy.com/embed/j6lCwtfMS2ZNmfoyrv" width="480" height="270" frameBorder="0" class="rounded" allowFullScreen></iframe>
      </div>
      <div class="flex justify-center items-center text-gray-500 py-8">
        <a>Caption: When you discover you can outsource your homework! (I was going to get someone or myself to motion track the wing with the word 'outsourcing' but i forgot).</a>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">What is Outsourcing?</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class='font-semibold hover:text-[#a2f6cf] hover:transition-all duration-300'>Outsourcing</a> is an agreement in which one company hires another company or individual to accomplish a specific task. For example, I could have hired one person to develop the website and someone else to produce content for it (Spoiler: I didn't).</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Advantages of Outsourcing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class='font-semibold hover:text-[#a2f6cf] hover:transition-all duration-300'>Outsourcing</a> allows the owner of the project to focus on their priorities and other duties of the project, whilst having people(s) take care of other aspects of the project (such as website development). Another advantage of <a class='font-semibold hover:text-[#a2f6cf] hover:transition-all duration-300'>outsourcing</a> is that it can be cheaper and easy than having a division in the company take care of the specific task, this is because less management is required and may be easier to hire people overseas. An example of <a class='font-semibold hover:text-[#a2f6cf] hover:transition-all duration-300'>outsourcing</a> is the call centre of Telstra being handled overseas.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Disadvantages of Outsourcing.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>A disadvantage of outsourcing is that the contracted company/individual might be overseas, thus being in a different timezone. This results in inefficient communication, since one party might be sleeping. Another problem is that the contracted company/individual might not perform/deliver satisfactory results, causing unwanted disputes between both parties about the contract. Intellectual property from previous clients and current hires can be stolen by contracted workers (which is why you should always background check hires).</p>
      </div>
    </div>
  )
}

function Digitech() {
  return (
    <div class="mx-auto py-12 px-4 max-w-4xl sm:px-6 lg:px-8 lg:py-12 text-gray-300">
      <div class="max-w-7xl py-12 px-6">
        <h1 class="text-5xl font-extrabold sm:text-4xl text-[#f96d71] text-center">Impacts of Digital Technology</h1>
      </div>
      <div class="flex justify-center items-center py-6">
        <iframe src="https://giphy.com/embed/hR9VqH9eC4WMU" width="480" height="266" frameBorder="0" class="rounded" allowFullScreen></iframe>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">What are Digital Technologies?</h2>
      </div>
      <div class="flex justify-center items-center">
        <p><a class="font-semibold hover:text-[#f96d71] hover:transition-all duration-300">Digital technologies</a> have changed the way many businesses operate. <a class="font-semibold hover:text-[#f96d71] hover:transition-all duration-300">Digital technologies</a> are any tools, systems, equipment, or resources that produce, store, or process data electronically. Social media, online games, multimedia, and mobile phones are popular examples.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Advantages of Digital Technologies.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>Thanks to the advances to technology, a vast amount of possibilities have become available to consumers. One output of this effect is social networking, the ability for an individual to send messages (and other media) to another person from the convenience of their phone. Digital technology is the new frontier in development, creating applications/software powered by <a href='/cloudcomputing' class='font-semibold hover:underline hover:text-[#ffbe69] hover:transition-all duration-300'>cloud computing</a>, to simplify everyday tasks.</p>
      </div>
      <div class="flex justify-center items-center py-8">
        <h2 class="font-bold text-2xl">Disadvantages of Digital Technologies.</h2>
      </div>
      <div class="flex justify-center items-center">
        <p>There are still concerns despite technological advances causing a surge in digital technology appearing on the internet. Although the digital world has provided us with many new ways to achieve things, it has also had a negative impact on its users. Users have developed addictions due to it, and people are isolating in the virtual world rather than in real-life. Another notable for concern is data security, when using digital technology, we are allowing the platforms to save our information whether its important forms of media to personal/sensitive information.</p>
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
