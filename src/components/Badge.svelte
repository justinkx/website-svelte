<script>
export let title ;
export let color = '#10dc60';
export let marginBottom = '10px';
export let marginRight = '15px';
</script>
<style>
.badgeContainer {
    background-color: var(--theme-color);
    padding: 4px 6px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: var(--margin-bottom);
    margin-right: var(--margin-right);
}
p {
    font-size: 12px;
    color: white;
}
</style>
<div class="badgeContainer" style="--theme-color: {color};
--margin-bottom: {marginBottom};
--margin-right: {marginRight}">
<p>{title}</p>
</div>