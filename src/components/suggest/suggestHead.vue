<template>
    <div class="suggest-header">
        <div class="city-wrapper">
            <div class="city-content border-right-1px">
                <div class="city-select"  v-show="isChoosed" @click= "switch_input_city">
                    <span class="text">{{ position.city || '南昌'}}</span>
                    <span class="icon">
                        <icon name="sort-desc"></icon>
                    </span>

                </div>
                <div class="city-input-wrapper" v-show="!isChoosed">
                    <input type="text"  ref="tipinput" placeholder="城市中文名或拼音" class="city-input" style="display: block;" >
                </div>
            </div>
        </div>
        <div class="address-wrapper">
            <input type="text" placeholder="请输入地点" class="address-input" v-model="suggestInputValue">
            <div class="clear" style="display: none;">
                <i class="mfic-wrong"></i>
            </div>
        </div>
        <div class="cancel-wrapper">
            <span class="text border-left-1px" @click="back_home">取消</span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Icon from 'vue-awesome/components/Icon'
export default {
    data () {
        return {
            suggestInputValue: ''
        }
    },
    computed: {
        ...mapState([
            'position',
            'isChoosed',
            'position'
            ])
    },
    watch:{
        suggestInputValue(newVal,odlVal){
            // console.log(newVal)
            if(newVal != odlVal) {
                this.$store.dispatch('autocomplete', newVal)
            }
        }
    },
    methods: {
        back_home(){
            this.$router.go(-1)
            this.position.end = '您要哪儿'
        },
        ...mapActions([
            'show_suggest',
            'close_suggest',
            'switch_input_city',
            'autocomplete'
        ])
    },
    components: {
        Icon
    }
}
</script>
<style scoped>

.suggest-header {
    position: relative;
    z-index: 10;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 44px;
    white-space: nowrap;
    background: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}

.suggest-header .city-wrapper {
    padding: 13px 0;
}

.suggest-header .city-wrapper .city-content {
    height: 18px;
}

.border-bottom-1px,
.border-left-1px,
.border-right-1px,
.border-top-1px {
    position: relative;
}

.suggest-header .city-wrapper .city-content .city-select {
    line-height: 18px;
    padding: 0 16px;
    font-size: 0;
}

.suggest-header .city-wrapper .city-content .city-select .text {
    margin-right: 4px;
}

.suggest-header .city-wrapper .city-content .city-select .text {
    display: inline-block;
    vertical-align: top;
    color: #666;
    font-size: 14px;
}

.suggest-header .address-wrapper {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 10px;
}

.suggest-header .address-wrapper .address-input {
    display: table-cell;
    width: 100%;
    height: 14px;
    margin-top: -10px;
    padding: 15px 0;
    vertical-align: middle;
    font-size: 14px;
}

input {
    outline: 0;
    border: 0;
}

.suggest-header .address-wrapper .clear {
    position: absolute;
    right: 0;
    top: 14px;
}

.suggest-header .cancel-wrapper .text {
    display: inline-block;
    padding: 0 16px;
    margin-top: 15px;
    color: #999;
    font-size: 14px;
}

.border-bottom-1px,
.border-left-1px,
.border-right-1px,
.border-top-1px {
    position: relative;
}

.border-left-1px:before {
    border-left: 1px solid #f5f5f5;
    top: 0;
    left: 0;
    height: 100%;
}

.border-bottom-1px:after,
.border-bottom-1px:before,
.border-left-1px:after,
.border-left-1px:before,
.border-right-1px:after,
.border-right-1px:before,
.border-top-1px:after,
.border-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    transform-origin: 0 0;
}
.suggest-header .city-wrapper .city-content .city-input-wrapper {
    width: 143px;
    height: 18px;
    padding: 0 10px;
}
.suggest-header .city-wrapper .city-content .city-input-wrapper .city-input {
    display: table-cell;
    width: 100%;
    height: 14px;
    margin-top: -13px;
    padding: 15px 0;
    vertical-align: middle;
    font-size: 14px;
}
</style>
