<template>
    <div class="form__content__middle">
        <h3> Sélectionnez un mode de paiement </h3>
        <div class="form__content__middle__select__means">
            <div class="means__of__payment">
                <div class="payment" :class="{active: mode=='mobile'}" @click="mode='mobile'">
                    <PaymentMobileIcon  />
                </div>
                <h5>Paiement Mobile</h5>
            </div>
            <div class="means__of__payment">
                <div class="payment" :class="{active: mode=='card'}" @click="mode='card'">
                    <CreditCard />
                </div>
                <h5>Carte de crédit</h5>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import CreditCard from '@/components/CreditCard.vue';
import PaymentMobileIcon from '@/components/icons/PaymentMobileIcon.vue';
import { ref, watch} from "vue";
type Mode = 'mobile' | 'card'
const mode = ref <Mode>('mobile')

const emits = defineEmits(['payment'])

 watch(mode, (value))=>{
    emits('payment', value)
 }

</script>

<style>

.form__content__middle {
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
}
</style>