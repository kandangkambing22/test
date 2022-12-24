<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container-xxl container-p-y">
        <div class="misc-wrapper">
            <h2 class="mb-2 mx-2">Page Not Found :(</h2>
            <p class="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
            <RouterLink to="/" class="btn btn-primary">Back to home</RouterLink>
            <div class="mt-3">
                <img
                    src="@/assets/images/page-error.png"
                    alt="page-misc-error-light"
                    width="500"
                    class="img-fluid"
                />
            </div>
        </div>
    </div>
</template>

<style>
.misc-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - (1.625rem * 2));
    text-align: center;
}
</style>