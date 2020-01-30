<script>
import { curRoute } from './router.js';
export let path;
export let name;
export let color = 'white';
function redirectTo(event){
  // change current router path
  curRoute.set(event.target.pathname);
  // push the path into web browser history API
  window.history.pushState({path: path}, '', window.location.origin + path);
}
</script>
<style>
a {
  color: var(--color);
}
</style>
<a href={path} on:click|preventDefault={redirectTo} style="--color: {color}">
{name}
</a>