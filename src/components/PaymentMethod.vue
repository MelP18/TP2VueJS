<template>
    <div class="form__content__middle">
        <h3> Sélectionnez un mode de paiement </h3>
        <div class="form__content__middle__select">
            <div class="means__of__payment">
                <div :class="{ 'active': mode == 'mobile' }" class="payment" @click="mode = 'mobile'">
                    <PaymentMobileIcon />
                </div>
                <h5>Paiement Mobile</h5>
            </div>
            <div class="means__of__payment">
                <div :class="{ 'active': mode == 'carte' }" class="payment" @click="mode = 'carte'">
                    <CreditCard  />
                </div>
                <h5>Carte de crédit</h5>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import CreditCard from '@/components/CreditCard.vue';
import PaymentMobileIcon from '@/components/icons/PaymentMobileIcon.vue';

import { ref, watch } from "vue"
type Mode = 'mobile' | 'carte'
const mode = ref<Mode>('mobile')

const emits = defineEmits(['update'])

watch(mode, (value) => {
    emits('update', value)
})

/* function choisirCarte(){
    mode.value = 'carte'
}

function choisirMobile(){
    mode.value = 'mobile'
} */
</script>

<style scoped>
.active {
    color: white    !important;
    background-color: red !important;
}

.form__content__middle__select{
    display: flex;
    justify-content: space-evenly;
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
    border: 1px solid #f81212;
    border-radius: 5px;
    color: red;

}

 
</style>