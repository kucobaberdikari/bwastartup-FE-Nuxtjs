<template>
  <div class="landing-page">
    <section class="dashboard-header pt-5">
      <!-- <div class="header__bg"></div> -->
      <div class="container mx-auto relative">
        <navbar />
      </div>
    </section>
    <section class="container mx-10 pt-5">
      <div class="flex justify-between">
        <div class=" w-3/12">
        <sidebar />
        </div>
        <div class="flex w-9/12 ">
          <div class="grid grid-cols-3 gap-4">
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
                class="rounded-20 w-full max-w-xs"
              />
            </figure>
            <div class="item-meta">
              <h5 class="text-3xl font-medium text-gray-900 mt-5">
                {{ campaign.name }}
              </h5>
              <p class="text-md font-light text-gray-900 h-12">
                {{ campaign.short_description }}
              </p>
              <p class="text-right text-sm"> day left</p>
              <div class="relative pt-1 progress-bar">
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
      </div>
    </section>
  </div>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    const campaigns = await $axios.$get('/api/v1/campaigns')
    return { campaigns }
  },
}
</script>
