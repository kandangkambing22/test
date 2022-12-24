<script setup>
import Sidebar from '@/components/dashboard/Sidebar.vue'
import Navbar from '@/components/dashboard/Navbar.vue'
</script>

<template>
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <Sidebar />
            <div class="layout-page">
                <Navbar />
                <div class="content-wrapper">
                    <RouterView />
                    <footer class="content-footer footer bg-footer-theme"></footer>
                    <div class="content-backdrop fade"></div>
                </div>
            </div>
        </div>
        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>