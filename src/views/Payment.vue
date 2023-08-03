<template>
    <div class="block">
        <div class="block__content">
            <Header />
            <main>
                <div class="payment__form">
                    <div class="payment__form__content">
                        <div class="form__content__top">
                            <div class="payment__icon">
                                <PaymentIcon class="icon" />
                            </div>
                            <p>Total à payer</p>
                            <div class="amount__to__pay">
                                <strong>12 000</strong>
                                <p>Fcfa</p>
                            </div>
                        </div>
                        <!-- mehthode de paiement todo -->
                        <PaymentMethod @update="selectMode" />
                        <div class="form__content__bottom">
                            <div class="ff" v-if="mode == 'mobile'">
                                <FormFieldPayment />
                            </div>
                            <div class="ff" v-else>
                                <FormFieldPaymentNotAvailable />
                            </div>
                            <div class="footer__content">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import PaymentIcon from '@/components/PaymentIcon.vue'
import FormFieldPayment from '@/components/FormFieldPayment.vue'
import FormFieldPaymentNotAvailable from '@/components/FormFieldPaymentNotAvailable.vue'
import { ref } from 'vue'
import PaymentMethod from '@/components/PaymentMethod.vue';
import { Mode } from '@/types/mode';

const mode = ref<Mode>('mobile')
function selectMode(value: Mode) {
    mode.value = value
}
</script>


<style>
* {
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 14px;
    z-index: 5;
    box-sizing: border-box;
}
main{
    /* min-height: calc(100vh - 55px ); */
   
    
} 
.payment__form{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 55px);
}
.payment__form__content{
    width: 30%;
    height: 491px; 
    border: 1px solid gray;
    overflow-y: scroll;
    box-shadow:0 0 5px  #6b0419;
    
}   
.payment__form__content::-webkit-scrollbar{
    width: 5px;
}
.payment__form__content::-webkit-scrollbar-thumb{
    background-color: rgb(199, 146, 146);
    border-radius: 15px;
}
.form__content__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    padding: 25px 0 15px 0;
    background: linear-gradient(to bottom right, #f81212 5%, #6b0419);
}
.form__content__top p {
    font-weight: bold;
    color: white;
}
.form__content__top .payment__icon {
    display: flex;
    justify-content: center;
}
.amount__to__pay {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.amount__to__pay strong {
    font-size: 30px;
    color: white;
}
.amount__to__pay p {
    font-size: 25px;
}
.form__content__middle {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 15px 0;
    background-color: rgb(249, 170, 195);
}
.form__content__bottom {
    display: flex;
    flex-direction: column;
    gap: 50px; 
}
.footer__content {
    background-color: white;
}
.footer__content p {
    text-align: center;
    padding: 15px;
}
.payment__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 50px;
}</style>