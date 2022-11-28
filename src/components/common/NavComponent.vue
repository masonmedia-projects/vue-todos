<template>
    <div class="p-2 bg-dark-grape position-fixed" 
    style="right: 0; z-index: 1000; cursor: pointer; border-radius: 0 0 0 50%;">
        <b-icon icon="filter-right" variant="light" class="m-2" style="outline: 0;"
        font-scale="3" v-b-toggle.sidebar-right></b-icon>
        <b-sidebar id="sidebar-right" right shadow backdrop backdrop-variant="dark-grape"
        bg-variant="grape" text-variant="light"
        header-class="p-3 fw-light"
        body-class="p-4"
        title="Todo Lists"
        >
            <ul class="list-unstyled d-flex flex-column justify-content-end align-items-start h-100">
                <router-link class="text-decoration-none" v-for="route in $router.options.routes" :key="route.path" :to="route.path">
                    <li class="fw-light lh-1 pb-2" style="font-size: 7vmin; line-height: 6min;" v-html="route.name"></li>
                </router-link>
            </ul>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    name: 'NavComponent'
}
</script>