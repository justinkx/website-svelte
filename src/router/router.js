import Home from '../pages/home/Home.svelte';
import Resume from '../pages/resume/Resume.svelte';
import { writable } from 'svelte/store';
const router = {
'/': Home,
'/resume': Resume,
}
export default router;
export const curRoute = writable('/home');