// useWindowHeight.js
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

export default function useWindowHeight() {

    let windowHeader = document.querySelector("header").getBoundingClientRect().height;
    let windowHeight = ref(window.innerHeight - windowHeader);

    const updateHeight = () => {
        windowHeight.value = window.innerHeight ;
    };

    onMounted(() => {
        window.addEventListener('resize', updateHeight);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateHeight);
    });

    watchEffect(() => {
        document.documentElement.style.setProperty('--window-height', `${windowHeight.value}px`);
    });

    return windowHeight;
}
