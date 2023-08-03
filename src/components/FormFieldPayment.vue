<template>
    <div class="form__content__bottom__field">
        <div class="form__field__name">
            <label> Nom et Prénoms</label>
            <input type="text">
        </div>
        <div class="form__field__tel">
            <label>Numéro de Téléphone</label>
            <div class="select__country">
                <select>
                    <option value="">
                        select
                    </option>
                </select>
                <input type="tel">
            </div>
        </div>
        <div class="form__field__amount__due">
            <strong>Payer</strong>
            <p>12 000 Fcfa</p>
        </div> 
    </div>
</template>

<style scoped>
.form__content__bottom__field {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 20px;
    background-color: white;
    /* background-color: rgb(248, 154, 154); */
}
.form__field__name {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.form__field__name input {
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
.select__country input {
    width: 100%;
    padding: 8px 0 8px 5px;
    outline: 0;
}
.select__country select {
    border-right: none;
    padding: 8px 0 8px 5px;
    outline: 0;
    background-color: transparent;
}
.form__field__amount__due {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(205, 22, 22);
    padding: 10px 0;
    gap: 8px;
}
.form__field__amount__due strong {
    color: white;
    font-size: 18px;
}
.form__field__amount__due p {
    color: white;
    font-size: 20px;
    font-weight: bold;
}
</style>