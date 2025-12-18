<template>
  <div class="min-h-screen bg-slate-900 text-white selection:bg-blue-500 selection:text-white overflow-hidden">
<div class="container mx-auto px-6 py-12 flex justify-between flex-wrap text-center md:py-24 md:text-start">
   <div class="text-section"><h1 class="text-blue-400 text-md mt-4">WELCOME TO MY PORTFOLIO</h1>
   <div>
   <h1 class="text-5xl mt-9 font-bold leading-tight md:6xl">Hi, I'm <span class="text-blue-400  text-linear-to-r from-blue-500 to-cyan-400 font-bold text-5xl md:text-5xl "> Roman Ali</span><br>Frontend <br>Developer</h1>
      <p class="text-slate-400 text-lg mt-4 md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and user-friendly websites using clean and efficient code. 
            Transforming ideas into digital reality.
          </p>
          <div class="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <span class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-blue-300 hover:border-blue-500 transition cursor-default">HTML5</span>
            <span class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-blue-300 hover:border-blue-500 transition cursor-default">CSS3</span>
            <span class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-blue-300 hover:border-blue-500 transition cursor-default">JavaScript</span>
            <span class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-blue-300 hover:border-blue-500 transition cursor-default">Vue.js</span>
            <span class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-blue-300 hover:border-blue-500 transition cursor-default">Tailwind</span>
          </div><br>  <RouterLink to="/Project-page" active-class="text-blue-500 border-b-2 border-blue-500" >
          <button class="text-white cursor-pointer px-4 py-2 rounded-lg shadow-md w-full shadow-blue-500 bg-blue-600 hover:bg-blue-700 transform transition hover:-translate-y-1 md:w-auto mx-2">See my work</button></RouterLink></div> 
   </div>
<div class="relative flex justify-center md:justify-end">
          <div class="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 w-3/4 h-3/4 mx-auto top-10"></div>
          
          <img 
            src="/image/—Pngtree—cartoon hand drawn blue men_4077904.png" 
            alt="Roman Ali Developer" 
            class="relative w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
          >
        </div>
  </div>
  <div class="icon border-y  border-slate-800 text-center justify-center flex flex-wrap">
    <span class="flex gap-9 p-4 text-4xl justify-center  text-slate-600 flex-wrap"> <i class="fa-brands fa-html5 hover:text-orange-500 transition hover:-translate-y-1"></i>
        <i class="fa-brands fa-css3-alt hover:text-blue-500 transition hover:-translate-y-1"></i>
        <i class="fa-brands fa-js hover:text-yellow-400 transition hover:-translate-y-1"></i>
        <i class="fa-brands fa-vuejs hover:text-green-500 transition hover:-translate-y-1"></i>
        <i class="fa-brands fa-github hover:text-white transition hover:-translate-y-1"></i></span>
  </div><br>
  <div class="container px-6 ">
  <div class="bg-slate-800 container px-4 py-10 rounded-2xl border  border-slate-800">
<div class="p-8 ">
  <h1 class="text-4xl font-medium"> <span class="text-blue-500 text-4xl">👋</span> Let Me Introduce Myself</h1><br>
<h2 class="text-xl">I am a passionate <span class="text-blue-500 font-semibold">Frontend Developer</span> dedicated to building clean, responsive, and user-focused web interfaces.</h2><br>
<h2 class="text-xl">My journey started with a curiosity for how things work on the internet, and I fell in love with programming immediately. I believe in continuous learning and making the web a better place, one line of code at a time.</h2>
</div></div>
    <section class="container mx-auto px-6 py-20">
      <h2 class="text-4xl font-extrabold text-center mb-12">
        Find Me On
      </h2>
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl">
        
        <a href="https://github.com/RomanAli2" target="_blank" class="text-slate-500 hover:text-white transition transform hover:-translate-y-2 group">
          <i class="fa-brands fa-github"></i>
          <p class="text-base mt-2 text-slate-400 group-hover:text-blue-400 transition">GitHub</p>
        </a>
        
        <a href="https://www.instagram.com/be_like_roman/" target="_blank" class="text-slate-500 hover:text-pink-500 transition transform hover:-translate-y-2 group">
          <i class="fa-brands fa-instagram"></i>
          <p class="text-base mt-2 text-slate-400 group-hover:text-pink-500 transition">Instagram</p>
        </a>
        
        <a href="#" target="_blank" class="text-slate-500 hover:text-blue-600 transition transform hover:-translate-y-2 group">
          <i class="fa-brands fa-linkedin-in"></i>
          <p class="text-base mt-2 text-slate-400 group-hover:text-blue-600 transition">LinkedIn</p>
        </a>
        
        <a href="#" target="_blank" class="text-slate-500 hover:text-green-500 transition transform hover:-translate-y-2 group">
          <i class="fa-solid fa-briefcase"></i> 
          <p class="text-base mt-2 text-slate-400 group-hover:text-green-500 transition">Fiverr</p>
        </a>

      </div>
    </section>
  </div>
</div>

   
</template>
<script>

</script>