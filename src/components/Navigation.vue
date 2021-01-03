<template>
    <nav class=" bg-white min-w-full">
        <div class="flex justify-between items-center md:container md:mx-auto md:px-4">
            <div class="flex-none h-full font-xanh text-2xl tracking-wide">DANNY</div>
            <div class="flex flex-auto justify-end">
                <menu class="flex text-bluenavy">
                    <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/">Home</router-link></menu>
                    <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/portfolio">Portfolio</router-link></menu>
                    <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/blog">Blog</router-link></menu>
                    <menu type="context" class=" cursor-pointer hover:text-baby-700"><router-link to="/#">API</router-link></menu>
                </menu>
            </div> 
        </div>
    </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap');
</style>