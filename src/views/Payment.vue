<template>
    <div class="block">
        <div class="block__content">
            <div class="payment__form">
                <div class="payment__form__content">
                    <div class="form__content__top">
                        <div class="payment__icon">
                            <PaymentIcon class="icon"/>
                        </div>
                        <p>Total à payer</p>
                        <div class="amount__to__pay">
                            <strong>12 000</strong>
                            <p>Fcfa</p>
                        </div>
                    </div>
                    <PaymentMethods/>
                    <div class="form__content__bottom">
                        <div class="ff" >
                            <FormFieldPayment />
                        </div>
                        <div class="ff" >
                            <FormFieldPaymentNotAvailable />
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

import PaymentMethods from '@/components/PaymentMethods.vue'
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
    background-color: white;
}
.block__content{
   box-shadow: 0px 0px 5px  #4f4d4d; 
    /* border: 1px solid red; */
    width: 30%;
    height: 453px;
    overflow-y: scroll; 
}
.block__content::-webkit-scrollbar{
    width: 5px;
}
.block__content::-webkit-scrollbar-thumb{
    background-color: rgb(185, 130, 130);
    border-radius: 15px;
}
.form__content__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    padding: 25px 0 15px 0;
    background:linear-gradient(to bottom right,  #f81212 5%,#6b0419); 
}
.form__content__top p{
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
.amount__to__pay strong{
    font-size: 30px;
    color: white;
}
.amount__to__pay p{
    font-size: 25px;
}
/* .form__content__middle {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 15px 0;
    background-color: rgb(249, 170, 195);
}

.form__content__middle__select__means {
    display: flex;
    justify-content: space-evenly;
}

.means__of__payment {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
}

.means__of__payment .payment {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: white;
    border: 1px solid  #f81212;
    border-radius: 5px;
}
.active{
    background-color: #f81212;
} */

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
    border-left:none;
    border-right:1px solid gray;
    border-top:1px solid gray;
    border-bottom:1px solid gray;
    width: 100%;
    padding: 8px 0 8px 5px;
    outline: 0;
}
.select__country select{
   
    padding: 8px 0 8px 5px;
    outline: 0;
    background-color: transparent;
}
.form__field__amount__due {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color :rgb(205, 22, 22);
    padding: 10px 0;
    gap: 8px;
}
.form__field__amount__due strong{
    color:white;
    font-size: 18px;
}
.form__field__amount__due p{
    color:white;
    font-size: 20px;
    font-weight: bold;
}
.not__available{
    text-align: center;
    background-color:rgb(205, 22, 22);
    padding: 5px 0;
    
}
.not__available h1{
    font-size: 25px;
    color: white;
}
.footer p{
    text-align: center;
    padding: 15px;
}
.icon{
    background-color: white;
}
.payment__icon{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 50px;
}
</style>