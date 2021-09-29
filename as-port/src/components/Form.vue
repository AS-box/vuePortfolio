<template>
  <ValidationObserver v-slot="ObserverProps">
    <v-form v-model="valid" data-netlify="true" ref="form" method="POST" class="mt-4" action="/thanks">
    <input type="hidden" name="form-name" value="contact" />
      <ValidationProvider name="name" rules="nameRequired" v-slot="{ errors }">
        <v-text-field v-model="name" name="name" type="text" label="お名前" :error-messages="errors"></v-text-field>
      </ValidationProvider>
      <ValidationProvider name="email" rules="emailRequired|email" v-slot="{ errors }">
        <v-text-field v-model="email" name="email" type="text" label="メールアドレス" :error-messages="errors"></v-text-field>
      </ValidationProvider>
      <ValidationProvider name="message" rules="contentRequired" v-slot="{ errors }">
        <v-textarea v-model="message" name="message" type="text" label="お問い合わせ内容" :error-messages="errors"></v-textarea>
      </ValidationProvider>
      <div class="text-center mt-4">
        <div class="recaptcha-item">
          <div data-netlify-recaptcha="true"></div>
        </div>
        <v-btn :disabled="ObserverProps.invalid || !ObserverProps.validated" color="amber accent-4" type="submit"><span class="white--text">送信する</span></v-btn>
      </div>
    </v-form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider,extend,ValidationObserver } from 'vee-validate';
import { required, email} from 'vee-validate/dist/rules'

extend('nameRequired',{
  ...required,
  message:'お名前は必須です。'
})
extend('emailRequired',{
  ...required,
  message:'メールアドレスは必須です。'
})
extend('contentRequired',{
  ...required,
  message:'お問い合わせ内容は必須です。'
})
extend('email',{
  ...email,
  message:'有効なメールアドレスではありません'
})

export default {
  name:'Form',
  components:{
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return{
      valid:'',
      name:'',
      email:'',
      message:'',

    }
  },
  methods:{

  }

}
</script>