<template>
  <ClientOnly>
    <Swiper
      :modules="enableModules ? [Pagination, Navigation] : []"
      :slides-per-view="1"
      :navigation="enableModules && handleArrows()"
      :loop="true"
      pagination
      @slide-change="onSlideChange"
      class="!z-0"
    >
      <SwiperSlide v-for="(heroItem, index) in heroItemProps" :key="index" class="md:px-7 lg:px-15">
        <UiHeroContent :hero-item-props="heroItem" />
      </SwiperSlide>
    </Swiper>

    <template #fallback>
      <UiHeroContentSkeleton />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { HeroContentProps } from './types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
const { handleArrows, onSlideChange } = useCarousel();

const { heroItemProps } = defineProps<{
  heroItemProps: HeroContentProps[];
}>();

const enableModules = computed(() => heroItemProps.length > 1);
</script>

<style src="./styles/navigation.min.css"></style>
<style src="./styles/pagination.min.css"></style>
<style src="./styles/swiper.min.css"></style>
