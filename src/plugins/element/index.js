import Vue from "vue";
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/en'
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Form,
    Card,
    FormItem,
    Input,
    Button,
    Select,
    Option,
    Alert,
    Icon
} from 'element-ui'

const elements = [
    Form,
    Card,
    FormItem,
    Input,
    Button,
    Select,
    Option,
    Alert,
    Icon
]

locale.use(lang)

elements.forEach(El => Vue.use(El, { locale }))