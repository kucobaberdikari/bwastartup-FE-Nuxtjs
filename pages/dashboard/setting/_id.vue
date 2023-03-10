<template>
    <div class="project-page">
      <section class="dashboard-header pt-5">
        <div class="container mx-auto relative">
          <Navbar />
        </div>
      </section>
      <section class="container mx-auto pt-8">
        <div class="flex justify-between items-center mb-4">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900">
              Edit your account detail
            </h3>
          </div>
          <div class="w-1/4 justify-between text-right">
            <button

            >
              <nuxt-link to="/"
                class="bg-gray-button hover:bg-gray-button text-white font-bold px-4 py-1 rounded inline-flex items-center">
                Cancel
              </nuxt-link>
            </button>
            <button
              @click="save"
              class="bg-purple-button hover:bg-purple-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
            >
              Save
            </button>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4 border border-gray-400 bg-white
              rounded">
            <div
              class="w-1/4 p-8 flex flex-col justify-between leading-normal"
            >
            <div class="relative">
              <div class="cursor-pointer" @click="$refs.file.click()">
                <img :src="$axios.defaults.baseURL + '/' + user.data.image_url"
                  alt="" class=" rounded-full border-white" />
                <img
                  src="/icon-avatar-add.svg"
                  alt=""
                  class="absolute right-0 bottom-0 pb-2"
                />
              </div>
              <input
                type="file"
                ref="file"
                style="display: none;"
                accept="image/*"
                @change="onFileChange"
              />
            </div>
            </div>
            <div
              class="w-3/4 p-8 flex flex-col justify-between leading-normal"
            >
              <form class="w-full">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                    >
                      Name
                    </label>
                    <input
                      class="appearance-none block w-full rounded-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Your occupation"
                      v-model="user.data.name"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                    >
                      Email
                    </label>
                    <input
                      class="appearance-none block w-full rounded-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Your occupation"
                      v-model="user.data.email"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                    >
                      Ocucpation
                    </label>
                    <input
                      class="appearance-none block w-full rounded-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Your occupation"
                      v-model="user.data.occupation"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                    >
                      description
                    </label>
                    <!-- <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="t"
                      placeholder="Your occupation"
                      v-model="user.data.description"
                    /> -->
                    <textarea
                      class="appearance-none block w-full rounded-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="" id="" cols="30" rows="10"
                      placeholder="Your occupation"
                      v-model="user.data.description">
                    </textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="cta-clip -mt-20"></div>
      <section class="call-to-action bg-purple-progress pt-64 pb-10"></section>
      <Footer />
    </div>
</template>

<script>
// import { $router } from 'vue-router'
export default {
  middleware: 'auth',
  data() {
      return {
        url: '/avatar.jpg',
        selectedFiles: undefined,
      }
    },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get('/api/v1/user/detail/' + params.id)
    return { user }
  },
  methods: {
    onFileChange(e) {
        const file = e.target.files[0]
        this.url = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
      },
    async cancel (){
      // this.$router.push('/')
      // this.$router.go('/')
      window.location.reload()
    },
    async save() {
      try {
        let response = await this.$axios.$put(
          '/api/v1/user/update/' + this.$route.params.id,
          {
            name: this.user.data.name,
            email: this.user.data.email,
            description: this.user.data.description,
            occupation: this.user.data.occupation,
          }
        )
        console.log(response)
        // save()
      } catch (err) {
        console.log(err)
      }
    },
    changeImage(url) {
      this.default_image = url
    },
  },
}
</script>
