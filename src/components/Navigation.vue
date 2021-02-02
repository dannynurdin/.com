<template>
    <div class="absolute min-w-full antialiased bg-white shadow-lg">
        <!-- <nav class="min-w-full font-sans hidden">
            <div class="flex justify-between items-center md:container md:mx-auto md:px-20 lg:px-32">
                <div class="flex-none h-full text-2xl tracking-wide">DANNY</div>
                <div class="flex flex-auto justify-end">
                    <menu class="flex text-bluenavy">
                        <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/">Home</router-link></menu>
                        <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/portfolio">Portfolio</router-link></menu>
                        <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/blog">Blog</router-link></menu>
                        <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/#">API</router-link></menu>
                    </menu>
                </div> 
            </div>
        </nav> -->

        <!-- Header -->
        <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 md:h-13 font-sans mx-auto">
            <div class="flex-1 flex justify-between items-center">
                <a href="/" class=" font-xanh text-2xl">
                    Danny
                </a>
            </div>

            <label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input class="hidden" type="checkbox" id="menu-toggle" v-on:click='clickMenu' />

            <div class="hidden md:flex md:items-center md:w-auto w-full z-20" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        
                        <li><router-link to="/" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Home</router-link></li>
                        <li><router-link to="/project" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Project</router-link></li>
                        <li><router-link to="/write" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Write</router-link></li>
                        <li><router-link to="/api" target="_blank" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">API</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>

