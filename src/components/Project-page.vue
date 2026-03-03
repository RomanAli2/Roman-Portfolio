
   <template>
  <div class="min-h-screen bg-slate-900 text-slate-300 p-6 md:p-12 selection:bg-blue-500 selection:text-white">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-medium mt-7">
        My Recent <span class="text-blue-400">Works</span>
      </h1>
      <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
        Here you can explore my recent projects, built with modern frontend technologies and real-world use cases.
      </p>
    </div>

    <div class="projects flex justify-center gap-10 flex-wrap">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="bg-slate-800 rounded-xl text-center w-80 shadow-md shadow-blue-400/20 transition duration-500 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-xl flex flex-col overflow-hidden"
      >
        <div class="p-4">
          <img :src="project.image" :alt="project.title" class="rounded-md opacity-70 hover:opacity-100 transition-opacity duration-300 h-40 w-full object-cover">
        </div>

        <div class="px-6 pb-8 grow flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-bold text-white mb-3">{{ project.title }}</h2>
            <p class="text-sm leading-relaxed text-slate-400">
              {{ project.description }}
            </p>
          </div>

          <a :href="project.link" target="_blank" class="inline-block mt-6">
            <button class="w-full px-7 py-3 text-lg font-semibold rounded-xl cursor-pointer bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 transition-colors flex items-center justify-center gap-2">
              <i class="fa-solid fa-tv"></i> Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "ForageBoard Web",
    description: "A sleek, responsive web dashboard designed to help users manage tasks and data efficiently. Features Dark/Light mode toggle and a clean interface.",
    image: "/image/12.png",
    link: "https://forge-board.vercel.app/#/"
  },
  {
    title: "Amazora Web",
    description: "Modern e-commerce app with product listings, filtering, and add-to-cart functionality. Focused on performance and shopping flow.",
    image: "/image/amazora-teal.vercel.app_(iPad Pro).png",
    link: "https://amazora-teal.vercel.app/"
  },
  {
    title: "Phone Shop",
    description: "Showcasing mobile phones with a clean UI. Includes product cards, pricing, and fully responsive layouts for all screen sizes.",
    image: "/image/localhost_5173_(iPad Pro).png",
    link: "https://mega-mart-liard.vercel.app/"
  },
  {
    title: "Weatherly",
    description: "Real-time weather forecast app built with Vue.js and Tailwind CSS. Search cities for temperature, humidity, and wind speed.",
    image: "/image/Untitled.png",
    link: "https://weatherly-website.vercel.app/"
  },
  {
    title: "Notion Clone",
    description: "A clean and responsive productivity web app inspired by Notion. Focused on workspace design and smooth user experience.",
    image: "/image/notion-two-dusky.vercel.app_.png",
    link: "https://notion-two-dusky.vercel.app/"
  }
];
</script>

<style scoped>
/* Agar FontAwesome use kar rahe hain to ensure karein ke wo index.html mein linked ho */
</style>