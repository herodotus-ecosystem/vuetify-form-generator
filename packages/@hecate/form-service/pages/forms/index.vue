<template>
    <div>
        <h2>News Index page</h2>
        <p>id:{{ $route.params.Id }}</p>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/forms/1">id1</nuxt-link>
                <nuxt-link to="/forms/456">id2</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>
