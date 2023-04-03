<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
        <div class="container mx-auto relative">
            <Navbar />
        </div>
    </section>
    <section class="container mx-auto pt-8 sm:px-3 xl:px-0">
        <div class="flex mb-6">
            <div class="w-3/4 mr-6">
              <h2 class="text-4xl text-gray-900 mb-2 font-medium capitalize">{{ user.data.name }}  campaigns</h2>
              <div class="grid grid-cols-3 gap-4 mt-3">
                <div
                  v-for="campaign in campaigns.data"
                  :key="campaign.id"
                  class="card-project w-full p-5 border border-gray-500 rounded-20"
                >
                  <div class="item">
                    <figure class="item-image">
                      <img
                        :src="$axios.defaults.baseURL + '/' + campaign.image_url"
                        alt=""
                        class="rounded-20 w-full"
                      />
                    </figure>
                    <div class="item-meta">
                      <h5 class="text-3xl font-medium text-gray-900 mt-5">
                        {{ campaign.name }}
                      </h5>
                      <p class="text-md font-light text-gray-900 h-12">
                        {{ campaign.short_description }}
                      </p>
                      <div class="relative pt-4 progress-bar">
                        <div
                          class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                        >
                          <div
                            :style="
                              'width: ' +
                              (campaign.current_amount / campaign.goal_amount) * 100 +
                              '%'
                            "
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                          ></div>
                        </div>
                      </div>
                      <div class="flex progress-info">
                        <div>
                          {{ (campaign.current_amount / campaign.goal_amount) * 100 }}%
                        </div>
                        <div class="ml-auto font-semibold">
                          Rp {{ new Intl.NumberFormat().format(campaign.goal_amount) }}
                        </div>
                      </div>
                    </div>
                    <button
                      @click="
                        $router.push({
                          name: 'projects-id',
                          params: { id: campaign.id },
                        })
                      "
                      class="mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                    >
                      Fund Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/4 mt-12">
                <div
                  class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
                  style="top: 15px;"
                >
                  <div class="flex mt-3">
                    <div class="w-1/4">
                      <img
                        :src="
                          $axios.defaults.baseURL + '/' + user.data.image_url
                        "
                        alt=""
                        class="w-full inline-block rounded-full"
                      />
                    </div>
                    <div class="w-3/4 ml-5 mt-1">
                      <div class="font-semibold text-xl text-gray-800 capitalize">
                        {{ user.data.name }}
                      </div>
                      <div class="text-md text-gray-800 mt-1">
                        {{ user.data.occupation }}
                      </div>
                    </div>
                  </div>

                  <h4 class="mt-5 font-semibold">About me:</h4>
                  <p class="text-gray-800">
                      {{ user.data.description }}
                  </p>
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
export default {
  // async asyncData({ $axios, params }) {
  //   const campaigns = await $axios.$get('/api/v1/campaigns?user_id=' + params.id)
  //   return { campaigns }
  // },
  // async user({$axios,params}){
  //   const user = await $axios.$get('/api/v1/user/detail' + params.id)
  //   return { user }
  // },
  async asyncData({ $axios, params}) {
    const [campaigns, user] = await Promise.all([
      $axios.$get('api/v1/campaigns?user_id=' + params.id),
      $axios.$get('/api/v1/user/detail/' + params.id)
    ])
    return {
      campaigns, user
    }
  },
  data() {
    return {
      // default_image: '',
    //   transaction: {
    //     amount: 0,
    //     campaign_id: Number.parseInt(this.$route.params.id),
    //   },
    }
  },
  // methods: {
    // async fund() {
    //   try {
    //     let response = await this.$axios.$post(
    //       '/api/v1/transactions',
    //       this.transaction
    //     )
    //     window.location = response.data.payment_url
    //     console.log(response)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    // changeImage(url) {
    //   this.default_image = url
    // },
  // },
  // mounted() {
  //   this.default_image =
  //     this.$axios.defaults.baseURL + '/' + this.campaign.data.image_url
  // },
}
</script>
