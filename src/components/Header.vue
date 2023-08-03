<template>
    <header>
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <a href="#">
                        <KkiaPayLogo />
                    </a>
                </div>
                <nav class="menu">
                    <ul class="nav__content__list">
                        <li class="nav__content__list__item">
                            <a href="#">Accueil</a>
                        </li>
                        <li class="nav__content__list__item">
                            <a href="#">A propos</a>
                        </li>
                        <li class="nav__content__list__item">
                            <a href="">Payer</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
   </header> 
</template>

<script lang="ts" setup>
import KkiaPayLogo from '@/components/KkiaPayLogo.vue'
</script>

<style scoped>
* {
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 16px;
    z-index: 5;
    box-sizing: border-box;
    color: black;
}
ul li{
    list-style-type: none;
}
a, a.active a:hover{
    text-decoration: none;
}
header{
    box-shadow: 0 0 5px rgb(170, 169, 169);
}
.container{
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1140px;
}
.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}
.header__logo a{
    cursor: pointer;
}
.nav__content__list{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
.nav__content__list__item a{
    font-weight: bold;
} 
.nav__content__list__item a:hover{
    color: rgb(171, 14, 14);
    padding-bottom: 2px;
    border-bottom: 2px solid blue;
}
</style>