<template>
  <div class="container mx-auto h-full flex justify-center items-center ">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto pt-6 mb-8">
        <img src="/funded-illustration.svg" alt="" class="w-full " />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">Yeay! You are super</h2>
      <p class="text-center font-light">
        Your money has ben transferred
        <br />
        into company's account
      </p>
      <div class="container mt-6 border rounded-xl border-gray-500">
        <div class="p-4  justify-between">
          <p class="capitalize mt-4">order id : {{ $route.query.order_id }} </p>
           <p class="capitalize mt-4">status : {{ $route.query.transaction_status }} </p>
          <p class="capitalize mt-4">order id : {{ $route.query.order_id }} </p>
        </div>
         
      </div>
      <div class="mb-4 mt-6">
        <div class="mb-3">
          <button
            @click="$router.push({ path: '/' })"
            class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
          >
            Fund Other Project
          </button>
        </div>
        <div class="mb-4">
          <button
            @click="$router.push({ path: '/dashboard' })"
            class="block w-full bg-transparent border border-gray-500 text-gray-500 hover:bg-green-button hover:border-green-button hover:text-white font-light px-6 py-4 text-lg rounded-full"
          >
            My Dashboard
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'success',
}


</script>


