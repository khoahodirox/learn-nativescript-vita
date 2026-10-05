<script setup>
import { ref, computed } from 'vue';

const tabs = [
    { key: 'home', icon: '⌂', label: 'Home' },
    { key: 'search', icon: '⌕', label: 'Search' },
    { key: 'cart', icon: '▣', label: 'Cart' },
    { key: 'profile', icon: '☺', label: 'Profile' },
];

const activeTab = ref('home');
const title = computed(() => tabs.find((t) => t.key === activeTab.value)?.label ?? '');

function selectTab(key) {
    activeTab.value = key;
}
function onBack() {
    console.log('back');
}
function onMore() {
    console.log('more');
}
</script>

<template>
    <Page actionBarHidden="true" class="page">
        <!-- 3 hàng: header (auto) / nội dung (chiếm phần còn lại) / dock (auto) -->
        <GridLayout rows="auto, *, auto">
            <!-- HEADER: 2 bên rộng bằng nhau nên tiêu đề luôn nằm giữa thật -->
            <GridLayout row="0" columns="48, *, 48" class="header">
                <Label col="0" text="‹" class="header-btn" @tap="onBack" />
                <Label col="1" :text="title" class="header-title" />
                <Label col="2" text="⋯" class="header-btn" @tap="onMore" />
            </GridLayout>

            <!-- NỘI DUNG: cuộn được -->
            <ScrollView row="1">
                <StackLayout class="content">
                    <Label v-for="n in 12" :key="n" :text="title + ' - item ' + n" class="row" />
                </StackLayout>
            </ScrollView>

            <!-- DOCK MENU: 4 cột chia đều -->
            <GridLayout row="2" columns="*, *, *, *" class="dock">
                <StackLayout
                    v-for="(tab, i) in tabs"
                    :key="tab.key"
                    :col="i"
                    horizontalAlignment="center"
                    class="dock-item"
                    :class="{ active: activeTab === tab.key }"
                    @tap="selectTab(tab.key)"
                >
                    <Label :text="tab.icon" class="dock-icon" />
                    <Label :text="tab.label" class="dock-label" />
                </StackLayout>
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<style scoped>
.page {
    background-color: #f2f4f7;
}

/* Header */
.header {
    background-color: #ffffff;
    height: 52;
    border-bottom-width: 1;
    border-bottom-color: #e2e6ec;
}
.header-btn {
    font-size: 26;
    color: #0f766e;
    text-align: center;
    vertical-align: middle;
}
.header-title {
    font-size: 18;
    font-weight: 600;
    color: #1b2430;
    text-align: center;
    vertical-align: middle;
}

/* Nội dung */
.content {
    padding: 16 16 8 16;
}
.row {
    background-color: #ffffff;
    color: #1b2430;
    font-size: 16;
    padding: 16;
    margin-bottom: 8;
    border-radius: 10;
}

/* Dock */
.dock {
    background-color: #ffffff;
    border-top-width: 1;
    border-top-color: #e2e6ec;
    padding: 8 0 8 0;
}
.dock-icon {
    font-size: 22;
    color: #8b95a3;
    text-align: center;
}
.dock-label {
    font-size: 11;
    color: #8b95a3;
    text-align: center;
}
.dock-item.active .dock-icon,
.dock-item.active .dock-label {
    color: #0f766e;
}
.dock-item.active .dock-label {
    font-weight: 600;
}
</style>