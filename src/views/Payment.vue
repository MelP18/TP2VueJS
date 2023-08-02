<template>
    <div class="block">
        <div class="block__content">
            <div class="payment__form">
                <div class="payment__form__content">
                    <div class="form__content__top">
                        <div class="payment__icon">
                            <PaymentIcon />
                        </div>
                        <p>Total à payer</p>
                        <div class="amount__to__pay">
                            <strong>12 000</strong>
                            <p>Fcfa</p>
                        </div>
                    </div>
                    <div class="form__content__middle">
                        <h3> Sélectionnez un mode de paiement </h3>
                        <div class="form__content__middle__select">
                            <div class="means__of__payment">
                                <div class="payment">
                                    <PaymentMobileIcon @click="bool.is_available = true"/>
                                </div>
                                <h5>Paiement Mobile</h5>
                            </div>
                            <div class="means__of__payment">
                                <div class="payment">
                                    <CreditCard @click="bool.is_available = false"/>
                                </div>
                                <h5>Carte de crédit</h5>
                            </div>
                        </div>
                    </div>
                    <div class="form__content__bottom">
                        <div class="ff" >
                            <FormFieldPayment v-if="bool.is_available === true"/>
                        </div>
                        <div class="ff" >
                            <FormFieldPaymentNotAvailable v-if="bool.is_available === false"/>
                        </div>
                        <div class="footer">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import CreditCard from '@/components/CreditCard.vue';
import PaymentMobileIcon from '@/components/icons/PaymentMobileIcon.vue';
import PaymentIcon from '@/components/PaymentIcon.vue'
import FormFieldPayment from '@/components/FormFieldPayment.vue'
import FormFieldPaymentNotAvailable from '@/components/FormFieldPaymentNotAvailable.vue'
import {ref} from 'vue'

 const bool = ref({is_available:Boolean})
</script>


<style>
* {
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 14px;
    z-index: 5;
    box-sizing: border-box;
    color: black;
}
.block{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(176, 171, 171);
}
.block__content{
   box-shadow: 0px 0px 5px rgb(199, 80, 51); 
    width: 30%;
    height: 391px;
    overflow-y: scroll;
}
.block__content::-webkit-scrollbar{
    width: 5px;
}
.block__content::-webkit-scrollbar-thumb{
    background-color: aquamarine;
}
.form__content__top {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
    padding: 25px 0 15px 0;
    background-color: rgb(85, 6, 6);
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
.amount__to__pay strong{
    font-size: 20px;
    color: white;
}
.amount__to__pay p{
    font-size: 15px;
}
.form__content__middle {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 15px 0;
    background-color: rgb(234, 148, 175);
}

.form__content__middle__select {
    display: flex;
    justify-content: space-evenly;
}

.means__of__payment {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.means__of__payment .payment {
    display: flex;
    justify-content: center;
    
}
.active{
    background-color: aqua;
    padding: 15px;
}
.form__content__bottom{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.form__content__bottom__field {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 20px;
    /* background-color: rgb(248, 154, 154); */
}

.form__field__name {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.form__field__name input{
    width: 100%;
    padding: 8px 0 8px 5px;
    outline: 0;
}
.form__field__tel {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.select__country {
    display: flex;
    
}
.select__country input{
    width: 100%;
    padding: 8px 0 8px 5px;
    outline: 0;
}
.select__country select{
    border-right: none;
    padding: 8px 0 8px 5px;
    outline: 0;
    background-color: transparent;
}
.form__field__amount__due {
    display: flex;
    justify-content: center;
    background-color: red;
    padding: 10px 0;
    gap: 8px;
}
.not__available{
    text-align: center;
    background-color:rgb(85, 6, 6);
    padding: 5px 0;
}
.footer p{
    text-align: center;
    padding: 15px;
}

</style>