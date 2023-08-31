<template>
  <section class="flex mb-1">
    <div class="w-1/5">
      <Sidebar />
    </div>
    <div class="w-4/5 pl-4">
      <section class="container mx-auto items-right" id="sorting">
        <div class="w-full mt-5 flex items-right right-0">
          <p class="text-md font-semibold text-black mx-4">urutkan</p>
          <!-- Dropdown menu -->
          <div class="dropdown inline-block relative">
              <button class="button-sm bg-transparent text-gray-700 font-semibold py-1 px-4 rounded-full border border-gray-500 inline-flex items-center">
                <span class="mr-1">Dropdown</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class="#"><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                <li class="#"><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                <li class="#"><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
              </ul>
          </div>
        </div>
      </section>
      <section class="container mx-auto pt-" id="projects">
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
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    layout:'projects',
    async asyncData({ $axios }) {
    const campaigns = await $axios.$get('/api/v1/campaigns')
    return { campaigns }
  },
  }
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>